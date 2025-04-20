import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";

interface FilterOption {
  id: string;
  name: string;
}

const NewArrivals = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Моковые данные новых поступлений
  const newProducts = [
    {
      id: 1,
      name: "Легкая куртка с принтом",
      price: 3490,
      image: "/placeholder.svg",
      category: "outerwear",
      isNew: true,
    },
    {
      id: 2,
      name: "Платье с цветочным принтом",
      price: 2890,
      image: "/placeholder.svg",
      category: "dresses",
      isNew: true,
    },
    {
      id: 3,
      name: "Джинсы прямого кроя",
      price: 2190,
      image: "/placeholder.svg",
      category: "bottoms",
      isNew: true,
    },
    {
      id: 4,
      name: "Блуза из экологичных материалов",
      price: 1790,
      image: "/placeholder.svg",
      category: "tops",
      isNew: true,
    },
    {
      id: 5,
      name: "Свитер с V-образным вырезом",
      price: 2490,
      image: "/placeholder.svg",
      category: "tops",
      isNew: true,
    },
    {
      id: 6,
      name: "Юбка миди плиссированная",
      price: 1990,
      image: "/placeholder.svg",
      category: "bottoms",
      isNew: true,
    },
    {
      id: 7,
      name: "Топ с открытыми плечами",
      price: 1590,
      image: "/placeholder.svg",
      category: "tops",
      isNew: true,
    },
    {
      id: 8,
      name: "Кардиган с пуговицами",
      price: 2790,
      image: "/placeholder.svg",
      category: "outerwear",
      isNew: true,
    },
  ];

  const categories: FilterOption[] = [
    { id: "dresses", name: "Платья" },
    { id: "tops", name: "Топы и блузы" },
    { id: "bottoms", name: "Брюки и юбки" },
    { id: "outerwear", name: "Верхняя одежда" },
  ];

  const handleFilterChange = (categoryId: string) => {
    setActiveFilters((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Фильтруем товары
  const filteredProducts = newProducts.filter((product) => {
    const matchesCategory =
      activeFilters.length === 0 || activeFilters.includes(product.category);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Сортируем товары
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    // По умолчанию сортировка по новизне
    return b.id - a.id;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Новые поступления</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Откройте для себя последние тренды и новинки нашего магазина. Свежие поступления каждую неделю!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Фильтры для мобильных устройств */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <button
              onClick={toggleFilter}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition"
            >
              <SlidersHorizontal size={18} />
              Фильтры
            </button>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-gray-100 px-4 py-2 pr-8 rounded-md focus:outline-none"
              >
                <option value="newest">Сначала новые</option>
                <option value="price-asc">Сначала недорогие</option>
                <option value="price-desc">Сначала дорогие</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Мобильные фильтры (всплывающие) */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="bg-white h-full w-4/5 max-w-sm p-4 ml-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Фильтры</h2>
                  <button onClick={toggleFilter} className="p-1">
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-${category.id}`}
                          checked={activeFilters.includes(category.id)}
                          onCheckedChange={() => handleFilterChange(category.id)}
                        />
                        <Label htmlFor={`mobile-${category.id}`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Цена</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 10000]}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{priceRange[0]} ₽</span>
                      <span>{priceRange[1]} ₽</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t">
                  <button
                    onClick={toggleFilter}
                    className="w-full bg-fashion text-white py-2 rounded-md hover:bg-fashion/90 transition"
                  >
                    Применить фильтры
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Фильтры для десктопа */}
          <div className="hidden lg:block w-1/4 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-medium text-lg mb-4">Фильтры</h2>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Категории</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={activeFilters.includes(category.id)}
                        onCheckedChange={() => handleFilterChange(category.id)}
                      />
                      <Label htmlFor={category.id}>{category.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Цена</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:w-3/4">
            {/* Сортировка для десктопа */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Найдено товаров: <span className="font-medium">{sortedProducts.length}</span>
              </p>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-gray-100 px-4 py-2 pr-8 rounded-md focus:outline-none"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="price-asc">Сначала недорогие</option>
                  <option value="price-desc">Сначала дорогие</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>

            {/* Товары */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    isNew={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  К сожалению, товаров не найдено. Попробуйте изменить параметры фильтрации.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
