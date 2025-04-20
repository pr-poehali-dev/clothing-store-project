import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

// Фиктивные данные продуктов
const PRODUCTS = [
  {
    id: 1,
    name: "Трикотажное платье",
    price: 3990,
    image: "/placeholder.svg",
    category: "Платья",
    isNew: true,
  },
  {
    id: 2,
    name: "Кашемировый свитер",
    price: 5490,
    image: "/placeholder.svg",
    category: "Свитера",
    isNew: false,
  },
  {
    id: 3,
    name: "Кожаная куртка",
    price: 12990,
    image: "/placeholder.svg",
    category: "Куртки",
    isNew: true,
  },
  {
    id: 4,
    name: "Джинсы прямого кроя",
    price: 4990,
    image: "/placeholder.svg",
    category: "Джинсы",
    isNew: false,
  },
  {
    id: 5,
    name: "Шелковая блузка",
    price: 3290,
    image: "/placeholder.svg",
    category: "Блузки",
    isNew: false,
  },
  {
    id: 6,
    name: "Юбка миди",
    price: 2990,
    image: "/placeholder.svg",
    category: "Юбки",
    isNew: true,
  },
  {
    id: 7,
    name: "Брюки с высокой посадкой",
    price: 3490,
    image: "/placeholder.svg",
    category: "Брюки",
    isNew: false,
  },
  {
    id: 8,
    name: "Хлопковая футболка",
    price: 1990,
    image: "/placeholder.svg",
    category: "Футболки",
    isNew: false,
  },
];

const categories = [
  "Платья", "Блузки", "Футболки", 
  "Брюки", "Джинсы", "Юбки", 
  "Куртки", "Свитера"
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<"default" | "priceAsc" | "priceDesc">("default");

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredProducts = PRODUCTS
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "priceAsc") return a.price - b.price;
      if (sortOrder === "priceDesc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Фильтры для мобильных устройств */}
          <div className="md:hidden w-full mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between"
              onClick={toggleFilters}
            >
              <span className="flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Фильтры
              </span>
              {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
            
            {showFilters && (
              <div className="mt-4 border rounded-lg p-4 bg-white">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Цена</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 15000]}
                      max={15000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{priceRange[0]} ₽</span>
                      <span>{priceRange[1]} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}-mobile`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label 
                          htmlFor={`category-${category}-mobile`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Боковые фильтры для десктопа */}
          <div className="hidden md:block w-1/4 min-w-[250px]">
            <div className="border rounded-lg p-6 bg-white sticky top-24">
              <div className="mb-8">
                <h3 className="font-medium mb-4">Цена</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 15000]}
                    max={15000}
                    step={100}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Категории</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label 
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Список товаров */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Найдено товаров: {filteredProducts.length}</p>
              <select
                className="border rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "default" | "priceAsc" | "priceDesc")}
              >
                <option value="default">По умолчанию</option>
                <option value="priceAsc">Сначала дешевле</option>
                <option value="priceDesc">Сначала дороже</option>
              </select>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">Товары не найдены</p>
                <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
