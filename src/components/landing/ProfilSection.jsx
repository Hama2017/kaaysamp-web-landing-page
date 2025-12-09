import React from "react";
import { motion } from "framer-motion";
import { User, Camera, Edit, Settings } from "lucide-react";

export default function ProfilSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content - Phone Mockup (on left on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Floating badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-2">
                  <Edit className="w-5 h-5 text-[#2eb87f]" />
                  <div>
                    <p className="text-xs text-gray-500">Personnalisation</p>
                    <p className="font-bold text-gray-900">100%</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex items-center justify-between">
                    <span className="text-gray-900 text-sm font-medium">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-[#2eb87f] rounded-full" />
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="h-[500px] overflow-hidden">
                    {/* Cover Photo */}
                    <div className="relative h-32 bg-gradient-to-r from-[#2eb87f] to-emerald-600">
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <Camera className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    {/* Profile Info */}
                    <div className="relative px-4 -mt-16">
                      <div className="flex items-end justify-between mb-4">
                        <div className="relative">
                          <div className="w-24 h-24 bg-white rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-[#2eb87f] to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                              AM
                            </div>
                          </div>
                          <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#2eb87f] rounded-full flex items-center justify-center text-white border-2 border-white">
                            <Camera className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button className="px-4 py-2 bg-[#2eb87f] text-white rounded-full text-sm font-medium flex items-center gap-1">
                          <Edit className="w-4 h-4" />
                          Éditer
                        </button>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              Amadou Diop
                            </h3>
                            <p className="text-sm text-gray-500">@amadou_diop</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          Passionné de tech et d'actualité sénégalaise 🇸🇳
                          Partage mes découvertes et opinions sur Kaaysamp
                        </p>
                        <div className="flex gap-4 text-sm">
                          <div>
                            <span className="font-bold text-gray-900">245</span>
                            <span className="text-gray-500 ml-1">Posts</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-900">1.2K</span>
                            <span className="text-gray-500 ml-1">SAMPs</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-900">890</span>
                            <span className="text-gray-500 ml-1">Followers</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <button className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-2">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-[#2eb87f]" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            Paramètres
                          </span>
                        </button>
                        <button className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <User className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            Mes Zones
                          </span>
                        </button>
                      </div>

                      {/* Recent Posts */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 px-1">
                          Publications récentes
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg" />
                          <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg" />
                          <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">👤 Profil</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Votre profil,{" "}
              <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
                votre identité
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Personnalisez votre profil à votre image. Ajoutez une photo,
              une couverture, rédigez votre bio et partagez qui vous êtes avec
              la communauté Kaaysamp.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Photo & Couverture
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Personnalisez votre profil avec vos images
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Edit className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Bio personnalisée
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Racontez votre histoire en quelques mots
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Gestion complète
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contrôlez tous les aspects de votre profil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
