"use client";
import { useRef } from "react";
import { Globe, Database, Store, ShoppingCart, Code, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan solusi digital lengkap untuk membantu bisnis Anda tumbuh dan bersaing di era digital.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <FadeInSection delay={0.1}>
            <div className="md:col-span-1 bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 hover:scale-[1.02]">
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                {services[0].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[0].title}</h3>
              <p className="text-gray-600 leading-relaxed">{services[0].description}</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="md:col-span-1 bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 hover:scale-[1.02]">
               <div className="mb-6 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                {services[1].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[1].title}</h3>
              <p className="text-gray-600 leading-relaxed">{services[1].description}</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="md:col-span-1 bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 hover:scale-[1.02]">
               <div className="mb-6 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                {services[2].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[2].title}</h3>
              <p className="text-gray-600 leading-relaxed">{services[2].description}</p>
            </div>
          </FadeInSection>

          {/* Row 2 */}
          <FadeInSection delay={0.4}>
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl border border-blue-500 hover:shadow-xl transition duration-300 hover:scale-[1.02] flex flex-col md:flex-row items-start md:items-center gap-6">
               <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                 {/* Override icon color for dark background */}
                 <ShoppingCart size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{services[3].title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">{services[3].description}</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="md:col-span-1 bg-gray-900 text-white p-8 rounded-2xl border border-gray-800 hover:shadow-xl transition duration-300 hover:scale-[1.02]">
               <div className="mb-6 bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center">
                <Code size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{services[4].title}</h3>
              <p className="text-gray-400 leading-relaxed">{services[4].description}</p>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}

