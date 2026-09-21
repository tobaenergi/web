import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Phone, MapPin, Mail, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
const Layanan = lazy(() => import('./pages/Layanan'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const TentangKami = lazy(() => import('./pages/TentangKami'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <Link to="/">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/images/logo.png" 
              alt="Logo PT Toba Energi Nusajaya - Jasa Pasang Panel Surya" 
              width={160}
              height={40}
              className="h-10 w-auto object-contain cursor-pointer transition-shadow hover:drop-shadow-lg"
              onError={(e) => { 
                e.currentTarget.src = 'https://i.ibb.co/6RJfsL9j/TEN-Electric-Copy.png';
                e.currentTarget.onerror = null; 
              }}
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors relative group ${pathname === '/' ? 'text-toba-dark' : 'text-gray-500 hover:text-toba-dark'}`}>
            Beranda
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform origin-left duration-300 ${pathname === '/' ? 'scale-x-100 bg-toba-dark' : 'scale-x-0 bg-toba-light group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/layanan" className={`text-sm font-medium transition-colors relative group ${pathname === '/layanan' ? 'text-toba-dark' : 'text-gray-500 hover:text-toba-dark'}`}>
            Layanan
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform origin-left duration-300 ${pathname === '/layanan' ? 'scale-x-100 bg-toba-dark' : 'scale-x-0 bg-toba-light group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/portfolio" className={`text-sm font-medium transition-colors relative group ${pathname === '/portfolio' ? 'text-toba-dark' : 'text-gray-500 hover:text-toba-dark'}`}>
            Portfolio
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform origin-left duration-300 ${pathname === '/portfolio' ? 'scale-x-100 bg-toba-dark' : 'scale-x-0 bg-toba-light group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/tentang-kami" className={`text-sm font-medium transition-colors relative group ${pathname === '/tentang-kami' ? 'text-toba-dark' : 'text-gray-500 hover:text-toba-dark'}`}>
            Tentang Kami
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform origin-left duration-300 ${pathname === '/tentang-kami' ? 'scale-x-100 bg-toba-dark' : 'scale-x-0 bg-toba-light group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/blog" className={`text-sm font-medium transition-colors relative group ${pathname.startsWith('/blog') ? 'text-toba-dark' : 'text-gray-500 hover:text-toba-dark'}`}>
            Blog & Edukasi
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform origin-left duration-300 ${pathname.startsWith('/blog') ? 'scale-x-100 bg-toba-dark' : 'scale-x-0 bg-toba-light group-hover:scale-x-100'}`}></span>
          </Link>
        </nav>

        {/* Action Desktop */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/6285370716686"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-toba-dark px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-toba-light hover:-translate-y-0.5 hover:shadow-lg md:flex gap-2"
          >
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
          <button 
            className="md:hidden text-toba-dark p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 pb-8">
              <Link to="/" className={`text-base font-medium ${pathname === '/' ? 'text-toba-dark' : 'text-gray-600'}`} onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
              <Link to="/layanan" className={`text-base font-medium ${pathname === '/layanan' ? 'text-toba-dark' : 'text-gray-600'}`} onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
              <Link to="/portfolio" className={`text-base font-medium ${pathname === '/portfolio' ? 'text-toba-dark' : 'text-gray-600'}`} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
              <Link to="/tentang-kami" className={`text-base font-medium ${pathname === '/tentang-kami' ? 'text-toba-dark' : 'text-gray-600'}`} onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
              <Link to="/blog" className={`text-base font-medium ${pathname.startsWith('/blog') ? 'text-toba-dark' : 'text-gray-600'}`} onClick={() => setIsMobileMenuOpen(false)}>Blog & Edukasi</Link>
              <div className="pt-4 mt-2 border-t border-gray-50">
                <a 
                  href="https://wa.me/6285370716686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-toba-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-toba-light gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-toba-dark pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <span className="text-2xl font-bold tracking-tight text-white">PT. Toba Energi Nusajaya</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-8 text-pretty">
              Membumikan transisi energi nusantara. Kami berkomitmen memberikan solusi panel surya yang andal, jujur, dan mudah diakses untuk masa depan bersinar.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tobaenergi/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-toba-light hover:text-toba-dark transition-colors" aria-label="Instagram Toba Energi">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/toba-energi/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-toba-light hover:text-toba-dark transition-colors" aria-label="LinkedIn Toba Energi">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4">
              <li><Link to="/tentang-kami" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Tentang Kami</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Portfolio Proyek</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Blog & Artikel</Link></li>
              <li><Link to="/layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Paket Layanan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Layanan PLTS</h3>
            <ul className="space-y-4">
              <li><Link to="/layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Rumah Tangga</Link></li>
              <li><Link to="/layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Bisnis & UMKM</Link></li>
              <li><Link to="/layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Komersial & Industri</Link></li>
              <li><Link to="/layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Konsultasi & Perizinan PLN</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kantor & Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-toba-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">Jl. Raya Kertamaya No. 1, Kertamaya, Bogor Selatan, Kota Bogor, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-toba-accent shrink-0" />
                <a href="https://wa.me/6285370716686" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-white transition-colors">+62 853 7071 6686</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-toba-accent shrink-0" />
                <a href="mailto:info@tobaenergi.com" className="text-white/70 text-sm hover:text-white transition-colors">info@tobaenergi.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} PT Toba Energi Nusajaya. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <Link to="/tentang-kami" className="text-white/80 hover:text-white text-sm transition-colors">Tentang Kami</Link>
            <Link to="/layanan" className="text-white/80 hover:text-white text-sm transition-colors">Layanan PLTS</Link>
            <Link to="/blog" className="text-white/80 hover:text-white text-sm transition-colors">Blog Edukasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-toba-light/20 selection:text-toba-dark">
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-[50vh] bg-white flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-toba-dark border-t-transparent animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
