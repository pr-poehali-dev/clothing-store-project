import { Mail, Phone, MapPin, Instagram, Facebook, YouTube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-white">
              СТИЛЬ<span className="text-fashion">КО</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Магазин модной одежды и аксессуаров для мужчин и женщин. Качественные товары по доступным ценам.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-fashion transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fashion transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fashion transition-colors">
                <YouTube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Магазин</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/women" className="text-gray-300 hover:text-fashion transition-colors">Женщинам</Link></li>
              <li><Link to="/catalog/men" className="text-gray-300 hover:text-fashion transition-colors">Мужчинам</Link></li>
              <li><Link to="/catalog/accessories" className="text-gray-300 hover:text-fashion transition-colors">Аксессуары</Link></li>
              <li><Link to="/sales" className="text-gray-300 hover:text-fashion transition-colors">Распродажа</Link></li>
              <li><Link to="/new" className="text-gray-300 hover:text-fashion transition-colors">Новинки</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-fashion transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-fashion transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-fashion transition-colors">Карьера</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fashion transition-colors">Контакты</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-fashion transition-colors">Доставка</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="mr-3 text-fashion" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-fashion" />
                <span>info@styleco.ru</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-fashion" />
                <span>г. Москва, ул. Модная, 42</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} СТИЛЬКО. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-fashion transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-fashion transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
