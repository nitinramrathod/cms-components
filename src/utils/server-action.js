"use server";

import { insertProduct } from "@/lib/ProductDatabase";
import { redirect } from "next/navigation";

export const storeProduct = async (FormData) => {
    const product ={
        name:FormData.get('name'),
        model:FormData.get('model'),
        description:FormData.get('description'),
        image:FormData.get('image'),
        price:FormData.get('price'),
        ram:FormData.get('ram'),
        storage:FormData.get('storage')
    }

    await insertProduct(product);
    redirect('/dashboard/products')
  };