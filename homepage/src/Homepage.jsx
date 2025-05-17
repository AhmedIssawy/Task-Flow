import React from 'react';
import './homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Homepage = () => {
  const handleExplore = () => {
    console.log('Explore clicked');
  };

  const handleJoin = () => {
    console.log('Join clicked');
  };

  return (
    <div dir="rtl" className="rtl-content">
      {/* Header */}
      <header>
        <div className="navbar">
          <div className="logo">🎓 logo</div>
          <div className="nav-icons">
            <button type="button" aria-label="الرئيسية" onClick={() => console.log('Home clicked')}><i className="fa-solid fa-house"></i></button>
            <a href="#" aria-label="البحث"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" aria-label="الرسائل"><i className="fa-solid fa-envelope"></i></a>
            <a href="#" aria-label="الإعدادات"><i className="fa-solid fa-gear"></i></a>
            <a href="#" aria-label="الإشعارات"><i className="fa-solid fa-bell"></i></a>
          </div>
          <button className="login-btn">تسجيل الدخول</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="hero">
          <img src={`${process.env.PUBLIC_URL}/img/students.png`} alt="Students collaborating" />
          <div className="hero-text">
            <h1>
              اكتشف احدث الكورسات الشهيرة وابدأ <br />
              دروسك بشكل دوري<br />
              مع منصتنا
            </h1>
            <div className="hero-buttons">
<button type="button" className="explore btn" onClick={() => handleExplore()}>استكشف</button>
<button type="button" className="join btn" onClick={() => handleJoin()}>انضم إلينا</button>
            </div>
            <p className="trusted-by">موثوق من <strong>اسم المؤسسة الفعلية</strong></p>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-box">
            <p>هل أنت مستعد للبدء؟ أنشئ حساب مجاني الآن!</p>
            <button type="button" className="start-btn button" onClick={() => console.log('Start now clicked')}>ابدأ الآن</button>
            <a href="#" className="plan-link">خطة الاشتراك</a>
          </div>
          <div className="enterprise-box">
            <p>اكتشف Vocal Enterprise مع أدوات متقدمة للمؤسسات والشركات.</p>
            <button type="button" className="explore-enterprise button" onClick={() => console.log('Explore enterprise clicked')}>استكشف المزيد</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-cols">
          <div>
            <h4>عن المنصة</h4>
            <p>معلومات عامة</p>
          </div>
          <div>
            <h4>اكتشف</h4>
            <p>الدورات</p>
          </div>
          <div>
            <h4>الجامعات</h4>
            <p>شركاؤنا</p>
          </div>
          <div>
            <h4>المطورين</h4>
            <p>الواجهة البرمجية</p>
          </div>
          <div>
            <h4>وسائل التواصل</h4>
            <p>تابعنا</p>
          </div>
        </div>
        <p className="footer-note">© جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Homepage;
