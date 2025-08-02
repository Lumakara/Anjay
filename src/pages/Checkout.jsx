// src/pages/Checkout.jsx
import { useState, useRef } from 'react';
import { useCart } from '../utils/useCart';
import { useAuth } from '../utils/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Checkout() {
  const { cart, removeFromCart, setCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paid, setPaid] = useState(false);
  const formRef = useRef();
  const invoiceRef = useRef();

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0).toFixed(2);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // simulate network delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaid(true);
      toast.success('Payment successful!');

      // clear cart
      setCart([]);
    }, 2500);
  };

  const downloadInvoice = async () => {
    const doc = new jsPDF({ unit: 'px', format: 'a4' });
    const canvas = await html2canvas(invoiceRef.current);
    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 20, 20, 560, 0);
    doc.save(`invoice_${Date.now()}.pdf`);
  };

  return (
    <main className="pt-24 pb-16 max-w-3xl mx-auto">
      <AnimatePresence>
        {paid && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-green-500 mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              >
                <path d="M20 6L9 17l-5-5" />
              </motion.svg>
              <h2 className="mt-4 text-xl font-semibold">Thank you for your purchase!</h2>
              <button
                onClick={() => {
                  setPaid(false);
                  navigate('/transactions');
                }}
                className="mt-6 px-6 py-2 bg-primary text-white rounded-lg"
              >
                View Transactions
              </button>
              <button
                onClick={downloadInvoice}
                className="mt-3 text-sm underline"
              >
                Download Invoice
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={invoiceRef} className="space-y-6">
        <h1 className="text-2xl font-display">Checkout</h1>
        {!paid ? (
          <>
            {/* Order Summary */}
            <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="font-semibold mb-2">Your Order</h2>
              <ul className="divide-y">
                {cart.map((p) => (
                  <li key={p.id} className="flex justify-between py-2">
                    <span>{p.name} × {p.qty}</span>
                    <span>${(p.price * p.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4 font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </section>

            {/* Payment Form */}
            <form
              ref={formRef}
              onSubmit={handlePayment}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
            >
              <h2 className="font-semibold">Payment Details</h2>
              <input
                required
                type="text"
                placeholder="Cardholder Name"
                className="w-full px-4 py-2 bg-gray-100 rounded focus:outline-none"
              />
              <input
                required
                type="text"
                placeholder="Card Number"
                maxLength="19"
                className="w-full px-4 py-2 bg-gray-100 rounded focus:outline-none"
              />
              <div className="flex space-x-4">
                <input
                  required
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                  className="flex-1 px-4 py-2 bg-gray-100 rounded focus:outline-none"
                />
                <input
                  required
                  type="text"
                  placeholder="CVV"
                  maxLength="3"
                  className="w-24 px-4 py-2 bg-gray-100 rounded focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg"
              >
                {isProcessing ? (
                  <motion.span
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                ) : (
                  <span>Pay ${total}</span>
                )}
              </button>
            </form>
          </>
        ) : null}
      </div>
    </main>
  );
}