"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import CardsIma from "../fonts/image.png";
import "../../module/cards.css";

const products = [
  {
    id: 1,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 2,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 3,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 4,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 5,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 6,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 7,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
  {
    id: 8,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: 18.99,
    src: CardsIma,
  },
];

export default function Cards() {
  const [filter, setFilter] = useState("All Products");
  const [sort, setSort] = useState("Best Selling");

  return (
    <div className="container bg-white mx-auto ">
      <h1 className="text-4xl mt-20 font-bold text-center text-gray-800">
        All Products
      </h1>

      <div className="flex justify-between mt-[50px] mb-6">
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option className="w-[90px]">All Products</option>
            <option>New Arrivals</option>
            <option>Sale Items</option>
          </select>
          <ChevronDownIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <ChevronDownIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-full h-[270px]">
              <Image
                src={product.src}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-[14px] text-center font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-xl text-center font-bold text-blue-600 mb-4">
                {product.price.toFixed(2)}$
              </p>
              <button className="rounded-xl border-2 ml-[63px] w-[150px] border-sky-500 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-cyan-400 active:bg-gray-300/10 dark:border-white/20 dark:bg-white dark:text-white dark:hover:bg-cyan-600 dark:active:bg-white text-sky-500 hover:text-white">
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          variant="outline"
          className="rounded-xl border-2 w-[130px] mt-[40px] border-sky-500 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-cyan-400 active:bg-gray-300/10 dark:border-white/20 dark:bg-white dark:text-white dark:hover:bg-cyan-600 dark:active:bg-white text-sky-500 hover:text-white"
        >
          View All
        </button>
      </div>
    </div>
  );
}
