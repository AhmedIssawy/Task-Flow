import { Request, Response, NextFunction } from 'express';
import { Language } from '../../types/common/index.js';

// Extend Request interface to include lang property
interface LanguageRequest extends Request {
  lang?: Language;
  cookies: {
    lang?: Language;
    [key: string]: any;
  };
}

const detectLanguage = () => {
  return (req: LanguageRequest, res: Response, next: NextFunction): void => {
    const headerLang = req.headers["lang"] as Language;
    const lang: Language = req.cookies?.lang || headerLang || "en";
    
    // Validate language is supported
    const supportedLanguages: Language[] = ['en', 'ar'];
    const validLang: Language = supportedLanguages.includes(lang) ? lang : 'en';
    
    if (!req.cookies?.lang) {
      res.cookie("lang", validLang, {
        httpOnly: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 365 * 1000, // 1 year
      });
    }
    
    req.lang = validLang;
    // console.log("Detected language:", validLang);
    next();
  };
};

export default detectLanguage;
