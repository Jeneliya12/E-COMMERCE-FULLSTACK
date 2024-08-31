import React, { useState } from "react";

function CreditCardModal({ isOpen, onClose, onPaymentSuccess }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePay = () => {
    // Here, you could add logic to process the payment
    // For now, we'll just simulate a successful payment
    onPaymentSuccess();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Enter Credit Card Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Expiry Date</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">CVV</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-orange text-white py-4 px-4 rounded hover:bg-green-600"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditCardModal;
