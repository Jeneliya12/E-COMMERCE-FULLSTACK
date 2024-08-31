function Footer() {
  return (
    <footer className="bottom-0 w-full bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand and Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Velvetine</h3>
          <p className="text-gray-400 mb-6">
            Bringing you the latest in women's fashion with a touch of elegance
            and style.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <img
                src="path/to/facebook-icon.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img
                src="path/to/instagram-icon.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img
                src="path/to/twitter-icon.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img
                src="path/to/pinterest-icon.svg"
                alt="Pinterest"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Sale
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to get the latest updates on new
            arrivals, sales, and more!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-orange text-white px-4 py-2 rounded-r-lg hover:bg-orange-dark">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Velvetine. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
