import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import dogIcon from "../../assets/icons/dog.svg";
import catIcon from "../../assets/icons/cat.svg";
import rabbitIcon from "../../assets/icons/rabbit.svg";
import birdIcon from "../../assets/icons/bird.svg";

const ImageGallery = () => {
  // Array of image names, icons, and links
  const images = [
    { name: "Dog", icon: dogIcon, link: "/petmatching" },
    { name: "Cat", icon: catIcon, link: "/petmatching" },
    { name: "Rabbit", icon: rabbitIcon, link: "/petmatching" },
    { name: "Bird", icon: birdIcon, link: "/petmatching" },
  ];

  return (
    <div className="singleLineImageContainer">
      {/* Map over the images array to generate image elements */}
      {images.map((image, index) => (
        <div
          key={index}
          className="image"
          style={{ backgroundImage: `url(${image.icon})` }}
        >
          <Link to={image.link} className="image-link">
            {/* <div className="icon-name">{image.name}</div> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
