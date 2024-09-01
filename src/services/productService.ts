// services/productService.ts
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export async function createProduct(
  name: string,
  description: string,
  price: number
) {
  const newProduct = {
    name,
    description,
    price,
    createdAt: Date.now(),
  };

  // const docRef = await addDoc(collection(db, "products"), newProduct);
  return 1;
  // return { id: docRef.id, ...newProduct };
}
