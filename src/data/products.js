import image1 from "../assets/image.jpeg";
import image2 from "../assets/images.jpeg";
import image4 from "../assets/lenovo.avif";
import image5 from "../assets/lenovo-2.webp";
import image6 from "../assets/macbook-pro-14-m2.webp";

const products = [
  // HP Laptops
  {
    id: 1,
    name: "HP Pavilion 14",
    brand: "HP",
    price: 29999,
    image: image1,
    category: "HP",
    description: "Slim, stylish, and powerful with Intel i5 processor and long battery life.",
  },
  {
    id: 2,
    name: "HP Envy x360",
    brand: "HP",
    price: 34999,
    image: image2,
    category: "HP",
    description: "2-in-1 convertible laptop with touchscreen and AMD Ryzen performance.",
  },

  // Dell Laptops
  {
    id: 3,
    name: "Dell Inspiron 15",
    brand: "Dell",
    price: 15999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    category: "Dell",
    description: "Affordable and durable with Intel Core i3 and a vibrant 15.6-inch display.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    brand: "Dell",
    price: 19999,
    image: image4,
    category: "Dell",
    description: "Premium ultrabook with stunning edge-to-edge display and fast SSD.",
  },

  // Lenovo Laptops
  {
    id: 5,
    name: "Lenovo ThinkPad X1",
    brand: "Lenovo",
    price: 15999,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    category: "Lenovo",
    description: "Built for business — legendary keyboard, sleek design, and fast processing.",
  },
  {
    id: 6,
    name: "Lenovo IdeaPad 3",
    brand: "Lenovo",
    price: 24999,
    image: image5,
    category: "Lenovo",
    description: "Perfect everyday laptop with performance and battery that lasts.",
  },

  // Apple Laptops
  {
    id: 7,
    name: "MacBook Air M1",
    brand: "Apple",
    price: 64999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    category: "Apple",
    description: "Lightweight, powerful, and silent — the M1 chip redefines speed and efficiency.",
  },
  {
    id: 8,
    name: "MacBook Pro 14",
    brand: "Apple",
    price: 244999,
    image: image6,
    category: "Apple",
    description: "For pros who need raw power and a stunning Liquid Retina XDR display.",
  },
];

export default products;
