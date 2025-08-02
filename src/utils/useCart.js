// src/utils/useCart.js
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

export const useCart = create(persist(
  (set, get) => ({
    cart: [],
    wishlist: [],
    addToCart: (product) => {
      const exists = get().cart.find((p) => p.id === product.id);
      if (!exists) {
        set({ cart: [...get().cart, { ...product, qty: 1 }] });
        toast.success(`${product.name} added to cart`);
      }
    },
    removeFromCart: (id) => {
      set({ cart: get().cart.filter((p) => p.id !== id) });
      toast.info('Removed from cart');
    },
    toggleWishlist: (id) => {
      const list = get().wishlist;
      if (list.includes(id)) {
        set({ wishlist: list.filter((i) => i !== id) });
        toast.info('Removed from wishlist');
      } else {
        set({ wishlist: [...list, id] });
        toast.success('Added to wishlist');
      }
    }
  }),
  {
    name: 'lumakara-cart',
    getStorage: () => localStorage
  }
));