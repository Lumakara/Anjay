// src/utils/useAuth.js
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

export const useAuth = create(persist(
  (set) => ({
    user: null,
    login: async ({ email, password }) => {
      // Mock validation
      if (email === 'user@lumakara.com' && password === 'password') {
        const user = { id: 1, name: 'Lumakara User', email };
        set({ user });
        toast.success('Logged in successfully!');
      } else {
        toast.error('Invalid credentials');
      }
    },
    logout: () => {
      set({ user: null });
      toast.info('Logged out');
    }
  }),
  {
    name: 'lumakara-auth',
    getStorage: () => localStorage
  }
));