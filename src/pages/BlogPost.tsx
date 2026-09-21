import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Phone,
  BookOpen,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { ConsultationModal } from '../components/ConsultationModal';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = post.relatedSlugs
    ? blogPosts.filter((p) => post.relatedSlugs?.includes(p.slug))
    : blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const currentUrl = `https://tobaenergi.com/blog/${post.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Baca artikel menarik ini: ${post.title} - ${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(currentUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@type': 'Organization',
        name: 'PT. Toba Energi Nusajaya',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'PT. Toba Energi Nusajaya',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tobaenergi.com/images/logo.png',
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    articleSection: post.category,
    keywords: post.keywords,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://tobaenergi.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://tobaenergi.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        publishedTime={post.publishedDate}
        author={post.author.name}
        schema={[postSchema, breadcrumbSchema]}
      />

      <article className="pt-20 pb-32">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-toba-dark transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-toba-dark transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="mx-auto max-w-4xl px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-toba-light/20 text-toba-dark text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
              <Calendar className="w-4 h-4 text-toba-accent" />
              {new Date(post.publishedDate).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
              <Clock className="w-4 h-4 text-toba-accent" />
              {post.readTime}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed font-normal border-l-4 border-toba-dark pl-4 italic">
            {post.summary}
          </p>

          {/* Author info & Share buttons */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-toba-dark text-white flex items-center justify-center font-bold text-sm shadow-sm">
                TE
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium mr-1 flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" /> Bagikan:
              </span>
              <button
                onClick={shareWhatsApp}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
                title="Bagikan ke WhatsApp"
              >
                WhatsApp
              </button>
              <button
                onClick={shareLinkedIn}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                title="Bagikan ke LinkedIn"
              >
                LinkedIn
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-1"
                title="Salin Tautan"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" /> Tersalin!
                  </>
                ) : (
                  'Salin Link'
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mx-auto max-w-5xl px-6 lg:px-8 mb-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none space-y-12">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 border-b border-gray-100 pb-3">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}

                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-2.5 my-4 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                    {section.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-toba-dark shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Internal CTA Banner in Article */}
          <div className="my-16 rounded-3xl bg-gradient-to-r from-toba-light/20 to-toba-accent/30 p-8 border border-toba-light/30 text-gray-900">
            <h3 className="text-xl font-bold mb-2">Ingin Konsultasi Gratis untuk Properti Anda?</h3>
            <p className="text-sm text-gray-700 mb-6">
              Tim ahli PT Toba Energi Nusajaya siap membantu analisis kebutuhan daya listrik, kelayakan atap, dan estimasi biaya pemasangan panel surya secara transparan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full bg-toba-dark px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-toba-light transition-all"
              >
                Jadwalkan Konsultasi Gratis
              </button>
              <a
                href="https://wa.me/6285370716686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-toba-dark hover:underline"
              >
                <Phone className="w-4 h-4" /> Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-toba-dark hover:text-toba-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Artikel Blog
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <aside className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-16 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Artikel Terkait Lainnya</h2>
              <Link
                to="/blog"
                className="text-xs sm:text-sm font-semibold text-toba-dark hover:text-toba-light flex items-center gap-1"
              >
                Lihat Semua <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.id}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <Link to={`/blog/${rPost.slug}`} className="relative h-44 w-full bg-gray-100 overflow-hidden block">
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-toba-dark mb-2">{rPost.category}</span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-toba-dark transition-colors line-clamp-2 mb-2">
                      <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4 flex-1">{rPost.summary}</p>
                    <Link
                      to={`/blog/${rPost.slug}`}
                      className="text-xs font-semibold text-toba-dark hover:underline inline-flex items-center gap-1 mt-auto"
                    >
                      Baca Selengkapnya <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        )}
      </article>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
