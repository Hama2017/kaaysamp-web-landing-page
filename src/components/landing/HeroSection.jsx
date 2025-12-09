import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2eb87f]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">
                Plus de 100K passionnés déjà connectés
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Kaaysamp
              <br />
              <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
                Votre fenêtre sur l'actualité sénégalaise
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Le réseau social nouvelle génération pour partager, découvrir et interagir avec votre communauté au Sénégal.
              Créez des SAMP Zones, suivez l'info en temps réel, et connectez-vous à ce qui compte vraiment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                <Download className="w-5 h-5 mr-2" />
                Télécharger sur iOS
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#2eb87f] text-[#2eb87f] hover:bg-emerald-50 px-8 py-6 text-lg rounded-full"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger sur Android
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#2eb87f] to-emerald-600"
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  4.9/5 · Plus de 50K avis
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden md:overflow-visible"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 -left-10 bg-white rounded-3xl shadow-2xl p-4 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold">
                    SZ
                  </div>
                  <div>
                    <div className="h-3 w-20 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-16 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-white rounded-3xl shadow-2xl p-4 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-[#2eb87f] fill-current" />
                  <span className="text-2xl font-bold">SAMP</span>
                </div>
              </motion.div>

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-br from-[#2eb87f] to-emerald-600 px-6 py-3 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-white/80 rounded-full" />
                      <div className="w-4 h-4 bg-white/80 rounded-full" />
                      <div className="w-4 h-4 bg-white/80 rounded-full" />
                    </div>
                  </div>

                  {/* App Content - Kaaysamp Feed */}
                  <div className="p-4 space-y-4 h-[500px] overflow-hidden bg-gray-50">
                    {/* Post 1 - Actualité */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-800">Actualité Dakar</div>
                          <div className="text-xs text-gray-500">Il y a 2h</div>
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-[#2eb87f]/20 to-emerald-300/20 rounded-xl mb-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">📰 Actualité</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full w-full mb-1" />
                      <div className="h-2 bg-gray-100 rounded-full w-3/4 mb-3" />
                      <div className="flex gap-4 text-xs text-gray-600">
                        <span className="flex items-center gap-1">⬆️ 234</span>
                        <span className="flex items-center gap-1">💬 45</span>
                        <span className="flex items-center gap-1">⭐ SAMP</span>
                      </div>
                    </div>

                    {/* Post 2 - SAMP Zone */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          SZ
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-800">Sport Sénégal</div>
                          <div className="text-xs text-gray-500">SAMP Zone · 1.2K SAMPs</div>
                        </div>
                      </div>
                      <div className="h-24 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl mb-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">⚽ Discussion</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full w-full mb-1" />
                      <div className="h-2 bg-gray-100 rounded-full w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
