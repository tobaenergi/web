import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl relative"
          >
            <div className="absolute top-4 right-4">
              <button 
                onClick={onClose} 
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-toba-light/20 pb-4 inline-block">Konsultasi Gratis</h3>
              <p className="mt-2 text-sm text-gray-600">Isi formulir di bawah ini untuk terhubung dengan pakar energi kami via WhatsApp.</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const message = formData.get('message');
              
              // Format parameter untuk URL WA
              const rawText = `Halo Toba Energi,\n\nNama saya ${name} (${phone}).\n\n${message}`;
              const encodedText = encodeURIComponent(rawText);
              
              window.open(`https://wa.me/6285370716686?text=${encodedText}`, '_blank');
              onClose();
            }}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-toba-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-toba-dark transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-toba-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-toba-dark transition-colors"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan / Pertanyaan</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3} 
                    required 
                    className="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-toba-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-toba-dark transition-colors resize-none"
                    placeholder="Ceritakan kebutuhan energi Anda..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-toba-dark px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-toba-light hover:-translate-y-0.5 hover:shadow-md"
                >
                  Kirim via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
