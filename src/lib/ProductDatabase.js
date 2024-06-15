import sql from "better-sqlite3";
import slugify from 'slugify';
import xss from 'xss';
import fs from "node:fs";

const db = sql('products.db');

export const getProducts = () => {
    return db.prepare('SELECT * FROM products').all();
    //  for single row use get();
    //  for inserting use run();
}

export const insertProduct = async (product) => {
    product.slug = slugify(product.name, { lower: true });
    product.description = xss(product.description);

    const extension = product.image.name.split('.').pop();
    const filename = `${product.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${filename}`)
    const bufferedImage = await product.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error )=>{
        if(error){
            throw new Error("Saving image failed: " + error)
        }
    });

    product.image= `/images/${filename}`;

    db.prepare(`
        INSERT INTO products
        (name, description, image, price, ram, storage, model, slug)
        VALUES (
            @name,
            @description,
            @image,
            @price,
            @ram,
            @storage,
            @model,
            @slug
        )
    `).run(product);
}