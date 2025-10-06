"use client";

import { useEffect, useState } from "react";
import { Tag, Users, DollarSign } from "lucide-react";
import { Product } from "@/types/product";

export default function BlogSlideBar({
  onFilter,
}: {
  onFilter: (filters: any) => void;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [genders, setGenders] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);

  // Fetch API products
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        const cats = Array.from(
          new Set(
            (data.data as Product[]).map(
              (p) => p.category.split(" ")[1] || p.category
            )
          )
        );
        setCategories(cats);
      });
  }, []);

  const handleCategoryChange = (cat: string) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(updated);
    onFilter({ categories: updated, gender: selectedGenders, price: priceFilter });
  };

  const handleGenderChange = (gender: string) => {
    const updated = selectedGenders.includes(gender)
      ? selectedGenders.filter((g) => g !== gender)
      : [...selectedGenders, gender];
    setSelectedGenders(updated);
    onFilter({ categories: selectedCategories, gender: updated, price: priceFilter });
  };

  const handlePriceChange = (price: string) => {
    const updated = priceFilter.includes(price)
      ? priceFilter.filter((p) => p !== price)
      : [...priceFilter, price];
    setPriceFilter(updated);
    onFilter({ categories: selectedCategories, gender: selectedGenders, price: updated });
  };


  return (
    <div className="w-full bg-background mt-7 backdrop-blur-md border border-gray300 rounded-2xl shadow-md p-5 sm:p-6 space-y-6 transition-all duration-300 hover:shadow-lg">

      {/* Categories */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-5 h-5 text-gray600" />
          <h4 className="font-semibold text-base sm:text-lg">Categories</h4>
        </div>
        <div className="space-y-2">
          {categories.map((cat, i) => (
            <label
              key={i}
              className={`block text-sm font-medium cursor-pointer rounded-md px-2 py-1 transition-all duration-200 ${selectedCategories.includes(cat)
                ? "bg-gray800 text-white"
                : "hover:bg-gray100 text-gray800"
                }`}
            >
              <input
                type="checkbox"
                className="mr-2 accent-gray-800"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-gray600" />
          <h4 className="font-semibold text-base sm:text-lg">Gender</h4>
        </div>
        <div className="space-y-2">
          {["Men", "Women", "Kid"].map((gender, i) => (
            <label
              key={i}
              className={`block text-sm font-medium cursor-pointer rounded-md px-2 py-1 transition-all duration-200 ${selectedGenders.includes(gender)
                ? "bg-gray800 text-white"
                : "hover:bg-gray100 text-gray800"
                }`}
            >
              <input
                type="checkbox"
                className="mr-2 accent-gray-800"
                checked={selectedGenders.includes(gender)}
                onChange={() => handleGenderChange(gender)}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="w-5 h-5 text-gray600" />
          <h4 className="font-semibold text-base sm:text-lg">Shop by Price</h4>
        </div>
        <div className="space-y-2">
          <label
            className={`block text-sm font-medium cursor-pointer rounded-md px-2 py-1 transition-all duration-200 
              ${priceFilter.includes("under2500")
                ? "bg-gray800 text-white"
                : "hover:bg-gray100 text-gray800"
              }`}
          >
            <input
              type="checkbox"
              className="mr-2 accent-gray800"
              checked={priceFilter.includes("under2500")}
              onChange={() => handlePriceChange("under2500")}
            />
            Under ₹ 2,500.00
          </label>
          <label
            className={`block text-sm font-medium cursor-pointer rounded-md px-2 py-1 transition-all duration-200 
              ${priceFilter.includes("above2500")
                ? "bg-gray-800 text-white"
                : "hover:bg-gray100 text-gray800"
              }`}
          >
            <input
              type="checkbox"
              className="mr-2 accent-gray-800"
              checked={priceFilter.includes("above2500")}
              onChange={() => handlePriceChange("above2500")}
            />
            ₹ 2,501.00 +
          </label>
        </div>
      </div>
    </div>
  );
}
