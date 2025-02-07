"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { fourProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(fourProducts);
      console.log("Fetched Products:", fetchedProduct); // Debugging
      setProduct(fetchedProduct);
    }
    fetchedProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) =>  {
    e.preventDefault();
    Swal.fire ({
      position: 'center',
      icon : 'success',
      title : `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product);
  }

  // Function to render stars for the rating
  const renderStars = (rating: number) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(i < rating ? "★" : "☆");
    }

    return stars.join(" ");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="lg:text-[60px] flex items-center justify-center sm:text-[40px] font-bold">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => (
          product.slug?.current && (
            <div key={product._id} className="border rounded-lg shadow-md p-4">
              <Link href={`/product/${product.slug.current}`}>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
                <p className="text-gray-500 mt-2">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>

                {/* Display product rating */}
                <div className="mt-2">
                  <p className="text-yellow-500">{renderStars(product.rating || 0)}</p>
                </div>

                {/* Display comments */}
                <div className="mt-2">
                  {product.comments?.length > 0 ? (
                    <div>
                      <h3 className="text-sm font-semibold">Customer Reviews:</h3>
                      <ul className="text-sm text-gray-600">
                        {product.comments.slice(0, 2).map((comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined, index: React.Key | null | undefined) => (
                          <li key={index} className="mt-1">{comment}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No reviews yet.</p>
                  )}
                </div>

              
              </Link>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Shop;
