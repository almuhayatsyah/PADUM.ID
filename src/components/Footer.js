import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../images/logoweb.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <Image 
                src={logo} 
                alt="PADUM.COM Logo" 
                width={200}
                height={64}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Partner digital terbaik untuk UMKM. Kami membantu bisnis Anda tumbuh dengan website profesional dan strategi digital yang tepat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Twitter size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link href="#layanan" className="hover:text-blue-500 transition">Jasa Pembuatan Website</Link></li>
              <li><Link href="#layanan" className="hover:text-blue-500 transition">Redesign Website</Link></li>
              <li><Link href="#layanan" className="hover:text-blue-500 transition">SEO Optimization</Link></li>
              <li><Link href="#layanan" className="hover:text-blue-500 transition">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              <li><Link href="#tentang" className="hover:text-blue-500 transition">Tentang Kami</Link></li>
              <li><Link href="#portofolio" className="hover:text-blue-500 transition">Portofolio</Link></li>
              <li><Link href="#faq" className="hover:text-blue-500 transition">FAQ</Link></li>
              <li><Link href="#kontak" className="hover:text-blue-500 transition">Kontak</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PADUM.COM - Abdya Go Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
