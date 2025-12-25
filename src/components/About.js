export default function About() {
  return (
    <section id="tentang" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400/1f2937/ffffff?text=Tim+Kami"
            alt="About Us"
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Tentang PADUM.COM</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            PADUM.COM adalah bagian dari inisiatif <span className="font-semibold text-white">Abdya Go Digital</span>. Kami berdedikasi untuk mendigitalisasi bisnis UMKM dan Instansi melalui solusi sistem informasi yang terintegrasi, mulai dari POS, Kasir, hingga Aplikasi Manajemen Khusus.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tim kami terdiri dari desainer dan developer muda berbakat yang memiliki passion tinggi dalam menciptakan website yang tidak hanya bagus secara visual, tapi juga fungsional dan berdampak positif.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-4xl font-bold text-white">50+</h4>
              <p className="text-gray-400">Klien Terbantu</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white">100%</h4>
              <p className="text-gray-400">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
