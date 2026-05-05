import React from 'react';
import { motion } from 'motion/react';
import { Sun, Target, Users, Zap, Award } from 'lucide-react';

export default function TentangKami() {
  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Tentang <span className="text-toba-dark font-serif italic">Toba Energi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Berawal dari kepedulian terhadap kemerdekaan energi di pelosok nusantara, kami bertumbuh menjadi pelopor solusi panel surya yang andal dan berkelanjutan.
          </motion.p>
        </div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-lg text-gray-600 leading-relaxed relative flow-root">
            <div className="lg:float-left lg:w-[45%] lg:mr-10 lg:mb-8 mb-8 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://raw.githubusercontent.com/tobaenergi/web/refs/heads/main/public/images/tentang%20kami.webp" 
                alt="Tim bekerja menginstal panel surya" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl font-semibold text-white">Menerangi Nusantara Sejak 2016</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 lg:mt-0 pt-2 lg:text-left">
              Cerita Perjalanan Kami
            </h2>

            <div className="space-y-6">
              <p>
                Toba Energi Nusantara dibangun oleh para profesional yang telah mendedikasikan hidupnya dan berpengalaman panjang dalam bidang Pembangkit Listrik Tenaga Surya (PLTS).
              </p>
              <p>
                Perjalanan kami dimulai secara nyata pada tahun 2016. Saat itu, kami terjun langsung terlibat dalam berbagai proyek pembangunan PLTS di daerah <strong>3T (Tertinggal, Terdepan, dan Terluar)</strong> yang tersebar di seluruh penjuru Indonesia. Fokus utama kami pada awalnya adalah membangun <strong>PLTS Terpusat</strong>, memberikan akses penerangan mandiri dan andal dengan energi matahari bagi desa-desa pedalaman.
              </p>
              <p>
                Berbekal jam terbang di medan yang sangat menantang tersebut, kami secara resmi membentuk badan usaha <strong>PT Toba Energi Nusajaya</strong> pada tahun 2020. Kelahiran perusahaan kami diwarnai oleh tantangan berat pandemi COVID 19 dan pembatasan sosial (PSBB). Namun, kami meyakini bahwa bisnis dan transisi energi harus tetap berjalan.
              </p>
              <p>
                Untuk memastikan operasional tetap bertahan, kami bermanuver dengan fokus mendistribusikan dan menjual material pendukung PLTS berkualitas, mulai dari inverter, charger controller, baterai, dan komponen penunjang lainnya.
              </p>
              <p>
                Hingga akhirnya pada tahun 2023, kami kembali bangkit lebih kuat. Kami secara resmi memulai berbagai proyek instalasi secara mandiri di bawah nama badan usaha sendiri, menghadirkan standar keandalan tingkat tinggi untuk instalasi komersial, industri, maupun residensial.
              </p>
            </div>

            {/* Legalitas Box */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl ring-1 ring-gray-100/50 flex flex-col sm:flex-row items-start gap-4 clear-both">
              <div className="bg-white p-3 rounded-xl text-toba-dark shadow-sm shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Legalitas Terjamin</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Sebagai perusahaan berbadan hukum yang sah, kami menjamin keamanan transaksi dan garansi pengerjaan untuk setiap klien kami.
                  <br className="mb-1" />
                  <span className="font-medium text-gray-500 text-xs mt-2 inline-block">SK Kemenkumham: AHU-0019541.AH.01.01.TAHUN 2020</span>
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Milestone/Stats */}
        <div className="bg-gray-50 rounded-[3rem] p-8 sm:p-16 mb-32">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 bg-toba-light/20 rounded-full flex items-center justify-center mb-6 text-toba-dark">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">2016</h3>
              <p className="text-gray-600 font-medium">Turun ke Pelosok 3T</p>
              <p className="text-sm text-gray-500 mt-2">Membangun PLTS Terpusat di area terluar Indonesia.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 bg-toba-light/20 rounded-full flex items-center justify-center mb-6 text-toba-dark">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">2020</h3>
              <p className="text-gray-600 font-medium">PT TEN & Penjualan Komponen</p>
              <p className="text-sm text-gray-500 mt-2">Lahir di tengah pandemi, bertahan dengan distribusi material.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 bg-toba-light/20 rounded-full flex items-center justify-center mb-6 text-toba-dark">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">2023</h3>
              <p className="text-gray-600 font-medium">Proyek Mandiri</p>
              <p className="text-sm text-gray-500 mt-2">Memulai instalasi komersial dan residensial secara mandiri.</p>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12"
          >
            Visi & Misi <span className="text-toba-dark font-serif italic">Utama Kami</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-gray-100"
            >
              <div className="bg-toba-light/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Sun className="h-6 w-6 text-toba-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi katalisator transisi energi utama di Indonesia, mengantarkan kemerdekaan energi yang merata, andal, dan ramah lingkungan dari pelosok hingga perkotaan.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-toba-dark rounded-3xl p-8 shadow-lg"
            >
               <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misi</h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>Menyediakan infrastruktur panel surya dengan keandalan standar tinggi.</li>
                <li>Memberikan edukasi transisi energi yang mudah dipahami semua kalangan.</li>
                <li>Menghadirkan solusi energi yang disesuaikan secara khusus demi keamanan dan efisiensi.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
