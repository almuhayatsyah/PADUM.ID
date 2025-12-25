import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Jasa Pembuatan Website, <span className="text-blue-600">Sistem POS & Aplikasi Kustom</span>
          </h1>
          <p className="text-lg text-gray-600">
            Solusi digital lengkap mulai dari Landing Page promosi, Sistem Kasir UMKM, hingga Web App kompleks sesuai kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20mau%20konsultasi%20website"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Konsultasi Gratis via WA <ArrowRight size={20} />
            </Link>
            <Link
              href="/portofolio"
              className="bg-white border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-sm hover:shadow-md"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
           {/* Placeholder for Hero Image - using a simple div for now or an SVG */}
           <div className="relative w-full max-w-lg aspect-square bg-blue-100 rounded-full blur-3xl opacity-30 absolute -z-10"></div>
           <img 
            src="https://placehold.co/600x400/3b82f6/ffffff?text=Website+Modern" 
            alt="Hero Illustration" 
            className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
           />
         </div>
        </div>
      </div>
    </section>
  );
}
