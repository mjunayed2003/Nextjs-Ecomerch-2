'use client';

import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";

const BottomNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">

        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600 flex items-center">
            <ShoppingBag className="h-7 w-7 mr-2 text-green-600" strokeWidth={2} />
            Grabit
          </span>
        </div>

        <div className="flex-grow max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex gap-2 items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-100 p-2 rounded"
            >
              <User className="h-5 w-5 mb-1" />
              <div>
                <span>
                  Account</span>
                <span className="flex items-center space-x-1">
                  <span>LOGIN</span>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </div>
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <div className="px-3 py-2 text-gray-700 font-semibold border-b">My Account</div>
                <ul className="text-gray-700">
                  <li>
                    <Link
                      href="/login"
                      className="block px-3 py-2 hover:bg-gray-100 transition"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="block px-3 py-2 hover:bg-gray-100 transition"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/checkout"
                      className="block px-3 py-2 hover:bg-gray-100 transition"
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-2 items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-100 p-2 rounded">
            <Heart className="h-5 w-5 mb-1" />
            <div>
              <div>Wishlist</div>
              <span>0 ITEMS</span>
            </div>
          </div>

          <div className="flex gap-2 items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-100 p-2 rounded">
            <ShoppingBag className="h-5 w-5 mb-1" />
            <div className="flex flex-col">
              <span>Cart</span>
              <span>0 ITEMS</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
