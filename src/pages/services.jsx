function Services() {
  return (
    <div
      id="service"
      className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 justify center gap-4"
    >
      {/* Free Shipping */}
      <div className="flex items-center p-4">
        <img
          src="assets/images/shipped.png"
          alt="Free Shipping Icon"
          className="mr-3 h-10 w-10"
        />
        <div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-gray-600">Orders $50 or more</p>
        </div>
      </div>

      {/* Free Returns */}
      <div className="flex items-center p-4">
        <img
          src="assets/images/product-return.png"
          alt="Free Returns Icon"
          className="mr-3 h-10 w-10"
        />
        <div>
          <h3 className="text-lg font-semibold">Free Returns</h3>
          <p className="text-gray-600">Within 30 days</p>
        </div>
      </div>

      {/* Get 20% Off */}
      <div className="flex items-center p-4">
        <img
          src="assets/images/coupon.png"
          alt="Get 20% Off Icon"
          className="mr-3 h-10 w-10"
        />
        <div>
          <h3 className="text-lg font-semibold">Get 20% Off 1 Item</h3>
          <p className="text-gray-600">When you sign up</p>
        </div>
      </div>

      {/* We Support */}
      <div className="flex items-center p-4">
        <img
          src="assets/images/customer-support.png"
          alt="We Support Icon"
          className="mr-3 h-10 w-10"
        />
        <div>
          <h3 className="text-lg font-semibold">We Support</h3>
          <p className="text-gray-600">24/7 amazing services</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
