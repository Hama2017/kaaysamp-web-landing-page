import React from "react";
import { motion } from "framer-motion";
import { Search, Plus, Users, Hash } from "lucide-react";

export default function SampZoneSection() {
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
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-[#2eb87f]" />
                  <div>
                    <p className="text-xs text-gray-500">SAMP Zones</p>
                    <p className="font-bold text-gray-900">500+</p>
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

                  {/* SAMP Zone Content */}
                  <div className="p-4 space-y-4 h-[500px] overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900">SAMP Zones</h2>
                      <button className="w-10 h-10 bg-[#2eb87f] rounded-full flex items-center justify-center text-white">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher une SAMP Zone..."
                        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm"
                        readOnly
                      />
                    </div>

                    {/* Suggested Zones */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">
                        Zones suggérées
                      </h3>
                      <div className="space-y-3">
                        {/* Zone 1 */}
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                              SZ
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm">
                                Sport Sénégal
                              </h4>
                              <p className="text-xs text-gray-500 mb-2">
                                12.5K SAMPs · Très actif
                              </p>
                              <button className="px-4 py-1.5 bg-emerald-100 text-[#2eb87f] rounded-full text-xs font-medium">
                                + SAMP
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Zone 2 */}
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                              PO
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm">
                                Politique Actuelle
                              </h4>
                              <p className="text-xs text-gray-500 mb-2">
                                8.2K SAMPs · Actif
                              </p>
                              <button className="px-4 py-1.5 bg-emerald-100 text-[#2eb87f] rounded-full text-xs font-medium">
                                + SAMP
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Zone 3 */}
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                              CU
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm">
                                Culture & Arts
                              </h4>
                              <p className="text-xs text-gray-500 mb-2">
                                5.8K SAMPs · Modéré
                              </p>
                              <button className="px-4 py-1.5 bg-emerald-100 text-[#2eb87f] rounded-full text-xs font-medium">
                                + SAMP
                              </button>
                            </div>
                          </div>
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">🎯 SAMP Zones</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Trouvez ou créez{" "}
              <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
                votre communauté
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Recherchez des SAMP Zones qui correspondent à vos intérêts ou
              créez la vôtre en moins de 5 secondes. Rejoignez des milliers de
              passionnés qui partagent vos centres d'intérêt.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Recherche facile
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Trouvez rapidement les zones qui vous intéressent
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Création instantanée
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Créez votre SAMP Zone en moins de 5 secondes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2eb87f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Communautés actives
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Rejoignez des milliers de membres passionnés
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
