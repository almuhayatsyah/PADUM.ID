"use client";
import React, { useRef } from "react";
import { Globe, Database, Store, ShoppingCart, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: <Globe size={40} className="text-blue-600" />,
    title: "Landing Page Website",
    description: "Website satu halaman yang menarik dan responsif untuk mempromosikan produk, jasa, atau personal branding Anda secara efektif.",
  },
  {
    icon: <Database size={40} className="text-blue-600" />,
    title: "Landing Page + CMS",
    description: "Website landing page dengan sistem manajemen konten (CMS) yang memudahkan Anda mengupdate teks dan gambar sendiri tanpa coding.",
  },
  {
    icon: <Store size={40} className="text-blue-600" />,
    title: "Sistem POS UMKM",
    description: "Aplikasi Point of Sale (POS) sederhana namun canggih untuk mencatat transaksi penjualan harian UMKM dengan laporan otomatis.",
  },
  {
    icon: <ShoppingCart size={40} className="text-blue-600" />,
    title: "Sistem Kasir + Manajemen Produk",
    description: "Solusi lengkap kasir digital dengan fitur manajemen stok produk, barcode scanning, dan laporan keuangan detail.",
  },
  {
    icon: <Code size={40} className="text-blue-600" />,
    title: "Web Apps Custom",
    description: "Pengembangan aplikasi berbasis web yang dirancang khusus sesuai dengan alur bisnis dam kebutuhan unik perusahaan Anda.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Solusi Digital Kami</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Layanan Profesional & Informatif</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Mulai dari digitalisasi UMKM hingga sistem perusahaan kustom, kami menghadirkan teknologi yang tepat mendampingi pertumbuhan bisnis Anda.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                >
                  {React.cloneElement(service.icon, { size: 120 })}
                </motion.div>
                
                <div className="mb-8 p-4 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                  Pelajari Selengkapnya <ChevronRight size={20} className="ml-1" />
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

