import React from 'react';
import GallerySection from './GallerySection';

const Gallery = () => {
    return (
        <div className="container-fluid">
            <div className="row getInvolve-hero-box">
                <h1>Gallery</h1>
            </div>
            <div style={{margin:'30px auto'}} className="container">
                <GallerySection></GallerySection>
            </div>
        </div>
    );
};

export default Gallery;