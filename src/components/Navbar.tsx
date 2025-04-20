import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-display text-2xl font-bold text-foreground">
            СТИЛЬ<span className="text-fashion">КО</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/catalog" className="nav-link">Каталог</Link>
          <Link to="/new" className="nav-link">Новинки</Link>
          <Link to="/sales" className="nav-link">Распродажа</Link>
          <Link to="/about" className="nav-link">О нас</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button aria-label="Поиск" className="text-foreground hover:text-fashion transition-colors">
            <Search size={20} />
          </button>
          <Link to="/profile" aria-label="Профиль" className="text-foreground hover:text-fashion transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" aria-label="Корзина" className="text-foreground hover:text-fashion transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-fashion text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu} aria-label="Меню">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/catalog" className="nav-link" onClick={toggleMenu}>Каталог</Link>
            <Link to="/new" className="nav-link" onClick={toggleMenu}>Новинки</Link>
            <Link to="/sales" className="nav-link" onClick={toggleMenu}>Распродажа</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>О нас</Link>
          </div>
          <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
            <Link to="/profile" className="flex items-center text-foreground" onClick={toggleMenu}>
              <User size={18} className="mr-2" />
              <span>Профиль</span>
            </Link>
            <Link to="/cart" className="flex items-center text-foreground" onClick={toggleMenu}>
              <ShoppingBag size={18} className="mr-2" />
              <span>Корзина (0)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
