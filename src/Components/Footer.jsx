import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-gray-200">
      <footer className="p-5 text-center">
        <h1 className="text-white text-lg font-bold cursor-pointer hover:underline">
          Back to top
        </h1>
        <div className="mt-8 grid grid-cols-4 gap-6">
          <div className="space-y-2">
            <h2 className="text-white text-xl font-semibold">Get to Know Us</h2>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Rentify</p>
            <p>Investor Relations</p>
            <p>Rentify Devices</p>
            <p>Rentify Science</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-xl font-semibold">
              Make Money with Us
            </h2>
            <p>Sell products on Rentify</p>
            <p>Sell on Rentify Business</p>
            <p>Sell apps on Rentify</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host a Rentify Hub</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-xl font-semibold">
              Rentify Payment Products
            </h2>
            <p>Rentify Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-xl font-semibold">
              Let Us Help You
            </h2>
            <p>Rentify and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Help</p>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 p-4 text-center text-sm">
        <p className="mb-2">
          Conditions of Use | Privacy Notice | Consumer Health Data Privacy
          Disclosure | Your Ads Privacy Choices
        </p>
        <p>© 1996-2024, Rentify.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
