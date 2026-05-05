import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Wrench, ShieldCheck, Cpu, Anchor, Battery, Zap, CheckCircle2, Factory, HandMetal, HeartHandshake } from 'lucide-react';
import { ConsultationModal } from '../components/ConsultationModal';

const services = [
  {
    id: 'konsultasi',
    title: 'Konsultasi & Perencanaan',
    description: 'Kami menganalisis kebutuhan energi dan struktur atap Anda untuk memberikan desain sistem panel surya yang paling efisien dan sesuai dengan anggaran.',
    icon: Settings,
    features: ['Analisis tagihan listrik', 'Survei lokasi', 'Desain sistem kustom', 'Estimasi penghematan']
  },
  {
    id: 'instalasi',
    title: 'Instalasi & Pengujian',
    description: 'Tim teknisi tersertifikasi kami memasang panel surya dengan standar keamanan tertinggi, dan memastikan semua komponen berfungsi optimal sebelum serah terima.',
    icon: Wrench,
    features: ['Pemasangan standar industri', 'Pengujian performa sistem', 'Integrasi inverter', 'Dukungan net metering PLN']
  },
  {
    id: 'garansi',
    title: 'Garansi & Pemeliharaan',
    description: 'Kami memberikan ketenangan pikiran dengan garansi panjang dan layanan pemeliharaan rutin untuk menjaga performa panel surya Anda tetap prima selama puluhan tahun.',
    icon: ShieldCheck,
    features: ['Garansi panel 25++ tahun', 'Pembersihan panel berkala', 'Pengecekan komponen elektrik', 'Layanan teknis prioritas']
  },
  {
    id: 'monitoring',
    title: 'Sistem Monitoring Pintar',
    description: 'Pantau produksi energi dan penghematan Anda secara real-time melalui aplikasi mobile, kapanpun dan dimanapun.',
    icon: Cpu,
    features: ['Aplikasi mobile khusus', 'Laporan bulanan otomatis', 'Deteksi anomali pintar', 'Integrasi smart home']
  }
];

const systemTypes = [
  {
    title: 'Sistem On-Grid',
    description: 'Solusi paling hemat biaya. Terhubung dengan jaringan PLN, kekurangan daya akan disuplai oleh PLN tanpa jeda untuk memastikan kebutuhan beban terlayani dengan baik.',
    icon: Anchor,
    features: ['Cocok untuk perkotaan', 'Pangkas tagihan PLN', 'Tanpa biaya baterai', 'Perlu izin PLN (Net Metering)']
  },
  {
    title: 'Sistem Off-Grid',
    description: '100% mandiri energi. Menggunakan baterai untuk menyimpan energi siang hari, dan digunakan saat malam. Tidak terhubung jaringan PLN sama sekali.',
    icon: Battery,
    features: ['Solusi daerah terpencil', 'Bebas pemadaman listrik', 'Mandiri tanpa PLN', 'Investasi baterai di awal']
  },
  {
    title: 'Sistem Hybrid',
    description: 'Yang terbaik dari dua dunia. Tetap terhubung PLN tapi punya baterai cadangan (backup) jika listrik PLN padam. Prioritas pemakaian dari matahari.',
    icon: Zap,
    features: ['Bebas dari pemadaman', 'Fleksibel dan pintar', 'Pemakaian optimal', 'Bisa atur porsi PLN/Baterai']
  }
];

const advantages = [
  {
    title: 'Komponen Tier-1 Global',
    description: 'Kami hanya menggunakan brand panel surya dan inverter kelas satu (Tier-1) global untuk menjamin efisiensi tinggi dan garansi 25+ tahun.',
    icon: CheckCircle2
  },
  {
    title: 'Teknisi Tersertifikasi',
    description: 'Tim lapangan dipimpin tenaga ahli bersertifikat Kementerian ESDM, mengutamakan estetika rumah dan standar keamanan ketat.',
    icon: Factory
  },
  {
    title: 'Bantuan Perizinan Penuh',
    description: 'Sistem On-Grid perlu izin dari PLN? Jangan ragu, tim kami yang akan menguruskan serah terima administratif SLO & Net Metering hingga selesai.',
    icon: HeartHandshake
  },
  {
    title: 'Komitmen Purna Jual',
    description: 'Layanan kami tidak berhenti setelah pemasangan selesai. Nikmati dukungan cepat tanggap dengan pemeriksaan dan pembersihan terjadwal.',
    icon: HandMetal
  }
];

export default function Layanan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Layanan <span className="text-toba-dark font-serif italic">Toba Energi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Solusi menyeluruh terpercaya untuk perjalanan transisi energi surya Anda. Dari survei awal hingga dukungan garansi jangka panjang.
          </motion.p>
        </div>

        {/* Section 1: End-to-end Services */}
        <div className="mx-auto max-w-5xl mb-32">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-toba-light"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-toba-accent text-toba-dark group-hover:bg-toba-dark group-hover:text-white transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="h-2 w-2 rounded-full bg-toba-light shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Pilihan Sistem */}
        <div className="mx-auto max-w-7xl mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Pilihan <span className="text-toba-dark font-serif italic">Sistem Surya</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Sesuaikan dengan kebutuhan dan kondisi kelistrikan properti Anda.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemTypes.map((sys, index) => (
              <motion.div
                key={sys.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden group"
              >
                {/* Decorative blob bg */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-gradient-to-br from-toba-light/10 to-transparent blur-2xl group-hover:bg-toba-light/20 transition-colors duration-500"></div>
                
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl w-12 h-12 flex items-center justify-center mb-6 relative z-10 text-toba-dark group-hover:scale-110 group-hover:bg-toba-dark group-hover:text-white transition-all duration-300">
                  <sys.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{sys.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 gap-3 relative z-10 min-h-[4rem]">
                  {sys.description}
                </p>
                <div className="space-y-2 relative z-10 border-t border-gray-200/60 pt-4">
                  {sys.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-toba-light" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Mengapa Toba Energi */}
        <div className="mx-auto max-w-6xl mb-32 bg-toba-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 -ml-24 -mt-24 h-96 w-96 rounded-full bg-toba-light/20 blur-[100px]" />
          
          <div className="text-center mb-16 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance"
            >
              Mengapa Memilih <span className="font-serif italic text-toba-accent opacity-90">Toba Energi?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {advantages.map((adv, index) => (
              <motion.div 
                key={adv.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 sm:gap-6 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-toba-accent text-toba-dark shadow-sm">
                  <adv.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed text-pretty">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl rounded-3xl bg-gray-50 px-6 py-12 text-center sm:px-12 border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-toba-light/10 blur-[50px] rounded-full pointer-events-none" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Siap untuk memulai?</h2>
          <p className="text-gray-600 mb-8 mx-auto max-w-xl">
            Mari diskusikan kebutuhan energi Anda dengan tim ahli kami dan dapatkan penawaran khusus.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex rounded-full bg-toba-dark px-8 py-3.5 text-sm font-semibold text-white hover:bg-toba-light transition-colors shadow-sm"
          >
            Hubungi Konsultan Kami
          </button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
