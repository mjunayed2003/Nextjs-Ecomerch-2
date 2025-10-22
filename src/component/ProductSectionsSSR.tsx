'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  category: string;
  img: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 42,
    oldPrice: 45,
    category: 'Fashion',
    img: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/32_2.jpg',
  },
  {
    id: 2,
    name: 'Boy’s Clothes',
    price: 25,
    oldPrice: 39.99,
    category: 'Baby Wear',
    img: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/37_1.jpg',
  },
  {
    id: 3,
    name: 'Leather Belt',
    price: 62,
    oldPrice: 65,
    category: 'Belt',
    img: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/49_1.jpg',
  },
  {
    id: 4,
    name: 'Perfume',
    price: 10,
    oldPrice: 12,
    category: 'Perfume',
    img: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/50_1.jpg',
  },
  {
    id: 5,
    name: 'Gold Earring',
    price: 62,
    oldPrice: 65,
    category: 'Jewellery',
    img: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/53_1.jpg',
  },
];

const ProductCard = ({ p }: { p: Product }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg p-4 text-center flex flex-col items-center transition-transform hover:scale-[1.03] duration-200">
    <div className="relative w-48 h-48 mb-3">
      <Image
        src={p.img}
        alt={p.name}
        fill
        className="rounded-md object-cover"
      />
    </div>
    <p className="text-sm text-gray-500">{p.category}</p>
    <h3 className="font-semibold text-gray-800">{p.name}</h3>
    <div className="flex items-center justify-center gap-2 mt-1">
      <span className="text-green-600 font-bold">${p.price}</span>
      <span className="text-gray-400 line-through text-sm">${p.oldPrice}</span>
    </div>
  </div>
);

const ProductCarousel = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) {
      const amount = ref.current.clientWidth;
      ref.current.scrollBy({
        left: dir === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-16">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-green-600 pb-1">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div
          ref={ref}
          className="flex overflow-x-auto justify-center gap-6 scrollbar-hide px-2"
        >
          {products.map((p) => (
            <div key={p.id} className="flex-shrink-0 w-60">
              <ProductCard p={p} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition hidden md:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition hidden md:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const ProductSectionsWithCarousel = () => (
  <section className="max-w-7xl mx-auto px-4 py-10">
    <ProductCarousel title="Trending Items" />
    <ProductCarousel title="Top Rated" />
    <ProductCarousel title="Top Selling" />
  </section>
);

export default ProductSectionsWithCarousel;
