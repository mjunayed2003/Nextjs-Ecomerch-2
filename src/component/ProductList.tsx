import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    imageUrl: string;
    badge?: "SALE" | "NEW";
    rating: number;
}

async function getProducts(): Promise<Product[]> {
    return [
        {
            id: 1,
            name: "Men's Wear Printed Shirt",
            category: "Men's Wear",
            price: 45.0,
            oldPrice: 59.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/32_2.jpg",
            badge: "NEW",
            rating: 5,
        },
        {
            id: 2,
            name: "Princess Look Fashion Dress",
            category: "Women's Wear",
            price: 58.0,
            oldPrice: 95.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_2.jpg",
            badge: "SALE",
            rating: 4,
        },
        {
            id: 3,
            name: "Men's Stylish Printed Shirt",
            category: "Men's Wear",
            price: 58.0,
            oldPrice: 97.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/35_2.jpg",
            rating: 5,
        },
        {
            id: 4,
            name: "Stylish Printed Women's Dress",
            category: "Women's Wear",
            price: 78.0,
            oldPrice: 85.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/33_1.jpg",
            badge: "SALE",
            rating: 5,
        },
        {
            id: 5,
            name: "Men's Wear Printed Shirt",
            category: "Men's Wear",
            price: 35.0,
            oldPrice: 51.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/36_2.jpg",
            badge: "NEW",
            rating: 4,
        },
        {
            id: 6,
            name: "Cotton Clothes Sets For Boys",
            category: "Baby Wear",
            price: 45.0,
            oldPrice: 55.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/37_2.jpg",
            badge: "SALE",
            rating: 4,
        },
        {
            id: 7,
            name: "Men's Jacket Fashion Coat",
            category: "Winter Wear",
            price: 48.0,
            oldPrice: 65.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/38_1.jpg",
            rating: 4,
        },
        {
            id: 8,
            name: "Printed Round Neck T-shirt",
            category: "Unisex",
            price: 32.0,
            oldPrice: 45.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/39_1.jpg",
            rating: 5,
        },
        {
            id: 9,
            name: "Princess Look Fashion Dress",
            category: "Women's Wear",
            price: 58.0,
            oldPrice: 95.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_2.jpg",
            badge: "SALE",
            rating: 4,
        },
        {
            id: 10,
            name: "Men's Stylish Printed Shirt",
            category: "Men's Wear",
            price: 59.0,
            oldPrice: 97.0,
            imageUrl: "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/38_2.jpg",
            rating: 5,
        },
    ];
}

export default async function ProductList() {
    const products = await getProducts();

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">New Arrivals</h2>
                    <p className="text-gray-600 text-sm">
                        Shop online for new arrivals and get free shipping!
                    </p>
                </div>
                <div className="flex space-x-6 text-gray-700 font-medium text-sm mt-4 md:mt-0">
                    <button
                        className="pb-1 border-b-2 border-green-600 text-green-600"
                    >
                        ALL
                    </button>
                    <button
                        className="pb-1 border-b-2 border-transparent hover:text-green-600 transition-colors duration-200"
                    >
                        CLOTHES
                    </button>
                    <button
                        className="pb-1 border-b-2 border-transparent hover:text-green-600 transition-colors duration-200"
                    >
                        FOOTWEAR
                    </button>
                    <button
                        className="pb-1 border-b-2 border-transparent hover:text-green-600 transition-colors duration-200"
                    >
                        ACCESSORIES
                    </button>
                </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow duration-300"
                    >
                        <Link href={`/product/${product.id}`} className="block">
                            <div className="relative w-full h-60 bg-gray-100 overflow-hidden">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {product.badge && (
                                    <span
                                        className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1  ${product.badge === "SALE"
                                                ? "bg-red-500 text-white"
                                                : "bg-green-500 text-white"
                                            }`}
                                    >
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            <div className="p-4">
                                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                                <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>

                                <div className="flex items-center mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < product.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-baseline">
                                    <span className="text-lg font-bold text-green-600 mr-2">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-gray-500 line-through">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
