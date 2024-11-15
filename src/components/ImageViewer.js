import React, { useState, useEffect } from 'react';
import '../css/ImageViewer.css'; // Adjust the path as necessary
import img1 from '../images/Screenshot 2024-11-15 190123.png'
import img4 from '../images/gd.jpg'
import img3 from '../images/alumni.jpg'
import img2 from '../images/UIux1.jpg'
import img5 from '../images/galllery.png'
import img6 from '../images/Screenshot 2024-11-15 190309.png'
import img7 from '../images/gd1.jpg'
import img8 from '../images/alumni1.jpg'
import img9 from '../images/gd2.jpg'



const ImageViewer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchedImages = [
      { id: 1, src: img1, title: '1' },
      { id: 2, src: img2, title: '2' },
      { id: 3, src: img3, title: '3' },
      { id: 4, src: img4, title: '4' },
      { id: 5, src: img5, title: '5' },
      { id: 6, src: img6, title: '6' },
      { id: 7, src: img7, title: '7' },
      { id: 8, src: img8, title: '8' },
      { id: 9, src: img9, title: '9' },

    ];
    setImages(fetchedImages);
  }, []);

  return (
    <section className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">
          <span className="gallery">GALLERY</span>
        </h1>
      </header>
      <div className="container">
        {images.map(image => (
          <figure key={image.id}>
            <img src={image.src} alt={image.title} />
            {/* <figcaption><a href="#">{image.title}</a></figcaption> */}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ImageViewer;
