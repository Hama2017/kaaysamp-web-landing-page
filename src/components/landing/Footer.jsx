import React from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0e131b] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo_blanc.svg"
                alt="Kaaysamp"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Kaaysamp</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Le réseau social qui connecte le Sénégal. Partagez, découvrez et engagez-vous avec votre communauté.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  Fonctionnalités
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  SAMP Zones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  Sécurité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2eb87f] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2eb87f] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2eb87f] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2eb87f] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Kaaysamp. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2eb87f] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
