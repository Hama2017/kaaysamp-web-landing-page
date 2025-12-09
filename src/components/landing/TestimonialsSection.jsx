import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Journaliste à Dakar",
      content:
        "Enfin une app qui me permet de suivre l'actualité du Sénégal en direct et d'échanger avec ma communauté ! Les SAMP Zones sont parfaites pour organiser les discussions par thème.",
      rating: 5,
      gradient: "from-[#2eb87f] to-emerald-600",
    },
    {
      name: "Ibrahima Sarr",
      role: "Entrepreneur",
      content:
        "Les SAMP Zones sont révolutionnaires ! J'ai créé ma zone pour discuter business et innovation au Sénégal. La communauté est active et engagée. J'ai trouvé ma tribu !",
      rating: 5,
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      name: "Fatou Ndiaye",
      role: "Étudiante",
      content:
        "Je suis tombée amoureuse de Kaaysamp dès le premier jour. Interface intuitive, partage facile de contenus, et je reste connectée à tout ce qui se passe au Sénégal. Top !",
      rating: 5,
      gradient: "from-emerald-600 to-green-600",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils adorent
            <br />
            <span className="bg-gradient-to-r from-[#2eb87f] to-emerald-600 bg-clip-text text-transparent">
              Kaaysamp
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs pensent de l'application qui connecte le Sénégal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-200" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
