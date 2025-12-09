import React from "react";
import { motion } from "framer-motion";
import { Bell, Heart, MessageCircle, UserPlus, TrendingUp } from "lucide-react";

export default function NotificationsSection() {
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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Notifications</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Restez{" "}
              <span className="bg-gradient-to-r from-blue-600 to-[#2eb87f] bg-clip-text text-transparent">
                toujours informé
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Ne manquez aucune interaction importante. Recevez des
              notifications pour les nouveaux SAMPs, commentaires, mentions et
              bien plus encore.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Interactions en temps réel
                  </h3>
                  <p className="text-gray-600 text-sm">
                    SAMPs, votes et partages sur vos publications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Commentaires & Mentions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Soyez alerté quand on parle de vous
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Nouveaux followers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Découvrez qui rejoint votre communauté
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
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-2 text-white">
                  <Bell className="w-5 h-5" />
                  <div>
                    <p className="text-xs opacity-90">Nouveau</p>
                    <p className="font-bold">12 notifs</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-blue-600 to-[#2eb87f] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex items-center justify-between">
                    <span className="text-gray-900 text-sm font-medium">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <div className="w-4 h-4 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  {/* Notifications Content */}
                  <div className="p-4 space-y-3 h-[500px] overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">
                        Notifications
                      </h2>
                      <span className="text-xs text-blue-600 font-medium">
                        Tout marquer lu
                      </span>
                    </div>

                    {/* Notification 1 - New SAMP */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-3">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                          MB
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Moussa Badji</span> a
                            SAMPé votre publication
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 5 minutes
                          </p>
                        </div>
                        <Heart className="w-5 h-5 text-red-500 flex-shrink-0 fill-current" />
                      </div>
                    </div>

                    {/* Notification 2 - Comment */}
                    <div className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                          FK
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Fatou Kane</span> a
                            commenté votre post
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 1 heure
                          </p>
                        </div>
                        <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Notification 3 - New Follower */}
                    <div className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                          IS
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Ibrahima Sarr</span>{" "}
                            a commencé à vous suivre
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 3 heures
                          </p>
                        </div>
                        <UserPlus className="w-5 h-5 text-[#2eb87f] flex-shrink-0" />
                      </div>
                    </div>

                    {/* Notification 4 - Trending */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-3">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex-shrink-0 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            Votre post est{" "}
                            <span className="font-semibold">en tendance</span> !
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 5 heures · 2.3K vues
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 5 - Vote */}
                    <div className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                          AD
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Awa Diop</span> et{" "}
                            <span className="font-semibold">15 autres</span> ont
                            voté UP
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 1 jour
                          </p>
                        </div>
                        <div className="text-lg flex-shrink-0">⬆️</div>
                      </div>
                    </div>

                    {/* Notification 6 - SAMP Zone */}
                    <div className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2eb87f] to-emerald-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                          SZ
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            Nouveau post dans{" "}
                            <span className="font-semibold">Sport Sénégal</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Il y a 2 jours
                          </p>
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
