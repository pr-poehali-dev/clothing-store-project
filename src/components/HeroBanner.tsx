import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-fashion-light h-[70vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-fashion-dark">
            Осенняя коллекция 2024
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8">
            Открывайте новые стили и тренды сезона. Выразите себя через моду, которая соответствует вашей индивидуальности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalog" className="btn-primary text-center">
              Смотреть каталог
            </Link>
            <Link to="/new" className="btn-secondary text-center">
              Новая коллекция
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent to-fashion-light z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-90"></div>
      </div>
      
      {/* Additional decorative element */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-fashion opacity-10"></div>
    </div>
  );
};

export default HeroBanner;
