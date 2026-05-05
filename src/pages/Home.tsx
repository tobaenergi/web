import React, { useState } from 'react';
import { Zap, ArrowRight, Sun, Home as HomeIcon, Building2, Factory, Wallet, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ConsultationModal } from '../components/ConsultationModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36">
      {/* Decorative subtle background blobs */}
      <div className="absolute top-0 left-1/2 -z-10 -ml-24 h-[40rem] w-[80rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-toba-accent to-white opacity-50 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight sm:leading-tight"
          >
            Solusi Listrik Tenaga Surya <br className="hidden sm:block" />
            untuk <span className="text-toba-dark font-serif italic">Setiap Kebutuhan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Toba Energi menghadirkan sistem panel surya berkualitas tinggi untuk rumah, bisnis, dan industri. Kurangi tagihan listrik dan mulailah kemandirian energi Anda bersama kami.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-toba-dark px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-toba-light hover:shadow-lg hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-toba-dark transition-all duration-300"
            >
              Konsultasi Gratis
            </button>
            <Link to="/layanan" className="group text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 transition-colors hover:text-toba-dark">
              Pelajari Layanan Kami <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

function HowItWorks() {
  const paragraphs = [
    {
      title: 'Menangkap Sinar Matahari',
      text: 'Panel surya yang dipasang di atap berfungsi seperti "daun" yang menyerap cahaya matahari. Sepanjang hari, cahaya ini langsung diubah menjadi energi listrik secara alami, tanpa suara, dan tanpa polusi.',
      icon: Sun,
    },
    {
      title: 'Mengubah Jadi Listrik Siap Pakai',
      text: 'Listrik mentah dari matahari belum bisa langsung dipakai. Di sinilah alat bernama Inverter bekerja. Ia mengubah listrik mentah tersebut menjadi listrik standar yang aman dan cocok untuk menyalakan semua peralatan elektronik Anda.',
      icon: Zap,
    },
    {
      title: 'Mengurangi Tarikan Listrik PLN',
      text: 'Listrik dari tenaga surya akan otomatis digunakan lebih dulu untuk kebutuhan rumah atau bisnis Anda. Selama matahari bersinar, alat-alat elektronik Anda menyedot listrik "gratis" dari atap.',
      icon: HomeIcon,
    },
    {
      title: 'Tabungan dari Sisa Listrik',
      text: 'Saat siang hari yang terik, panel surya mungkin menghasilkan listrik lebih banyak dari yang Anda gunakan. Sisa listrik ini tidak terbuang sia-sia, melainkan secara otomatis mengisi baterai. Energi yang tersimpan akan digunakan saat malam hari.',
      icon: Wallet,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-toba-light/20 bg-toba-light/5 px-4 py-1.5 text-sm font-medium text-toba-dark text-center"
          >
            Cara Kerja Pembangkit Listrik Tenaga Surya (PLTS)
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Cerdas Berenergi. <span className="font-serif italic text-toba-dark hover:text-toba-light transition-colors">Hemat Berkali Lipat.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 text-balance">
            Temukan bagaimana sinar matahari diubah menjadi aliran listrik bersih yang siap memangkas tagihan bulanan Anda secara otomatis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ilustrasi Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-toba-light/30 to-toba-accent rounded-[3rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 group">
              <img 
                src="https://raw.githubusercontent.com/tobaenergi/web/refs/heads/main/public/images/home.webp" 
                alt="Ilustrasi panel surya di atas atap menyerap sinar matahari" 
                className="w-full h-full object-cover rounded-[2rem] aspect-square lg:aspect-[4/5] transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-semibold mb-3">
                  <Sun className="h-3 w-3" /> Bersih & Terbarukan
                </div>
                <p className="font-medium text-lg text-white/90">Instalasi rapi dan aman di atap properti Anda, siap menangkap sinar matahari secara maksimal.</p>
              </div>
            </div>
          </motion.div>

          {/* Langkah-langkah */}
          <div className="order-1 lg:order-2 px-4 sm:px-0 relative mb-8 lg:mb-0">
            {paragraphs.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 sm:gap-6 mb-10 last:mb-0 group relative"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-toba-accent text-toba-dark group-hover:bg-toba-dark group-hover:text-white transition-all duration-300 shadow-sm border border-toba-light/20 z-10 scale-100 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  {index !== paragraphs.length - 1 && (
                    <div className="w-0.5 h-full min-h-[3rem] bg-gray-200 mt-4 group-hover:bg-toba-light/40 transition-colors duration-300"></div>
                  )}
                </div>
                <div className="pt-1 sm:pt-2 pb-4 transform transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-toba-dark transition-colors duration-300 flex items-center gap-3">
                    <span className="text-sm font-black text-toba-light/80 bg-toba-light/10 px-2 py-0.5 rounded-lg border border-toba-light/20 group-hover:bg-toba-dark group-hover:text-white transition-colors duration-300">0{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-sans mt-2">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  const stats = [
    { id: 1, name: 'Total Kapasitas Terpasang', value: '15+ MWp' },
    { id: 2, name: 'Proyek Berhasil Diselesaikan', value: '350+' },
    { id: 3, name: 'Reduksi Emisi Karbon (Ton)', value: '25.000+' },
    { id: 4, name: 'Kota Terjangkau', value: '12+' },
  ];

  return (
    <section className="bg-toba-dark py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative subtle background blobs */}
      <div className="absolute top-1/2 left-1/2 -z-10 -ml-24 h-[40rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-toba-light/20 to-transparent opacity-50 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Jejak Langkah <span className="font-serif italic text-toba-accent opacity-90">Toba Energi</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/80 font-medium">
              Komitmen nyata kami dalam menghadirkan masa depan energi yang lebih bersih untuk nusantara.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-3xl text-center sm:grid-cols-2 lg:grid-cols-4 bg-white/10 ring-1 ring-white/10">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(5, 78, 102, 0.7)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-toba-dark/50 p-8 backdrop-blur-sm relative overflow-hidden group transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-toba-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <dt className="text-sm font-semibold leading-6 text-gray-300 z-10">{stat.name}</dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-white mb-2 z-10 group-hover:scale-110 transition-transform duration-300 origin-bottom">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-toba-light/20 bg-toba-light/5 px-4 py-1.5 text-sm font-medium text-toba-dark"
          >
            Solusi Untuk Semua
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Untuk Siapa <span className="font-serif italic text-toba-dark hover:text-toba-light transition-colors">Listrik Tenaga Surya Ini?</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 text-balance">
            Sistem Pembangkit Listrik Tenaga Surya (PLTS) kami dirancang secara fleksibel dan presisi untuk memenuhi kebutuhan mulai dari skala bangunan hunian hingga efisiensi operasional pabrik.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Rumah Tangga',
                description: 'Kemandirian energi dan penghematan biaya listrik bulanan untuk hunian Anda.',
                icon: HomeIcon,
              },
              {
                title: 'Bisnis & UMKM',
                description: 'Optimalkan biaya operasional bisnis Anda dengan sumber energi yang efisien.',
                icon: Building2,
              },
              {
                title: 'Komersial & Industri',
                description: 'Solusi energi skala besar untuk mendukung target ESG dan efisiensi pabrik.',
                icon: Factory,
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-toba-light/20 hover:border-toba-light/30 hover:-translate-y-2 group"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-toba-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-150 origin-center pointer-events-none"></div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-toba-accent text-toba-dark group-hover:bg-toba-dark group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-toba-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 text-balance relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Milestones />
      <Services />
      <HowItWorks />
    </>
  );
}
