import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Flame, Star } from "lucide-react";

export default function TendancesSection() {
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
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">Tendances</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Découvrez ce qui{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                fait le buzz
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Explorez les meilleurs posts, utilisateurs et SAMP Zones du
              moment. Classements par vues, commentaires, et popularité pour ne
              rien manquer de l'actualité sénégalaise.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Top Posts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Les publications les plus vues et commentées
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Utilisateurs populaires
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Les créateurs de contenu les plus influents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    SAMP Zones en vogue
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Les communautés les plus actives du moment
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
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-2 text-white">
                  <Flame className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-90">Tendance #1</p>
                    <p className="font-bold">🔥 Hot!</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex items-center justify-between">
                    <span className="text-gray-900 text-sm font-medium">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-orange-500 rounded-full" />
                    </div>
                  </div>

                  {/* Tendances Content */}
                  <div className="p-4 space-y-4 h-[500px] overflow-hidden">
                    {/* Tabs */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-medium">
                        Posts
                      </button>
                      <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm">
                        Utilisateurs
                      </button>
                      <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm">
                        Zones
                      </button>
                    </div>

                    {/* Filter */}
                    <div className="flex gap-2 text-xs">
                      <button className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg font-medium">
                        Plus de vues
                      </button>
                      <button className="px-3 py-1.5 bg-white text-gray-600 rounded-lg">
                        Plus commentés
                      </button>
                    </div>

                    {/* Leaderboard */}
                    <div className="space-y-3">
                      {/* Rank 1 */}
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-3 border-2 border-yellow-300">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-yellow-600">
                            1
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 truncate">
                              Match Sénégal vs Nigeria
                            </h4>
                            <p className="text-xs text-gray-600">
                              👁️ 45.2K · 💬 2.1K
                            </p>
                          </div>
                          <Flame className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        </div>
                      </div>

                      {/* Rank 2 */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="text-xl font-bold text-gray-400">
                            2
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 truncate">
                              Nouvelle loi sur l'éducation
                            </h4>
                            <p className="text-xs text-gray-600">
                              👁️ 38.5K · 💬 1.8K
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Rank 3 */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="text-xl font-bold text-gray-400">
                            3
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 truncate">
                              Concert Youssou N'Dour
                            </h4>
                            <p className="text-xs text-gray-600">
                              👁️ 32.1K · 💬 1.5K
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Rank 4 */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="text-xl font-bold text-gray-400">
                            4
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 truncate">
                              Découverte archéologique
                            </h4>
                            <p className="text-xs text-gray-600">
                              👁️ 28.7K · 💬 1.2K
                            </p>
                          </div>
                        </div>
                      </div>
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
