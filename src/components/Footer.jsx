import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "../images/logo-petit-regal-1.png";

const Footer = () => {
  return (
    <footer className="bg-chocolat-900 text-fond-50 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-praline-300/50 pb-12 mb-8">
          {/* Logo et description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              to="/"
              className="cursor-pointer text-3xl font-extrabold mb-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Logo de Petit Régal"
                className="w-20 h-20 rounded-full mx-auto md:mx-0 shadow-lg border-2 border-or-500"
              />
            </Link>
            <p className="text-praline-200 max-w-sm text-sm mt-2">
              Découvrez la douceur de l'artisanat malien à travers nos gateaux
              uniques et rafraîchissants.
            </p>
            <div className="flex space-x-5 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581840383694"
                target="_blank"
                aria-label="Facebook"
                className="text-cerise-500 hover:text-or-500 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-cerise-500 hover:text-or-500 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://vm.tiktok.com/ZMAfKSDXV/"
                target="_blank"
                aria-label="TikTok"
                className="text-cerise-500 hover:text-or-500 transition-colors transform hover:scale-110"
              >
                <FaTiktok className="w-6 h-6 hover:text-or transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-or-500 mb-6">Navigation</h4>
            <ul className="space-y-4 text-praline-100 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-cerise-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogue"
                  className="hover:text-cerise-500 transition-colors"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to="/commande"
                  className="hover:text-cerise-500 transition-colors"
                >
                  Commande
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cerise-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-or-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-praline-100 font-medium">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cerise-500 flex-shrink-0 mt-1" />
                <span>Kalabancoro Chicoro - Bamako, Mali</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-cerise-500" />
                <a
                  href="tel:+22376222240"
                  className="hover:text-cerise-500 transition-colors duration-300"
                >
                  +223 76 22 22 40
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-cerise-500" />
                <a
                  href="mailto:contact@petitregal.com"
                  className="hover:text-cerise-500 transition-colors duration-300"
                >
                  contact@petitregal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Informations ou Inscription à la newsletter (optionnel) */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-or-500 mb-6">
              Horaires d'ouverture
            </h4>
            <p className="text-fond-50 text-lg font-semibold">
              Lundi - Samedi :
            </p>
            <p className="text-praline-100 mb-4">10:00 - 20:00</p>
            <p className="text-fond-50 text-lg font-semibold">Dimanche :</p>
            <p className="text-praline-100">Fermé</p>
          </div>
        </div>
        <p className="text-center text-praline-300 text-sm pt-2">
          © {new Date().getFullYear()} Petit Regal. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
