"use client";

import convertToSubCurrency from "../../lib/ConvertToSubCurrency";
import CheckoutPage from "@/app/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const amount = 49.99;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center">Secure Payment</h1>
                <p className="text-lg text-gray-600 text-center">Complete your purchase safely and securely.</p>
                <div className="border-b border-gray-300 pb-4 text-center">
                    <span className="text-lg font-medium text-gray-700">Total Amount: </span>
                    <span className="text-xl font-bold text-green-600">${amount.toFixed(2)}</span>
                </div>
                <Elements
                    stripe={stripePromise}
                    options={{
                        mode: "payment",
                        amount: convertToSubCurrency(amount),
                        currency: "usd",
                    }}
                >
                    <CheckoutPage amount={amount} />
                </Elements>
              
            </div>
        </div>
    );
};

export default StripePayment;
