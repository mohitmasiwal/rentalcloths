import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ wishlistCount, cartCount }) => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div>
          <Link
            to="/home"
            className="text-3xl font-bold text-white tracking-wide hover:text-gray-400 transition-colors duration-200"
          >
            Rentify
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Search Bar (hidden on mobile) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 ml-4 w-full md:w-96 h-8"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={handleChange}
            className="bg-gray-800 w-full h-8 px-4 text-gray-200 rounded-full outline-none border-none placeholder-gray-400"
          />
          <button
            className="bg-indigo-600 text-white py-1 px-4 ml-2 h-8 rounded-full hover:bg-indigo-700 transition-all duration-200"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Right-side options (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/home"
          >
            Home
          </Link>

          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/shop"
          >
            Shop
          </Link>

          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/signup"
          >
            Sign Up
          </Link>

          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            to="/wishlist"
          >
            <i className="fa-regular fa-heart mr-1"></i>
            Wishlist
            <sup className="bg-red-500 rounded-xl text-white w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </sup>
          </Link>

          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            to="/cart"
          >
            <i className="fa-solid fa-cart-shopping mr-1"></i>
            Cart
            <sup className="bg-red-500 rounded-xl text-white w-5 h-5 flex items-center justify-center">
              {cartCount}
            </sup>
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              className="nav-link"
              onClick={toggleMenu}
            >
              <i className="fa-regular fa-user text-2xl"></i>
            </button>
            {isMenuOpen && (
              <ul className="absolute right-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                <li>
                  <Link className="dropdown-item block px-4 py-2" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <hr className="border-gray-300" />
                </li>
                <li>
                  <Link className="dropdown-item block px-4 py-2" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <hr className="border-gray-300" />
                </li>
                <li>
                  <button
                    className="dropdown-item block px-4 py-2 text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible on mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white px-4 py-3">
          <Link className="block mb-2" to="/home">
            Home
          </Link>
          <Link className="block mb-2" to="/shop">
            Shop
          </Link>
          <Link className="block mb-2" to="/login">
            Login
          </Link>
          <Link className="block mb-2" to="/signup">
            Sign Up
          </Link>
          <Link className="  mb-2 flex items-center" to="/wishlist">
            <i className="fa-regular fa-heart mr-1"></i> Wishlist{" "}
            <span className="ml-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </span>
          </Link>
          <Link className=" mb-2 flex items-center" to="/cart">
            <i className="fa-solid fa-cart-shopping mr-1"></i> Cart{" "}
            <span className="ml-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
