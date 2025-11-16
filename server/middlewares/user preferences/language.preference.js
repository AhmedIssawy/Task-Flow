import "dotenv/config";

// Helper function to detect production environment
const isProductionEnvironment = (req) => {
  return process.env.NODE_ENV === "production" || 
         process.env.VERCEL || 
         process.env.RAILWAY_ENVIRONMENT ||
         req.get('host')?.includes('vercel.app') ||
         req.get('host')?.includes('railway.app') ||
         req.get('host')?.includes('herokuapp.com') ||
         req.get('host')?.includes('render.com');
};

const detectLanguage = () => {
  return (req, res, next) => {
    const lang = req.cookies?.lang || req.headers["lang"] || "en";
    if (!req.cookies?.lang) {
      const isProduction = isProductionEnvironment(req);
      
      res.cookie("lang", lang, {
        httpOnly: false,
        secure: true,
        sameSite: isProduction ? "none" : "lax",
        path: "/",
        maxAge: 24 * 60 * 60 * 365 * 1000, // 1 year
      });
    }
    req.lang = lang;
    // console.log("Detected language:", lang);
    next();
  };
};

export default detectLanguage;
