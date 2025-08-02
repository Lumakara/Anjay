import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import particleBg from '../assets/images/particle-bg.svg';

export default function LoadingAnimation() {
  const nav = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => nav('/home'), 5500);
    return () => clearTimeout(id);
  }, [nav]);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-black text-white"
      style={{ backgroundImage: `url(${particleBg})`, backgroundSize: 'cover' }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-display tracking-widest"
      >
        Lumakara
      </motion.div>
    </div>
  );
}