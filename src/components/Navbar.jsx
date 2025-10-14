import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../images/logo-petit-regal-1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-chocolat-700 to-chocolat-800 text-praline-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center space-x-3">
          {/* Add logo here */}
          <div className="w-20 md:w-24 flex-shrink-0">
            <img
              src={logo}
              alt="logo de Petit Régal"
              className="rounded-full object-cover w-full h-auto drop-shadow-lg border-2 border-praline-300 hover:border-or-500 transition duration-300"
            />
          </div>
        </Link>

        {/* Larger screen navbar */}
        <div className="hidden md:flex gap-8 items-center text-praline-100 font-medium text-lg">
          <Link
            to="/"
            className="hover:text-or-400 transition duration-300 ease-in-out tracking-wide"
          >
            Accueil
          </Link>
          <Link
            to="/catalogue"
            className="hover:text-or-400 transition duration-300 ease-in-out tracking-wide"
          >
            Catalogue
          </Link>
          <Link
            to="/commande"
            className="hover:text-or-400 transition duration-300 ease-in-out tracking-wide"
          >
            Commande
          </Link>
          <Link
            to="/contact"
            className="hover:text-or-400 transition duration-300 ease-in-out tracking-wide"
          >
            Contact
          </Link>
          <Link to="/panier" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-or-400 transition duration-300 ease-in-out" />
            {/* add products counter here if needed */}
          </Link>
        </div>

        {/* Hamburger menu for small devices */}
        <div className="md:hidden flex items-center space-x-4 text-praline-100">
          <Link
            to="/panier"
            className="relative p-2 rounded-full hover:bg-chocolat-800 transition duration-300"
          >
            <ShoppingCart className="w-6 h-6 hover:text-or-400 transition duration-300 ease-in-out" />
            {/* Product counter here */}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-praline-100 p-2 rounded-full hover:bg-chocolat-800 focus:outline-none transition duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* menu open for mobile */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center py-2 bg-chocolat-800 text-praline-100 transition-all duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className="py-3 px-4 w-full text-center hover:bg-chocolat-700 hover:text-or-400 transition-colors duration-200 font-medium border-b border-chocolat-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Accueil
        </Link>
        <Link
          to="/catalogue"
          className="py-3 px-4 w-full text-center hover:bg-chocolat-700 hover:text-or-400 transition-colors duration-200 font-medium border-b border-chocolat-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Catalogue
        </Link>
        <Link
          to="/commande"
          className="py-3 px-4 w-full text-center hover:bg-chocolat-700 hover:text-or-400 transition-colors duration-200 font-medium border-b border-chocolat-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Commande
        </Link>
        <Link
          to="/contact"
          className="py-3 px-4 w-full text-center hover:bg-chocolat-700 hover:text-or-400 transition-colors duration-200 font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
