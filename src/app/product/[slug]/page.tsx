"use client";

import Image from "next/image";
import { useState, useEffect, MouseEvent } from "react";
import { Star, Plus, Minus, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Loader from "@/app/components/loader";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions"; 
import Link from "next/link";
import Chat from "@/app/components/Chat";

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
      _id,
      title,
      productImage,
      price,
      description,
      discountPercentage,
      isNew
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [productDet, setProductDet] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [isChatOpen, setChatOpen] = useState(false);
  
  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(slug);
      setProductDet(data);
    }
    fetchProduct();
  }, [slug]);

  if (!productDet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Product Image */}
          <div className="w-full flex justify-center md:justify-start">
            {productDet.productImage && (
              <Image
                src={urlFor(productDet.productImage).url()}
                alt={productDet.title}
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-md"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6 w-full">
            <h1 className="text-3xl font-bold">{productDet.title}</h1>
            <p className="text-2xl">Rs. {productDet.price}</p>

            {productDet.dicountPercentage && (
              <div className="text-sm text-red-500">
                <span>Discount: {productDet.dicountPercentage}% OFF</span>
              </div>
            )}

            <p className="text-muted-foreground">{productDet.description}</p>

            {/* Size Selection */}
            <div className="space-y-2">
              <Label>Size</Label>
              <RadioGroup defaultValue={selectedSize} onValueChange={setSelectedSize} className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button className="bg-[#B8860B]" onClick={(e) => handleAddToCart(e, productDet)}>Add to Cart</Button>
            </div>

            {/* Chat */}
            <div className="pt-6">
              <Button className="w-full text-white  hover:bg-blue-700" onClick={() => setChatOpen(!isChatOpen)}>
                Chat with Us
              </Button>
              {isChatOpen && <Chat />} 
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
