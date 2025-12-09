import React from "react";
import { motion } from "framer-motion";
import { Users, AtSign } from "lucide-react";

export default function AmbassadorsSection() {
  const ambassadors = [
    {
      name: "Aminata Diallo",
      profession: "Artiste & Chanteuse",
      username: "@aminata_kaay",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=600&fit=crop",
      gradient: "from-[#2eb87f] to-emerald-600",
    },
    {
      name: "Mamadou Ndiaye",
      profession: "Influenceur & Entrepreneur",
      username: "@mamadou_samp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      name: "Fatou Sarr",
      profession: "Journaliste & Présentatrice",
      username: "@fatou_news",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      name: "Ousmane Ba",
      profession: "Sportif & Ambassadeur",
      username: "@ousmane_sport",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
      gradient: "from-green-500 to-emerald-700",
    },
  ];

  return (
    <section id="ambassadors" className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2eb87f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full mb-6 shadow-md">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Ils nous font confiance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
              Ambassadeurs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des personnalités sénégalaises qui croient en notre vision et contribuent à faire grandir notre communauté.
          </p>
        </motion.div>

        {/* Ambassadors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador.username}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ambassador.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {ambassador.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {ambassador.profession}
                  </p>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${ambassador.gradient} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    <AtSign className="w-4 h-4" />
                    {ambassador.username}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
