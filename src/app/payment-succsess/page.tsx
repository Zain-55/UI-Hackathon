"use client"; 
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PaymentSuccess = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount") || "0"; // Default amount agar missing ho

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center text-gray-900 max-w-md">
                <div className="flex justify-center">
                    <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold mt-4">Payment Successful!</h1>
                <p className="text-lg mt-2">Thank you for your purchase.</p>
                <p className="text-2xl font-semibold text-green-600 mt-4">Amount Paid: ${amount}</p>
                <Link href={'/'}>
                    <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};
 
export default PaymentSuccess;