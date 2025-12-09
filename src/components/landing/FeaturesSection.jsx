import React from "react";
import { Hash, Upload, Bookmark, MessageCircle, TrendingUp, Settings, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: Hash,
      title: "Créez et Suivez des SAMP Zones",
      description:
        "Des espaces dédiés à vos passions ou à des sujets d'actualité spécifiques au Sénégal. Créez la vôtre ou rejoignez celles qui vous intéressent avec un simple SAMP.",
      color: "from-[#2eb87f] to-emerald-600",
    },
    {
      icon: Upload,
      title: "Partagez tout ce qui compte",
      description:
        "Texte, vidéos de votre téléphone, YouTube, TikTok, GIFs... Postez l'actualité ou vos réactions en un instant et engagez votre communauté.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Bookmark,
      title: "SAMP et Suivez l'info",
      description:
        "SAMPez les posts, les utilisateurs et les SAMP Zones pour construire votre fil d'actualité personnalisé. Restez informé de ce qui vous passionne vraiment.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: MessageCircle,
      title: "Interagissez et Votez",
      description:
        "Commentez les posts, soutenez l'information avec un vote UP pour la faire remonter ou signalez un contenu non pertinent avec un vote DOWN.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Découvrez les Tendances",
      description:
        "Explorez les posts les plus discutés, les utilisateurs les plus actifs et les SAMP Zones en vogue. Filtrez par catégorie : Politique, Sport, Culture, Religion et plus encore.",
      color: "from-teal-600 to-emerald-600",
    },
    {
      icon: Settings,
      title: "Personnalisez votre expérience",
      description:
        "Customisez votre profil avec photo et bio, personnalisez vos SAMP Zones avec descriptions et images, et changez le thème de l'app (sombre/clair) selon vos préférences.",
      color: "from-emerald-600 to-green-600",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
            <Hash className="w-4 h-4" />
            <span className="text-sm font-medium">Fonctionnalités</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kaaysamp : Connectez-vous,
            <br />
            <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
              Partagez, Informez-vous
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience sociale unique centrée sur le Sénégal et vos passions. Tout ce dont vous avez besoin pour rester connecté à l'actualité qui compte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#2eb87f] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
