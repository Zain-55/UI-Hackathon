"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Product } from "../../../types/products";
import { useEffect, useState } from "react";
import { getCartItem, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ourservices from "../components/Ourservices";
import Cartherosection from "../../app/components/Cartherosection"

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const items = getCartItem(); // Fetch items from localStorage
    setCartItems(items);
  }, []);

  // Handle removing an item from the cart
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id); // Remove the item from localStorage
        const updatedCartItems = getCartItem(); // Fetch updated items from localStorage
        setCartItems(updatedCartItems); // Update state with the updated cart items
        Swal.fire("Removed", "Item has been removed from the cart", "success");
      }
    });
  };

  // Handle quantity changes
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return; // Prevent setting a quantity less than 1
    updateCartQuantity(id, quantity); // Update the quantity in localStorage
    setCartItems(getCartItem()); // Update state
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  // Proceed to checkout alert
  // const handleProceed = () => {
  //   Swal.fire({
  //     title: "Proceed to checkout",
  //     text: "Do you want to proceed to checkout?",
  //     icon: "question",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     // confirmButtonText: "Yes, proceed",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Proceeded", "You have successfully proceeded to checkout", "success");
  //     }
  //   });
  // };

  return (
    <div>
      <Header/>
      <Cartherosection
      />
    <div className="container mx-auto p-4">
      <div className="grid gap-8 md:grid-cols-12">
        {/* Main cart section */}
        <div className="md:col-span-8">
          <div className="mb-4 grid grid-cols-4 bg-[#fdf6f0] p-3">
            <div className="text-sm font-medium">Product</div>
            <div className="text-sm font-medium">Price</div>
            <div className="text-sm font-medium">Quantity</div>
            <div className="text-sm font-medium">Subtotal</div>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id.toString()} className="grid grid-cols-4 items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-20 w-20 overflow-hidden rounded bg-[#fdf6f0] p-2">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{item.title}</span>
                </div>
                <div className="text-sm">Rs. {item.price.toLocaleString()}</div>
                <div>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity} // Fix: Bind to the quantity
                    onChange={(e) =>
                      handleQuantityChange(item._id.toString(), parseInt(e.target.value))
                    }
                    className="w-16 text-center"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleRemove(item._id.toString())}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart totals section */}
        <div className="md:col-span-4">
          <div className="rounded bg-[#fdf6f0] p-6">
            <h2 className="mb-6 text-xl font-bold">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
              </div>
              <Link href={'/checkOut'}>
              <Button
                className="mt-4 w-full rounded-none border border-black bg-transparent text-black hover:bg-black hover:text-white"
                // onClick={handleProceed}
              >
                Check Out
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Ourservices/>
    <Footer/>
    
    </div>
  );
};

export default ShoppingCart;