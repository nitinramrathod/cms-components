"use server";

import { insertProduct } from "@/lib/ProductDatabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const isInvalidString = (str)=>{
    return !str || str?.trim() === "";
}

export const storeProduct = async (prevState, FormData) => {
    const product ={
        name:FormData.get('name'),
        model:FormData.get('model'),
        description:FormData.get('description'),
        image:FormData.get('image'),
        price:FormData.get('price'),
        ram:FormData.get('ram'),
        storage:FormData.get('storage')
    }

    let error = {}

    if( isInvalidString(product.name)){
        error.name = "Name is required"
        
    }
    if( isInvalidString(product.model)){
        error.model = "Model is required"

    }
    if( isInvalidString(product.description)){
        error.description = "Description is required"

    }
    if(!product.image || product.image.size === 0){
        error.image = "Image is required"
    }
    if( isInvalidString(product.price)){
        error.price = "Price is required"
    }
    if(isInvalidString(product.ram )){
        error.ram = "ram is required"
    }
    if( isInvalidString(product.storage)){
        error.storage = "storage is required"
    }

    if (Object.keys(error).length > 0) {
        return error;
    }

    await insertProduct(product);
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
  };