import React from 'react';
import './Parallax.css'; // Parallax için gereken CSS stilleri

const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax"></div>
      <div className="content">
        {/* İçerik */}
        <h1>Parallax Effect</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default Parallax;
