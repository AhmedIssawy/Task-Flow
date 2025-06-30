const detectLanguage = () => {
  return (req, res, next) => {
    const lang = req.cookies?.lang || req.headers["lang"] || "en";
    if (!req.cookies?.lang){
        res.cookie("lang", lang, {
            httpOnly: false,
            maxAge: 24 * 60 * 60 * 365 * 1000, // 1 year
        })
    }
    req.lang = lang;
    console.log("Detected language:", lang);
    next();
  };
};

export default detectLanguage;
