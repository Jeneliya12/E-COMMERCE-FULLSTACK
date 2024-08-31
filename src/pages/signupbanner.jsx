function SignUpBanner() {
  return (
    <>
      <div
        id="banner"
        className="relative py-24 px-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('assets/images/banner.jpg')`,
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sign up for email & get 25% off
          </h2>
          <p className="text-lg text-white mb-6">
            Subscribe to get information about products and coupons
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2  border-none text-gray-800"
            />
            <button className="bg-orange  text-gray-800 font-semibold py-2 px-4">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpBanner;
