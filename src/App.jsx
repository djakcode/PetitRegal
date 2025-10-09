import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Commande from "./pages/Commande";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Catalogue from "./pages/Catalogue";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/commande" element={<Commande />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
