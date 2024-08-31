import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/productdata";
import { Image } from "cloudinary-react";
import { FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-6 pb-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex items-center justify-center">
          <Image
            cloudName="dfxlmzrj7"
            publicId={`v1724896335/${product.images}`}
            alt={product.title}
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-8 mt-52">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <FaRegHeart size={24} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FaEye size={24} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FaShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
