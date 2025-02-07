'use client';

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import Link from "next/link";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch clientSecret from the backend
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error("Error fetching clientSecret:", err));
  }, [amount]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe, Elements, ya clientSecret load nahi hua.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      console.error("Payment Failed:", error.message);
    } else {
      console.log("Payment Successful!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Link href={'/payment-succsess'}>
      <button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full bg-black rounded-md hover:bg-[#111111] transition focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2 mt-[40px] text-white py-2"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      </Link>
    </form>
  );
};

export default CheckoutPage;

