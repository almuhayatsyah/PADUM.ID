import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Landing Page Kit",
    price: "Mulai Rp 500rb",
    description: "Solusi hemat untuk promosi produk atau personal branding.",
    features: [
      "1 Halaman Responsif",
      "Desain Modern & Bersih",
      "Tombol WhatsApp (CTA)",
      "Gratis Hosting (1 Tahun)",
      "Domain my.id (1 Tahun)",
      "Revisi Minor 2x",
    ],
    recommended: false,
  },
  {
    name: "Business System",
    price: "Mulai Rp 2.5jt",
    description: "Untuk UMKM yang butuh sistem kasir (POS) atau website yang bisa diupdate sendiri.",
    features: [
      "Sistem POS atau CMS",
      "Manajemen Produk Dasar",
      "Laporan Penjualan Harian",
      "Desain Dashboard User Friendly",
      "Training Penggunaan Sistem",
      "Domain .com & Hosting (1 Tahun)",
      "Support Prioritas 1 Bulan",
    ],
    recommended: true,
  },
  {
    name: "Custom Solution",
    price: "Hubungi Kami",
    description: "Solusi aplikasi web kompleks sesuai kebutuhan spesifik bisnis Anda.",
    features: [
      "Fitur Custom Sesuai Request",
      "Manajemen Produk & Stok Lengkap",
      "Integrasi API Pihak Ketiga",
      "Sistem Multi-User / Role",
      "Laporan Keuangan Detail",
      "Maintenance & Update Rutin",
      "Full Source Code (Opsional)",
    ],
    recommended: false,
  },
  {
    name: "Landing Page + CMS",
    price: "Mulai Rp 1.5jt",
    description: "Website landing page dengan fitur update konten sendiri.",
    features: [
      "Semua fitur Landing Page Kit",
      "Login Admin Area",
      "Update Teks & Gambar Mudah",
      "Blog / Artikel Section",
      "Optimasi SEO Basic",
      "Training Admin",
    ],
    recommended: false,
  }
];

export default function Pricing() {
  return (
    <section id="harga" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Harga</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Link
              key={index}
              href={`https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20tertarik%20dengan%20paket%20${plan.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative bg-white rounded-2xl p-8 shadow-lg border transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                plan.recommended ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-50" : "border-gray-200"
              } flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Laris
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`w-full py-3 rounded-lg font-semibold text-center transition duration-300 ${
                  plan.recommended
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Pilih Paket
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
