function AddToCart() {
  return (
    <>
      {/* Quantity and Add to Cart */}
      <div className="flex items-center space-x-4">
        {/* Quantity Controls */}
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="flex items-center justify-center px-4 py-2 border-r border-gray-300 hover:bg-gray-200">
            <img
              src="assets/images/icon-minus.svg"
              alt="Decrease"
              className="w-4 h-4"
            />
          </button>
          <span className="px-4 py-2 text-gray-800">1</span>
          <button className="flex items-center justify-center px-4 py-2 border-l border-gray-300 hover:bg-gray-200">
            <img
              src="assets/images/icon-plus.svg"
              alt="Increase"
              className="w-4 h-4"
            />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="flex items-center bg-orange text-black py-4 px-16 rounded-lg">
          <img src="assets/images/icon-cart.svg" className="pr-4" />
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default AddToCart;
