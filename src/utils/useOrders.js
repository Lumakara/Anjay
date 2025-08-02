// src/utils/useOrders.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useOrders = create(persist(
  (set, get) => ({
    orders: [],

    // Add a new order object: { id, items, total, date }
    addOrder: (order) => {
      set({ orders: [...get().orders, order] });
    },

    // Clear all history (admin use or user reset)
    clearOrders: () => set({ orders: [] })
  }),
  {
    name: 'lumakara-orders',
    getStorage: () => localStorage
  }
));