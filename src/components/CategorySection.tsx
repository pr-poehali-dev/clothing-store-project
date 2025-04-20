import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Женщинам",
      image: "/placeholder.svg",
      link: "/catalog/women"
    },
    {
      id: 2,
      name: "Мужчинам",
      image: "/placeholder.svg",
      link: "/catalog/men"
    },
    {
      id: 3,
      name: "Аксессуары",
      image: "/placeholder.svg",
      link: "/catalog/accessories"
    }
  ];

  return (
    <section className="py-12 bg-fashion-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold mb-2">Категории</h2>
          <p className="text-fashion-neutral max-w-2xl mx-auto">
            Найдите свой идеальный стиль в наших коллекциях для женщин, мужчин и детей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="relative rounded-lg overflow-hidden group"
            >
              <div className="aspect-[3/4] md:aspect-square">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-2xl font-display font-bold mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-block text-white border-b border-white pb-1 transition-all group-hover:border-fashion group-hover:text-fashion-light">
                      Смотреть коллекцию
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
