import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto mt-10 pb-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 border rounded-lg shadow-sm"
            >
              <div className="w-24 h-24 mr-4">
                <img
                  src={`https://res.cloudinary.com/dfxlmzrj7/image/upload/v1724896335/${product.images}`}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-lg font-bold text-gray-800">
                  ${product.price} x {product.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 flex items-center"
                >
                  <FaTrash size={20} />
                  <span className="ml-2">Remove</span>
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="ml-auto mt-6 w-52 bg-orange text-white py-4 px-4 rounded hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
