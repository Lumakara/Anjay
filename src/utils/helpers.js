// src/utils/helpers.js

// Sample product dataset for demo/testing
export const productsData = [
  {
    id: 1,
    name: 'Sakura Wireless Earbuds',
    price: 79.99,
    rating: 4.5,
    image: '/assets/images/earbuds.jpg',
    images: [
      '/assets/images/earbuds-1.jpg',
      '/assets/images/earbuds-2.jpg',
      '/assets/images/earbuds-3.jpg'
    ],
    description:
      'Premium true wireless earbuds with noise cancellation and long battery life.',
    reviews: [
      { user: 'Alice', rating: 5, comment: 'Excellent sound quality!' },
      { user: 'Bob', rating: 4, comment: 'Very comfortable.' }
    ],
    tags: ['audio', 'wireless', 'japanese']
  },
  {
    id: 2,
    name: 'Zen Bluetooth Speaker',
    price: 129.0,
    rating: 4.8,
    image: '/assets/images/speaker.jpg',
    images: [
      '/assets/images/speaker-1.jpg',
      '/assets/images/speaker-2.jpg'
    ],
    description:
      'Compact Bluetooth speaker with immersive 360° sound and water-resistant finish.',
    reviews: [
      { user: 'Carol', rating: 5, comment: 'Loud and clear!' },
      { user: 'Dan', rating: 4, comment: 'Stylish design.' }
    ],
    tags: ['audio', 'speaker', 'outdoor']
  }
  // ...more products
];

// Format a number to currency string
export function formatPrice(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value);
}