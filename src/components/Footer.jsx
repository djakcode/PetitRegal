import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "../images/logo-petit-regal-1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12 mb-8">
          {/* Logo et description */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-3xl font-extrabold text-pink-500 mb-2">
              <img
                src={logo}
                alt="Logo de Petit Régal"
                className="w-20 h-auto rounded-full"
              />
            </Link>
            <p className="text-center md:text-left text-gray-400 max-w-sm">
              Découvrez la douceur de l'artisanat malien à travers nos glaces
              uniques et rafraîchissantes.
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6 hover:text-pink-500 transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-pink-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogue"
                  className="hover:text-pink-500 transition-colors"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to="/commande"
                  className="hover:text-pink-500 transition-colors"
                >
                  Commande
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>Bamako, Mali</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-pink-500" />
                <a
                  href="tel:+22399999999"
                  className="hover:text-pink-500 transition-colors"
                >
                  +223 76 22 22 40
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-pink-500" />
                <a
                  href="mailto:contact@petitregal.ml"
                  className="hover:text-pink-500 transition-colors"
                >
                  contact@petitregal.ml
                </a>
              </li>
            </ul>
          </div>

          {/* Informations ou Inscription à la newsletter (optionnel) */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Horaires d'ouverture
            </h4>
            <p className="text-gray-400">
              Lundi - Samedi : <br />
              10:00 - 20:00
            </p>
            <p className="text-gray-400 mt-2">Dimanche : Fermé</p>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Petit Regal. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
