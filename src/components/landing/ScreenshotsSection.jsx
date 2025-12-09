import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ScreenshotsSection() {
  const screenshots = [
    {
      title: "Fil d'Actualité Personnalisé",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fcf64462215ee996072ccf/7482c6f50_IMG_8104.png",
    },
    {
      title: "SAMP Zones - Vos Communautés",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fcf64462215ee996072ccf/f0e0ee5a5_IMG_8105.png",
    },
    {
      title: "Votre Profil Unique",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fcf64462215ee996072ccf/be317163f_IMG_8107.png",
    },
  ];

  return (
    <section id="screenshots" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Aperçu de l'application</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une immersion visuelle :
            <br />
            <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
              L'interface Kaaysamp
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez un design épuré et une navigation fluide, pensée pour vous connecter à l'essentiel
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative w-full max-w-[280px] flex-shrink-0"
            >
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <img
                    src={screenshot.imageUrl}
                    alt={screenshot.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <p className="text-center mt-4 font-medium text-gray-700">
                {screenshot.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
