import React, { useState, useEffect } from 'react';
import { Phone, Zap, Factory, Building2, Home as HomeIcon, ArrowRight, Menu, X, Sun, Wallet, MapPin, Mail, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Layanan from './pages/Layanan';
import Portfolio from './pages/Portfolio';
import TentangKami from './pages/TentangKami';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titleMap: Record<string, string> = {
      '/': 'Toba Energi Nusajaya | Solusi Panel Surya Terpercaya',
      '/layanan': 'Layanan Pemasangan PLTS | Toba Energi Nusajaya',
      '/portfolio': 'Portfolio Proyek Panel Surya | Toba Energi Nusajaya',
      '/tentang-kami': 'Tentang Toba Energi Nusajaya'
    };

    document.title = titleMap[pathname] || 'Toba Energi Nusajaya';
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
          {/* Ganti atribut src di bawah dengan letak atau URL gambar logo Anda */}
          <Link to="/">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/images/logo.png" 
              alt="Logo Toba Energi" 
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
              <a href="https://www.instagram.com/tobaenergi/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-toba-light hover:text-toba-dark transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/toba-energi/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-toba-light hover:text-toba-dark transition-colors">
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
              <li><a href="#" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Karir</a></li>
              <li><a href="#" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Blog & Artikel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Layanan</h3>
            <ul className="space-y-4">
              <li><a href="#layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Rumah Tangga</a></li>
              <li><a href="#layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Bisnis & UMKM</a></li>
              <li><a href="#layanan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">PLTS Komersial & Industri</a></li>
              <li><a href="#konsultasi" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block">Konsultasi Energi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-toba-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">Jl. Raya Kertamaya No. 1, Kertamaya, Bogor Selatan, Bogor</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-toba-accent shrink-0" />
                <span className="text-white/70 text-sm">+62 853 7071 6686</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-toba-accent shrink-0" />
                <span className="text-white/70 text-sm">info@tobaenergi.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Toba Energi. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Syarat & Ketentuan</a>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
