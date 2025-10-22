import React from "react";
import Image from "next/image";
import Link from "next/link";

const CollectionsBanners: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Women's Collection */}
        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] lg:aspect-[16/9] xl:aspect-[1.8/1] overflow-hidden rounded-lg group">
          <Image
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/12.jpg"
            alt="Women&#39;s Collection"
            fill
            className="transition-transform duration-500 group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            50% OFF
          </span>
          <div className="absolute bottom-6 left-6 text-white max-w-[calc(100%-48px)]">
            <p className="text-sm uppercase font-light opacity-80 mb-1">Up to 50% Off</p>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">Women&#39;s Collection</h3>
            <Link
              href="/shop/women"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Kid's Collection */}
        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] lg:aspect-[16/9] xl:aspect-[1.8/1] overflow-hidden rounded-lg group">
          <Image
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/13.jpg"
            alt="Kid&#39;s Collection"
            fill
            className="transition-transform duration-500 group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            60% OFF
          </span>
          <div className="absolute bottom-6 left-6 text-white max-w-[calc(100%-48px)]">
            <p className="text-sm uppercase font-light opacity-80 mb-1">Fun for Little Ones</p>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">Kid&#39;s Collection</h3>
            <Link
              href="/shop/kids"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] lg:aspect-[16/9] xl:aspect-[1.8/1] overflow-hidden rounded-lg group">
          <Image
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/14.jpg"
            alt="Men&#39;s Collection"
            fill
            className="transition-transform duration-500 group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            70% OFF
          </span>
          <div className="absolute bottom-6 left-6 text-white max-w-[calc(100%-48px)]">
            <p className="text-sm uppercase font-light opacity-80 mb-1">Style for Every Man</p>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">Men&#39;s Collection</h3>
            <Link
              href="/shop/men"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollectionsBanners;
