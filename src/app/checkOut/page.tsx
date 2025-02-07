"use client";

import { useEffect, useState } from "react";
import { getCartItem } from "../actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Product } from "../../../types/products";
import Cartherosection from "../components/Cartherosection";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Footer from "../components/Footer";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const router = useRouter();
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      Swal.fire({
        title: "Order Confirmed!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        localStorage.removeItem("appliedDiscount");
        localStorage.removeItem("cart");
        router.push(`/payment?amount=${total}`);
      });
    } else {
      Swal.fire("Error", "Please fill in all required fields.", "error");
    }
  };

  return (
    <div>
      <Header/>
      <Cartherosection/>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Billing details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={formValues.firstName} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={formValues.lastName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Street address</Label>
              <Input id="address" value={formValues.address} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" value={formValues.city} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input id="zipCode" value={formValues.zipCode} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={formValues.phone} onChange={handleInputChange} type="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" value={formValues.email} onChange={handleInputChange} type="email" />
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                {cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between">
                    <span>{item.title} × {item.quantity}</span>
                    <span>Rs. {item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t pt-4 font-semibold">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">Rs. {total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full bg-[#B8860B]" onClick={handlePlaceOrder}>Place Order</Button>
          </div>
        </div>
      </div>
      <Ourservices/>
      <Footer/>
    </div>
  );
};

export default Checkout;