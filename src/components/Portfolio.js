"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
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
    <section id="portofolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Digital</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Lihat berbagai solusi digital yang telah kami kembangkan untuk membantu bisnis tumbuh lebih cepat.
            </p>

            {!limit && (
              <FadeInSection delay={0.2}>
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2 rounded-full transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-blue-600 text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <Link
                href={`/layanan-digital/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block bg-gray-50 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.category}</p>
                  <span
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Lihat Detail <ExternalLink size={20} />
                  </span>
                </div>
              </Link>
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

