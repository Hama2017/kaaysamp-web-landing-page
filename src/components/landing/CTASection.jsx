import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0e131b]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzJlYjg3ZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2eb87f]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Prêt à vivre l'expérience Kaaysamp ?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Téléchargez l'application dès maintenant et rejoignez une communauté grandissante, connectée au cœur du Sénégal.
            Créez vos SAMP Zones, partagez vos passions, suivez l'actualité qui vous importe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-[#2eb87f] hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Télécharger sur iOS
            </Button>
            <Button className="bg-white/10 backdrop-blur-sm border-2 border-[#2eb87f] text-white hover:bg-[#2eb87f]/20 px-8 py-6 text-lg rounded-full">
              Télécharger sur Android
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8">
            <div className="text-white/90 text-center">
              <div className="text-2xl sm:text-3xl font-bold">100K+</div>
              <div className="text-xs sm:text-sm">Téléchargements</div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="text-white/90 text-center">
              <div className="text-2xl sm:text-3xl font-bold">4.9★</div>
              <div className="text-xs sm:text-sm">Note moyenne</div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="text-white/90 text-center">
              <div className="text-2xl sm:text-3xl font-bold">50K+</div>
              <div className="text-xs sm:text-sm">Avis positifs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
