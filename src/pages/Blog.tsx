import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, BookOpen, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { ConsultationModal } from '../components/ConsultationModal';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Semua', 'Panduan & Edukasi', 'Teknologi & Solusi', 'Regulasi & Legalitas', 'Finansial & Investasi'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.keywords.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Pusat Edukasi & Artikel Panel Surya"
        description="Panduan lengkap pemasangan panel surya (PLTS atap), cara kerja sistem on-grid & hybrid, regulasi perizinan PLN, dan simulasi penghematan listrik dari PT Toba Energi Nusajaya."
        keywords="artikel panel surya, panduan plts atap, edukasi energi terbarukan, hemat listrik pln, toba energi blog"
        canonicalPath="/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Pusat Edukasi & Blog PLTS Toba Energi Nusajaya',
          description:
            'Kumpulan panduan teknis, artikel regulasi, dan tips penghematan listrik tenaga surya di Indonesia.',
          url: 'https://tobaenergi.com/blog',
          publisher: {
            '@type': 'Organization',
            name: 'PT. Toba Energi Nusajaya',
            url: 'https://tobaenergi.com',
            logo: 'https://tobaenergi.com/images/logo.png',
          },
        }}
      />

      <div className="pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-toba-light/20 text-toba-dark text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Pusat Pengetahuan Energi Terbarukan
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Edukasi & Artikel <span className="text-toba-dark font-serif italic">Panel Surya</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Pelajari semua hal tentang sistem PLTS atap, mulai dari kalkulasi penghematan biaya, panduan regulasi resmi PLN, hingga tips memilih sistem yang tepat untuk hunian dan bisnis Anda.
            </motion.p>
          </div>

          {/* Search & Category Filter */}
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel (misal: penghematan listrik, perizinan PLN, hybrid)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-toba-dark focus:ring-2 focus:ring-toba-light/30 shadow-sm transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-toba-dark text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <Link to={`/blog/${post.slug}`} className="relative h-60 w-full overflow-hidden bg-gray-100 block">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/95 text-toba-dark text-xs font-semibold shadow-sm backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-toba-accent" />
                        {new Date(post.publishedDate).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-toba-accent" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-toba-dark transition-colors line-clamp-2 mb-3">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">{post.summary}</p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="text-xs text-gray-500">
                        Ditulis oleh <span className="font-semibold text-gray-800">{post.author.name}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-toba-dark group-hover:text-toba-light transition-colors"
                      >
                        Baca Artikel <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl">
              <p className="text-gray-500">Tidak ada artikel yang sesuai dengan kriteria pencarian Anda.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="mt-4 text-sm font-semibold text-toba-dark underline hover:text-toba-light"
              >
                Reset Filter & Pencarian
              </button>
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-24 rounded-3xl bg-gradient-to-br from-toba-dark to-[#0f2e24] p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-toba-accent text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Konsultasi & Survei Gratis
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ingin Mengetahui Potensi Penghematan Listrik di Properti Anda?
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-8">
                Konsultasikan kebutuhan kapasitas daya dan spesifikasi atap Anda bersama tim insinyur tersertifikasi Toba Energi. Tanpa biaya survei awal untuk wilayah Jabodetabek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full bg-white text-toba-dark px-8 py-3.5 text-sm font-semibold hover:bg-toba-light hover:text-white transition-all shadow-md"
                >
                  Hitung Estimasi Sistem
                </button>
                <a
                  href="https://wa.me/6285370716686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all text-white"
                >
                  Chat WhatsApp Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
