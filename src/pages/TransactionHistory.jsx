// src/pages/TransactionHistory.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOrders } from '../utils/useOrders';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FiDownload } from 'react-icons/fi';

export default function TransactionHistory() {
  const orders = useOrders((state) => state.orders);

  const downloadInvoice = async (orderId) => {
    const element = document.getElementById(`order-${orderId}`);
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ unit: 'px', format: 'a4' });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`invoice_${orderId}.pdf`);
  };

  return (
    <main className="pt-24 pb-16 max-w-4xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-display"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Transaction History
      </motion.h1>

      {orders.length === 0 && (
        <p className="text-center text-gray-500">No past orders found.</p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            id={`order-${order.id}`}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Download button */}
            <button
              onClick={() => downloadInvoice(order.id)}
              className="absolute top-4 right-4 flex items-center space-x-1 text-primary hover:underline"
            >
              <FiDownload /> <span className="text-sm">Invoice</span>
            </button>

            {/* Order header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(order.date).toLocaleString()}
                </p>
              </div>
              <div className="text-lg font-bold">${order.total.toFixed(2)}</div>
            </div>

            {/* Items list */}
            <ul className="divide-y">
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>
                    {item.qty} × ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}