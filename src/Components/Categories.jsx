import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Categories({ wishlist, setWishlist, cart, setCart }) {
  const [items, setItems] = useState([]);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < 464) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    window.addEventListener("resize", updateDeviceType);
    updateDeviceType(); // Initial check
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  const addToWishlist = (item) => {
    if (!wishlist.find((wishItem) => wishItem.id === item.id)) {
      setWishlist((prev) => [...prev, item]);
    } else {
      alert(`${item.title} is already in your wishlist.`);
    }
  };

  const addToCart = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
      setCart((prev) => [...prev, item]);
    } else {
      alert(`${item.title} is already in your cart.`);
    }
  };

  const images = [
    "https://images.pexels.com/photos/12730022/pexels-photo-12730022.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8784914/pexels-photo-8784914.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/618701/pexels-photo-618701.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div>
      <div className="bg-gray-800 p-2">
        <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-[120px] flex-wrap">
          <Link
            className="text-gray-200 text-sm sm:text-lg font-semibold no-underline hover:text-gray-400 transition-colors duration-300 py-2"
            to="/clothes"
          >
            Clothes
          </Link>
          <Link
            className="text-gray-200 text-sm sm:text-lg font-semibold no-underline hover:text-gray-400 transition-colors duration-300 py-2"
            to="/grocery"
          >
            Grocery
          </Link>
          <Link
            className="text-gray-200 text-sm sm:text-lg font-semibold no-underline hover:text-gray-400 transition-colors duration-300 py-2"
            to="/accessories"
          >
            Accessories
          </Link>
          <Link
            className="text-gray-200 text-sm sm:text-lg font-semibold no-underline hover:text-gray-400 transition-colors duration-300 py-2"
            to="/shoes"
          >
            Shoes
          </Link>
          <Link
            className="text-gray-200 text-sm sm:text-lg font-semibold no-underline hover:text-gray-400 transition-colors duration-300 py-2"
            to="/child"
          >
            Child Section
          </Link>
        </div>
      </div>

      {/* Carousel with scrollbar */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={deviceType !== "mobile"} 
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((itm, i) => (
          <img key={i} src={itm} alt={`Category ${i}`} className="w-full h-96 object-scale-down " />
        ))}
      </Carousel>

      {/* categories */}
      <div className="bg-gray-300 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id} className="block">
            <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-[230px] w-full object-cover mb-4 rounded-lg"
              />
              <div className="text-lg md:text-xl font-bold">
                {item.title.slice(0, 35)}...
              </div>
              <div className="text-md md:text-lg text-gray-700">
                ₹{(item.price * 50).toLocaleString()}
              </div>
              <div className="flex mt-2">
                <button
                  onClick={() => addToWishlist(item)}
                  className="mr-3 bg-slate-800 text-white rounded px-2 py-1 text-sm"
                >
                  Wishlist
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-slate-800 text-white rounded px-2 py-1 text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
