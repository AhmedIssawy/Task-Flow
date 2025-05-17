import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    // Example: navigate to /explore
    navigate('/explore');
  };

  const handleJoin = () => {
    // Example: navigate to /join
    navigate('/join');
  };

  return (
    <div dir="rtl" className="rtl-content min-h-screen bg-black text-white font-tahoma">
      {/* Header */}
      <header className="w-full bg-gray-900">
        <nav className="navbar max-w-6xl mx-auto flex justify-between items-center py-4 px-8">
          <div className="logo text-2xl">🎓 logo</div>
          <div className="nav-icons flex gap-3">
            <button type="button" aria-label="الرئيسية" className="hover:text-blue-400 focus:outline-white" onClick={() => navigate('/') }><i className="fa-solid fa-house"></i></button>
            <Link to="/search" aria-label="البحث" className="hover:text-blue-400 focus:outline-white"><i className="fa-solid fa-magnifying-glass"></i></Link>
            <Link to="/messages" aria-label="الرسائل" className="hover:text-blue-400 focus:outline-white"><i className="fa-solid fa-envelope"></i></Link>
            <Link to="/settings" aria-label="الإعدادات" className="hover:text-blue-400 focus:outline-white"><i className="fa-solid fa-gear"></i></Link>
            <Link to="/notifications" aria-label="الإشعارات" className="hover:text-blue-400 focus:outline-white"><i className="fa-solid fa-bell"></i></Link>
          </div>
          <button className="login-btn border border-white text-white px-4 py-2 rounded hover:bg-white/20 focus:outline-white transition" onClick={() => navigate('/login')}>تسجيل الدخول</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <section className="hero flex flex-wrap items-center gap-8 p-8 w-full max-w-6xl mx-auto">
          <img src={process.env.PUBLIC_URL + '/img/students.png'} alt="Students collaborating" className="w-[300px] max-w-full h-auto rounded-lg" />
          <div className="hero-text max-w-xl">
            <h1 className="text-3xl font-bold mb-4">
              اكتشف احدث الكورسات الشهيرة وابدأ <br />
              دروسك بشكل دوري<br />
              مع منصتنا
            </h1>
            <div className="hero-buttons flex gap-4 mb-4">
              <button type="button" className="explore btn px-6 py-3 font-bold rounded bg-gray-700 text-white hover:bg-gray-600 focus:outline-white transition" onClick={handleExplore}>استكشف</button>
              <button type="button" className="join btn px-6 py-3 font-bold rounded bg-white text-black hover:bg-gray-200 focus:outline-white transition" onClick={handleJoin}>انضم إلينا</button>
            </div>
            <p className="trusted-by text-sm">موثوق من <strong>اسم المؤسسة الفعلية</strong></p>
          </div>
        </section>

        <section className="cta-section flex flex-wrap justify-around gap-8 p-8 w-full max-w-6xl mx-auto bg-gray-900">
          <div className="cta-box border border-gray-700 p-6 flex-1 max-w-xs rounded">
            <p className="mb-4">هل أنت مستعد للبدء؟ أنشئ حساب مجاني الآن!</p>
            <button type="button" className="start-btn button w-full py-2 px-4 bg-white text-black font-bold rounded hover:bg-gray-200 focus:outline-white transition mb-2" onClick={() => navigate('/signup')}>ابدأ الآن</button>
            <Link to="/plans" className="plan-link block mt-2 text-gray-300 hover:underline focus:underline focus:outline-white">خطة الاشتراك</Link>
          </div>
          <div className="enterprise-box border border-gray-700 p-6 flex-1 max-w-xs rounded">
            <p className="mb-4">اكتشف Vocal Enterprise مع أدوات متقدمة للمؤسسات والشركات.</p>
            <button type="button" className="explore-enterprise button w-full py-2 px-4 bg-white text-black font-bold rounded hover:bg-gray-200 focus:outline-white transition" onClick={() => navigate('/enterprise')}>استكشف المزيد</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-gray-400 text-center mt-8">
        <div className="footer-cols flex flex-wrap justify-center gap-8 mb-4">
          <div>
            <h4 className="font-bold mb-2 text-white">
              <Link to="/about" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#d1d5db' }}>عن المنصة</Link>
            </h4>
            <p><Link to="/about" className="text-gray-400 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#9ca3af' }}>معلومات عامة</Link></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">
              <Link to="/explore" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#d1d5db' }}>اكتشف</Link>
            </h4>
            <p><Link to="/courses" className="text-gray-400 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#9ca3af' }}>الدورات</Link></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">
              <Link to="/universities" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#d1d5db' }}>الجامعات</Link>
            </h4>
            <p><Link to="/partners" className="text-gray-400 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#9ca3af' }}>شركاؤنا</Link></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">
              <Link to="/developers" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#d1d5db' }}>المطورين</Link>
            </h4>
            <p><Link to="/api" className="text-gray-400 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#9ca3af' }}>الواجهة البرمجية</Link></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">
              <Link to="/contact" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#d1d5db' }}>وسائل التواصل</Link>
            </h4>
            <p><Link to="/contact" className="text-gray-400 hover:text-gray-100 focus:text-gray-100 no-underline" style={{ color: '#9ca3af' }}>تابعنا</Link></p>
          </div>
        </div>
        <p className="footer-note text-xs">© جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Homepage;
