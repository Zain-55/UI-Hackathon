import { Product } from "../../../types/products";
import { client } from "../../sanity/lib/client"; // Sanity client import karein

// Function to fetch user orders from Sanity
export const getUserOrders = async (email: string) => {
  const query = `*[_type == "order" && email == $email]{
    _id,
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    zip,
    total,
    status,
    cartItems[]->{title, price}
  }`;
  return await client.fetch(query, { email });
};

// Add a product to the cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove a product from the cart
export const removeFromCart = (productId: string) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productId);
  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Get all cart items
export const getCartItem = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};
