import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Calendar, Zap } from 'lucide-react';
import { ConsultationModal } from '../components/ConsultationModal';

const projects = [
  {
    id: 1,
    title: 'Instalasi PLTS Atap Perumahan Bekasi',
    location: 'Pd. Gede, Bekasi',
    date: 'Agustus 2023',
    capacity: '4.5 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/35TkFT6W/3.png'
  },
  {
    id: 2,
    title: 'Instalasi PLTS Atap Perumahan Rancamaya',
    location: 'Rancamaya, Bogor',
    date: 'Oktober 2023',
    capacity: '1.5 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/5XZQBMqK/2.png'
  },
  {
    id: 3,
    title: 'Instalasi PLTS Atap Perkantoran',
    location: 'Tanjung Priok, Jakarta',
    date: 'November 2023',
    capacity: '10 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/8nMzMq51/4.png'
  },
  {
    id: 4,
    title: 'Instalasi PLTS Atap Perumahan Sentul',
    location: 'Sentul, Bogor',
    date: 'April 2024',
    capacity: '2.5 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/WNTx85HL/1.png'
  },
  {
    id: 5,
    title: 'Instalasi PLTS Atap Perumahan Sentul',
    location: 'Sentul, Bogor',
    date: 'Juni 2024',
    capacity: '2.5 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/k2yc3Q8b/5.png'
  },
  {
    id: 6,
    title: 'Instalasi PLTS Atap Sekolah',
    location: 'Tambun, Bekasi',
    date: 'September 2024',
    capacity: '5 kWp',
    type: 'Hybrid',
    image: 'https://i.ibb.co/21GtSJ3G/6.png'
  }
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl border-transparent"
          >
            Jejak <span className="text-toba-dark font-serif italic">Langkah Kami</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Melihat lebih dekat karya instalasi panel surya yang telah kami hadirkan di berbagai wilayah. Dari rumah tangga hingga skala industri.
          </motion.p>
        </div>

        {/* Video Section (First section) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-5xl mb-24"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 bg-gray-50/50 aspect-video relative">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/-H0sGOTMEYI" 
              title="Toba Energi Instalasi" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
             <p className="text-sm font-medium text-toba-dark tracking-wide uppercase">Video Instalasi Terbaru</p>
             <h3 className="mt-2 text-xl font-bold text-gray-900">Perjalanan Proyek Kami Mengabdi Untuk Energi Bersih</h3>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Galeri <span className="text-toba-dark font-serif italic">Proyek</span></h2>
            <p className="text-gray-600">Beberapa portofolio pilihan instalasi Toba Energi.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-xl hover:ring-toba-light transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-toba-dark/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-4 group-hover:text-toba-dark transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400 shrink-0" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400 shrink-0" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Zap className="h-4 w-4 mr-2 text-toba-light shrink-0" />
                      <span className="font-semibold text-gray-900">{project.capacity}</span>
                    </div>
                  </div>
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
          className="mx-auto max-w-3xl rounded-3xl bg-toba-dark px-6 py-12 text-center sm:px-12 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-toba-light/20 blur-[80px]" />
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Ingin proyek Anda menjadi portofolio kami selanjutnya?</h2>
          <p className="text-white/80 mb-8 mx-auto max-w-xl">
            Mari mulai diskusikan rencana transisi energi bangunan Anda bersama pakar kami.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-toba-dark hover:bg-toba-light transition-colors shadow-sm"
          >
            Konsultasi Gratis
          </button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
