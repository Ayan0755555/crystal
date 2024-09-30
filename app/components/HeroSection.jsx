"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { MouseIcon, ShoppingCart } from "lucide-react";
import CardsImage from "../fonts/image.png";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollTargetRef = useRef(null);

  const images = [
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
    { src: CardsImage, alt: "Crystal Agate Phone Grip", price: "$18.99" },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleScrollDown = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-cyan-300 via-pink-300 to-blue-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="text-white font-semibold text-xl">
            Pop Rock Crystal
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <div className="w-6 h-6 bg-red-500 rounded-full" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-1 flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">
            Welcome to
            <br />
            Pop Rock Crystal Shop!
          </h1>
          <p className="text-black text-[20px] mb-8 max-w-md">
            Here you will find unique phone accessories, crystals, jewelry, and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold">
              SHOP NOW
            </button>
            <button className="text-white border border-white px-6 py-2 rounded-full font-semibold">
              About Us
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm">
              New lot
            </span>
            <div className="mt-4 flex justify-center">
              <Image
                src={images[activeSlide].src}
                alt={images[activeSlide].alt}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {images[activeSlide].alt} - {images[activeSlide].price}
            </h2>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevSlide}
                className="text-white bg-gray-600 px-4 py-2 rounded-full"
              >
                Prev
              </button>
              <button
                onClick={handleNextSlide}
                className="text-white bg-gray-600 px-4 py-2 rounded-full"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="flex justify-end mr-[325px] space-x-2 mb-[85px]">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeSlide ? "bg-purple-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div
        className="flex justify-center text-center mt-[35px] text-blue-900 cursor-pointer"
        onClick={handleScrollDown}
      >
        <span className="text-6xl font-bold">
          <MouseIcon />
        </span>
        <p className="mb-[110px]">scroll down</p>
      </div>

      {/* Scroll Target */}
      <div ref={scrollTargetRef}></div>
    </div>
  );
}
