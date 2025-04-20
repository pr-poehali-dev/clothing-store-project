import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  // Имитация данных продуктов
  const products = [
    {
      id: 1,
      name: "Стильное пальто",
      price: 12990,
      image: "/placeholder.svg",
      isNew: true
    },
    {
      id: 2,
      name: "Джинсы классические",
      price: 4990,
      oldPrice: 6990,
      image: "/placeholder.svg",
      isSale: true
    },
    {
      id: 3,
      name: "Свитер оверсайз",
      price: 3990,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Платье вечернее",
      price: 8990,
      image: "/placeholder.svg",
      isNew: true
    }
  ];

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold mb-2">Популярные товары</h2>
        <p className="text-fashion-neutral max-w-2xl mx-auto">
          Наша подборка самых популярных товаров этого сезона. Успейте приобрести, пока они есть в наличии!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            isNew={product.isNew}
            isSale={product.isSale}
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button className="btn-primary">
          Смотреть все товары
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
