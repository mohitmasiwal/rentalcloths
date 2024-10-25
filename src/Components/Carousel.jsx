
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5, // Number of items to display on super large desktops
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3, // Number of items to display on desktops
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2, // Number of items to display on tablets
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1, // Number of items to display on mobile
        },
      };
      
    const items =  [
        "https://images.pexels.com/photos/12730022/pexels-photo-12730022.jpeg?auto=compress&cs=tinysrgb&w=600", // Lehenga
        "https://images.pexels.com/photos/8784914/pexels-photo-8784914.jpeg?auto=compress&cs=tinysrgb&w=600", // Jewelry
        "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600", // Grocery
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", // Shoes
        "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=600", // Men's Clothes
        "https://images.pexels.com/photos/618701/pexels-photo-618701.jpeg?auto=compress&cs=tinysrgb&w=600", // Women's Clothes
        "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600", // Child Section
        "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=600", // Accessories (Jewelry)
        "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600", // Shoes (Men's)
         
      ];  
  
    return (
      <Carousel
        responsive={responsive}
        infinite={true} // Enable infinite scroll
        autoPlay={true} // Autoplay feature
        autoPlaySpeed={3000} // Speed of the autoplay
        keyBoardControl={true} // Enable keyboard control
        removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on mobile devices
      >
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-200 text-center">
            Item {item}
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default Carousel;
  