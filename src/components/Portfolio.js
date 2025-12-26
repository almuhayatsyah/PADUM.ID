"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import FadeInSection from "./FadeInSection";

const categories = ["Semua", "Landing Page", "Sistem POS/Kasir", "Web Apps Custom"];

export default function DigitalServices({ limit }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="portofolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Portofolio Digital</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Solusi Teruji & Terpercaya</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Jelajahi berbagai ekosistem digital yang telah kami bangun untuk memaksimalkan potensi bisnis mitra kami di seluruh Indonesia.
            </p>

            {!limit && (
              <FadeInSection delay={0.2}>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-blue-600 text-white shadow-xl scale-105"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-sm"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </FadeInSection>
            )}
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Link
                  href={`/layanan-digital/${project.slug}`}
                  className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <div className="mt-auto flex items-center text-gray-500 font-medium group-hover:text-blue-600 transition-colors">
                       Pelajari Selengkapnya <ChevronRight size={18} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {limit && (
          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/portofolio"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Lihat Semua Project
              </Link>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  );
}
