import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../images/logo-petit-regal-1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center space-x-2">
          {/* Add logo here */}
          <div className="w-16">
            <img
              src={logo}
              alt="logo de Petit Régal"
              className="rounded-full object-cover"
            />
          </div>
        </Link>

        {/* Larger screen navbar */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className="hover:text-pink-100 transition duration-300 ease-in-out"
          >
            Acceuil
          </Link>
          <Link
            to="/catalogue"
            className="hover:text-pink-100 transition duration-300 ease-in-out"
          >
            Catalogue
          </Link>
          <Link
            to="/commande"
            className="hover:text-pink-100 transition duration-300 ease-in-out"
          >
            Commande
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-100 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link to="/panier" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-pink-100 transition duration-300 ease-in-out" />
            {/* add products counter ici if needed */}
          </Link>
        </div>

        {/* Hamburger menu for small devices */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/panier" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-pink-100 transition duration-300 ease-in-out" />
            {/* Product counter here */}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* menu open for mobile */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center py-4 bg-pink-400`}
      >
        <Link
          to="/"
          className="py-2 px-4 w-full text-center hover:bg-pink-300 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Acceuil
        </Link>
        <Link
          to="/catalogue"
          className="py-2 px-4 w-full text-center hover:bg-pink-300 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Catalogue
        </Link>
        <Link
          to="/commande"
          className="py-2 px-4 w-full text-center hover:bg-pink-300 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Commande
        </Link>
        <Link
          to="/contact"
          className="py-2 px-4 w-full text-center hover:bg-pink-300 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
