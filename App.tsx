
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import CareerDetail from './pages/CareerDetail';
import Auth from './pages/Auth';
import CareerExplorer from './pages/CareerExplorer';
import Blog from './pages/Blog';
import About from './pages/About';
import Roadmap from './pages/Roadmap';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Trắc nghiệm', path: '/test' },
    { name: 'Khám phá', path: '/explorer' },
    { name: 'Lộ trình', path: '/roadmap' },
    { name: 'Cẩm nang', path: '/blog' },
    { name: 'Về chúng tôi', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">explore</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">CareerPaths <span className="text-primary">VN</span></h2>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            <Link to="/auth" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">Đăng nhập</Link>
            <Link to="/auth" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">Đăng ký</Link>
          </div>
          <button className="lg:hidden text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className={`text-base font-semibold ${isActive(link.path) ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-100 dark:border-slate-800" />
            <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-primary">Đăng nhập / Đăng ký</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">explore</span>
          <span className="font-bold text-lg">CareerPaths VN</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          Nền tảng hướng nghiệp hàng đầu Việt Nam giúp giới trẻ tìm thấy đam mê và xây dựng lộ trình sự nghiệp vững chắc.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Liên kết</h4>
        <ul className="text-sm text-slate-500 space-y-2">
          <li><Link to="/" className="hover:text-primary">Trang chủ</Link></li>
          <li><Link to="/about" className="hover:text-primary">Về chúng tôi</Link></li>
          <li><Link to="/explorer" className="hover:text-primary">Nghề nghiệp</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Cẩm nang</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Hỗ trợ</h4>
        <ul className="text-sm text-slate-500 space-y-2">
          <li><a href="#" className="hover:text-primary">Trung tâm trợ giúp</a></li>
          <li><a href="#" className="hover:text-primary">Liên hệ</a></li>
          <li><a href="#" className="hover:text-primary">Bảo mật</a></li>
          <li><a href="#" className="hover:text-primary">Điều khoản</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Theo dõi</h4>
        <div className="flex gap-4">
          <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined !text-lg">public</span>
          </button>
          <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined !text-lg">alternate_email</span>
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
      <p className="text-slate-400 text-xs">© 2024 CareerPath VN. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
            <Route path="/explorer" element={<CareerExplorer />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/career/:id" element={<CareerDetail />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
