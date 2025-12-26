import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Custom - PADUM.COM",
  description: "Jasa pembuatan website murah, cepat, dan profesional untuk UMKM. Landing page, company profile, toko online. Mulai 500rb!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
