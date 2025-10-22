"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, ChevronDown, MapPin, Clock } from "lucide-react";

const MainNav = () => {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | number>("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCity, setSelectedCity] = useState("New York");

  const categories = ["All Categories", "Technology", "Fashion", "Food"];
  const cities = ["New York", "London", "Paris", "Tokyo"];

  const isActive = (path:string) =>
    pathname === path
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600 transition-colors";

  const toggleMenu = (menu:number | string ) => {
    setOpenMenu((prev) => (prev === menu ? "" : menu));
  };

  return (
    <div className="bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="relative">
          <button
            onClick={() => toggleMenu("category")}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center px-4 py-2 rounded-md"
          >
            <LayoutGrid className="h-5 w-5 mr-2" />
            {selectedCategory}
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>

          {openMenu === "category" && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenMenu("");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
        <nav className="flex items-center space-x-6 relative">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => toggleMenu("categories")}
              className={`flex items-center gap-1 ${isActive("/categories")}`}
            >
              Categories <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "categories" && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <Link
                  href="/categories/a"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Subcategory A
                </Link>
                <Link
                  href="/categories/b"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Subcategory B
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("products")}
              className={`flex items-center gap-1 ${isActive("/products")}`}
            >
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "products" && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <Link
                  href="/products/popular"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Popular Products
                </Link>
                <Link
                  href="/products/new"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  New Arrivals
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("blog")}
              className={`flex items-center gap-1 ${isActive("/blog")}`}
            >
              Blog <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "blog" && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <Link
                  href="/blog/latest"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Latest Posts
                </Link>
                <Link
                  href="/blog/archive"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Archives
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("others")}
              className={`flex items-center gap-1 ${isActive("/others")}`}
            >
              <Clock className="h-4 w-4 mr-1" />
              Others <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            {openMenu === "others" && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <Link
                  href="/about"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu("")}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
        
        <div className="relative">
          <button
            onClick={() => toggleMenu("city")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center px-4 py-2 rounded-md"
          >
            <MapPin className="h-5 w-5 mr-2" /> {selectedCity}
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>

          {openMenu === "city" && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setOpenMenu("");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
