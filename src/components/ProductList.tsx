// components/ProductList.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default function ProductList() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;
  return (
    <ul>
      {products?.map((product: any) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price} points</p>
        </li>
      ))}
    </ul>
  );
}
