import React from "react";
import { motion } from "framer-motion";
import { Filter, TrendingUp, Eye, MessageCircle } from "lucide-react";

export default function AccueilSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">📱 Page Accueil</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Votre fil d'actualité{" "}
              <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
                personnalisé
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez toutes les actualités et posts qui vous intéressent.
              Filtrez par catégories, consultez les tendances, et suivez les
              contenus les plus commentés et les plus vus du Sénégal.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Filter className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Filtres par catégories
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Politique, Sport, Culture, Religion et bien plus encore
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Contenu tendance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Les posts les plus populaires en temps réel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Plus commentés & vus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Triez par nombre de commentaires ou de vues
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#2eb87f]" />
                  <div>
                    <p className="text-xs text-gray-500">Vues</p>
                    <p className="font-bold text-gray-900">12.5K</p>
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

                  {/* Feed Content */}
                  <div className="p-4 space-y-3 h-[500px] overflow-hidden">
                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <div className="px-4 py-2 bg-[#2eb87f] text-white rounded-full text-sm font-medium whitespace-nowrap">
                        Tout
                      </div>
                      <div className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap">
                        Tendances
                      </div>
                      <div className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap">
                        Sport
                      </div>
                      <div className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap">
                        Politique
                      </div>
                    </div>

                    {/* Post 1 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-800">
                            Actualité Dakar
                          </div>
                          <div className="text-xs text-gray-500">Il y a 2h · Politique</div>
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-[#2eb87f]/20 to-emerald-300/20 rounded-xl mb-2" />
                      <div className="h-2 bg-gray-200 rounded-full w-full mb-1" />
                      <div className="h-2 bg-gray-100 rounded-full w-3/4 mb-3" />
                      <div className="flex gap-4 text-xs text-gray-600">
                        <span>👁️ 2.3K</span>
                        <span>💬 156</span>
                        <span>⬆️ 890</span>
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-800">
                            Sport Sénégal
                          </div>
                          <div className="text-xs text-gray-500">Il y a 5h · Sport</div>
                        </div>
                      </div>
                      <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-2" />
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
