const sql = require('better-sqlite3');
const db = sql('products.db');

const productsArray = [
  {
    name: 'Lenovo A11',
    slug: 'lenovo-a11',
    model: 'a12',
    ram: '8GB',
    storage: '256GB',
    description: 'In a pan with oil, sauté the vegetables until they start to soften Add curry paste Stir in 2 tablespoons of ',
    image: '/images/burger.webp',
    price:'21000',
    
  },
  {
    name: 'Lenovo A12',
    slug: 'lenovo-a12',
    model: 'a12',
    ram: '8GB',
    storage: '256GB',
    description: 'In a pan with oil, sauté the vegetables until they start to soften Add curry paste Stir in 2 tablespoons of ',
    image: '/images/burger.webp',
    price:'21000',
    
  },
  {
    name: 'Lenovo A123',
    slug: 'lenovo-a123',
    model: 'a12',
    ram: '8GB',
    storage: '256GB',
    description: 'In a pan with oil, sauté the vegetables until they start to soften Add curry paste Stir in 2 tablespoons of ',
    image: '/images/burger.webp',
    price:'21000',    
  }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       name TEXT NOT NULL,
       model TEXT NOT NULL,
       description TEXT NOT NULL,
       image TEXT NOT NULL,
       price TEXT NOT NULL,
       ram TEXT NOT NULL,
       storage TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO products VALUES (
         null,
         @slug,
         @name,
         @model,
         @description,
         @image,
         @price,
         @ram,
         @storage
      )
   `);

  for (const product of productsArray) {
    stmt.run(product);
  }
}

initData();

