import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner Kopi Gayo",
    content: "Website yang dibuat sangat profesional dan cepat. Penjualan kopi saya meningkat drastis setelah punya website sendiri. Terima kasih PadumDev!",
    rating: 5,
    website: "#",
  },
  {
    name: "Siti Aminah",
    role: "Founder Hijab Store",
    content: "Pelayanan sangat ramah dan responsif. Desainnya sesuai dengan keinginan saya, clean dan elegan. Sangat recommended untuk berbagai kebutuhan!",
    rating: 5,
    website: "#",
  },
  {
    name: "Rahmat Hidayat",
    role: "Direktur PT Konstruksi",
    content: "Tim PADUM.COM sangat mengerti kebutuhan bisnis kami. Company profile yang dibuat sangat membantu dalam meyakinkan klien-klien besar.",
    rating: 5,
    website: "#",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni dari beberapa klien yang telah bekerjasama dengan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <Link
              key={index}
              href={testi.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testi.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
