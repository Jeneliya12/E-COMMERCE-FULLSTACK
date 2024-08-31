import React, { useContext, useState } from "react";
import { Image } from "cloudinary-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartcontext";
import { products } from "../data/productdata";
import {
  FaRegHeart,
  FaEye,
  FaShoppingCart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function Product() {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(Array(products.length).fill(1)); // Initialize quantities array
  const [clicked, setClicked] = useState(null); // State to track the clicked product
  const navigate = useNavigate();

  const handleAddToCart = (product, index) => {
    setClicked(index); // Set the clicked state to the product index
    addToCart({ ...product, quantity: quantities[index] }); // Pass the product with quantity to addToCart
  };

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <div className="container mx-auto mt-10 pb-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Currently Popular Items
      </h2>
      <div className="flex space-x-8 mb-8 justify-center">
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          New
        </button>
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          Featured
        </button>
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          Best Seller
        </button>
      </div>
      <div id="product" className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white p-4">
            <div className="relative w-full h-80 mb-4">
              <Image
                cloudName="dfxlmzrj7"
                publicId={`v1724896335/${product.images}`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 p-2 bg-white">
                <button>
                  <FaRegHeart size={24} />
                </button>
                <button>
                  <FaEye size={24} />
                </button>
                <button
                  onClick={() => handleAddToCart(product, index)}
                  className={`${
                    clicked === index ? "text-red-800" : "text-gray-700"
                  }`}
                >
                  <FaShoppingCart size={24} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-semibold">
                    {quantities[index]}
                  </span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <Link
              to={`/product/${index}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
