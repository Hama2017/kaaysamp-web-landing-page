import React from "react";
import { Users, Zap, Hash, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Utilisateurs actifs",
      color: "from-[#2eb87f] to-emerald-600",
    },
    {
      icon: Zap,
      value: "500K+",
      label: "SAMPs effectués",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Hash,
      value: "2K+",
      label: "SAMP Zones créées",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      value: "1M+",
      label: "Actualités partagées",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
