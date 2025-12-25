"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 md:pt-48 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 -u-translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[100px] z-0"
      ></motion.div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left space-y-8"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1]">
              Transformasi Digital <span className="text-blue-600">Bisnis Anda</span> Bersama Kami
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kami menghadirkan solusi teknologi mutakhir mulai dari Landing Page eksklusif, Sistem POS terintegrasi, hingga pengembangan Web App kustom untuk mengakselerasi pertumbuhan bisnis Anda.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20mau%20konsultasi%20website"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Mulai Konsultasi <ArrowRight size={22} />
              </Link>
              <Link
                href="/portofolio"
                className="bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Lihat Portofolio
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 scale-[1.02] opacity-10 animate-pulse"></div>
            <img 
              src="https://placehold.co/800x600/3b82f6/ffffff?text=Modern+Solutions" 
              alt="Digital Solutions Illustration" 
              className="relative rounded-2xl shadow-2xl transition-transform duration-700 z-10 hover:rotate-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
