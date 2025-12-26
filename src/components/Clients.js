"use client";
import Image from 'next/image';

const clients = [
  { name: 'Klien 1', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+1' },
  { name: 'Klien 2', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+2' },
  { name: 'Klien 3', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+3' },
  { name: 'Klien 4', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+4' },
  { name: 'Klien 5', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+5' },
  { name: 'Klien 6', logo: 'https://placehold.co/200x100/f3f4f6/374151?text=Klien+6' },
];

export default function Clients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 0.6, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-medium tracking-widest uppercase text-sm mb-12"
        >
          Telah dipercaya oleh berbagai bisnis & instansi
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="w-32 md:w-40 cursor-pointer relative h-20"
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
