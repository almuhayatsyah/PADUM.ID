"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import { ChevronLeft, Check, ExternalLink, Play, Monitor, Download } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  
  if (!params?.slug) return null;

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Breadcrumb / Back Button */}
        <Link href="/portofolio" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition">
          <ChevronLeft size={20} className="mr-2" /> Kembali ke Layanan Digital
        </Link>
      
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
          {/* Top: Image Section */}
          <div className="relative h-64 md:h-[500px] bg-gray-100">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
            </div>
          </div>

          {/* Bottom: Info Section */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Features List */}
            {project.features && (
              <div className="mb-10">
                <h3 className="text-gray-900 font-bold mb-5 text-xl">Fitur Utama:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-lg">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href={project.demoUrl || "#"}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition text-base"
                >
                  <Monitor size={20} /> Preview Demo
                </Link>
                <Link
                  href={project.sourceCodeUrl || "#"}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition text-base"
                >
                  <Download size={20} /> Source Code
                </Link>
                 <Link
                  href={project.videoUrl || "#"}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition text-base"
                >
                  <Play size={20} /> Video Tutorial
                </Link>
              </div>

               <Link
                href={`https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20mau%20order%20project%20${project.title}`}
                target="_blank"
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
              >
                Order Project Sekarang <ExternalLink size={24} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
