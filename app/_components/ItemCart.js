"use client";
import React from "react";
import { useCart } from "../../context/CartContext"; // Adjust path as needed
import { useRouter } from "next/navigation";

const CartItemPage = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the `id` from the route
  const { cart } = useCart(); // Use the cart context to get cart items

  // Find the item in the cart by `id`
  const item = cart.find((i) => i.id === id);

  if (!item) {
    return <p>Item not found in cart.</p>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      {/* Additional item details */}
    </div>
  );
};

export default CartItemPage;
