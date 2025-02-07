"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useDebounce } from "use-debounce"; // Debounce hook for optimizing search

interface Product {
  _id: string;
  title: string;
  productImage: any;
  slug: string;
}

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // Delay API calls
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // Hide dropdown when no search

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      setLoading(true);
      setShowResults(true); // Show dropdown when searching

      const query = `*[_type == "product" && title match $searchTerm]{
        _id,
        title,
        productImage,
        "slug": slug.current
      }`;

      const params = { searchTerm: `${debouncedSearchTerm.toLowerCase()}*` };

      client
        .fetch(query, params)
        .then((results) => {
          setSearchResults(results);
        })
        .catch((error) => console.error("Sanity search error:", error))
        .finally(() => setLoading(false));
    } else {
      setSearchResults([]);
      setShowResults(false); 
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      {/* Search Results (Same Page) */}
      {showResults && searchResults.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-2 z-50">
          {searchResults.map((product) => (
            <li key={product._id} className="p-2 hover:bg-gray-100 cursor-pointer">
              <Link href={`/product-v2/${product.slug}`} className="flex items-center space-x-2">
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).width(50).url() || "/placeholder.svg"}
                    width={50}
                    height={50}
                    alt={product.title}
                    className="object-cover rounded"
                  />
                )}
                <span>{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Loading State */}
      {loading && <p className="absolute mt-2 text-gray-500 text-sm">Searching...</p>}
    </div>
  );
}
