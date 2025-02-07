"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Loader from "@/app/components/loader";

interface Product {
  _id: string;
  title: string;
  price: number;
  slug?: { current: string };
  productImage?: { asset: { url: string } };
}

async function fetchProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == 'product']{
      _id,
      title,
      price,
      slug,
      productImage {
        asset -> { url }
      }
    }`
  );
}

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header />
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-6">Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) =>
          product?.slug?.current ? (
            <div key={product._id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <Link href={`/product/${product.slug.current}`}>
                <Image
                  src={product.productImage?.asset.url || "/placeholder.jpg"}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-600">Rs. {product.price}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                  View Details
                </button>
              </Link>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </div>
    </div>
  );
}
