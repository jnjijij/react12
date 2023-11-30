// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cssauthor.com/pinball-responsive-grid-style-blog-psd/');
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(response.data, 'text/html');
        const imageElements = htmlDocument.querySelectorAll('.blog-post img');
        const imageSrcArray = Array.from(imageElements).map((img) => img.src);
        setImages(imageSrcArray);
      } catch (error) {
        console.error('Error fetching images:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Featured Images</h2>
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className="grid-item" />
        ))}
      </div>
    </div>
  );
};

export default Home;
