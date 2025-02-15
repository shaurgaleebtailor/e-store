import mensintro from "../../assets/intro/mens-intro.webp";
import womensintro from "../../assets/intro/womens-intro.jpg";
import electronicsintro from "../../assets/intro/electronics-intro.jpg";
import jewelleryintro from "../../assets/intro/jewellery-intro-1.jpg";
import heromens from "../../assets/hero-mens.webp";
import herojewellery from "../../assets/hero-jewellery-2.jpg";
import heroelectronics from "../../assets/hero-electronics.jpg";
import herowomens from "../../assets/hero-womens.jpg";

export const availableCategories = [
  "Electronics",
  "Jewellery",
  "Mens Clothing",
  "Womens Clothing",
];

export const heroCarouselData = [
  {
    id: 2,
    title: "Mens Top Notch Latest Outfits in T-Shirts, Suits, Hoodies & More",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: heromens,
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 17,
    title: "Womens New Era of Shopping Begins with These Trendy Outfits",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it. Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: herowomens,
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor - Ultra-Wide, High Performance",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag.",
    category: "electronics",
    image: heroelectronics,
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 6,
    title:
      "Exquisite Indian Diamonds - Handmade Bracelets & Stunning Necklaces Collection",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: herojewellery,
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];

export const allProductsIntro = [
  {
    id: 1,
    imgSrc: mensintro,
    title: "Men's Fashion",
    description: "Trendy outfits & more",
    linkTitle: "See Details",
  },
  {
    id: 2,
    imgSrc: womensintro,
    title: "Women's Fashion",
    description: "Latest styles & trends",
    linkTitle: "See Details",
  },
  {
    id: 3,
    imgSrc: electronicsintro,
    title: "Electronics",
    description: "Smart gadgets & devices",
    linkTitle: "See Details",
  },
  {
    id: 4,
    imgSrc: jewelleryintro,
    title: "Jewellery",
    description: "Elegant & stylish pieces",
    linkTitle: "See Details",
  },
];

export const storeFeaturesList = [
  {
    featureName: "Diverse Collection",
    featureDescription:
      "Explore a wide range of electronics, fashion, and accessories.",
  },
  {
    featureName: "Quality Assurance",
    featureDescription:
      "Handpicked products from trusted brands and suppliers.",
  },
  {
    featureName: "Secure Payments",
    featureDescription: "Multiple payment options with encrypted transactions.",
  },
  {
    featureName: "Fast & Reliable Shipping",
    featureDescription: "Get your orders delivered quickly and safely.",
  },
  {
    featureName: "Easy Returns & Exchanges",
    featureDescription: "Hassle-free return and refund policies.",
  },
  {
    featureName: "24/7 Customer Support",
    featureDescription: "Dedicated assistance whenever you need help.",
  },
  {
    featureName: "Exclusive Deals & Discounts",
    featureDescription: "Enjoy special offers and seasonal sales.",
  },
];
