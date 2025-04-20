import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ id, name, price, oldPrice, image, isNew, isSale }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
        
        {/* Product tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="bg-fashion text-white text-xs font-semibold px-2 py-1 rounded">
              Новинка
            </span>
          )}
          {isSale && (
            <span className="bg-fashion-accent text-white text-xs font-semibold px-2 py-1 rounded">
              Скидка
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 flex justify-between transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button className="flex items-center justify-center w-full p-2 bg-fashion text-white rounded-sm hover:bg-fashion-dark transition-colors">
            <ShoppingBag size={16} className="mr-2" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-foreground">{name}</h3>
          <button className="text-fashion-neutral hover:text-fashion transition-colors">
            <Heart size={18} />
          </button>
        </div>
        
        <div className="mt-2 flex items-end">
          <span className="text-lg font-semibold">{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-fashion-neutral line-through">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
