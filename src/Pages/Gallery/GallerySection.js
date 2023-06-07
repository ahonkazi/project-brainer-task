import React, { useState } from 'react';
import img22 from '../../images/Gallery/2.2.png';
import img32 from '../../images/Gallery/3.2.png';
import img33 from '../../images/Gallery/3.3.png';
import img42 from '../../images/Gallery/4.2.png';
import gallery from './gallery.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GallerySection = () => {

    const [show, setShow] = useState(false);
    const [img, setImg] = useState('');

    const handleShow = (e) => {
        setShow(true);
        const imageSrc = e.target.src;
        setImg(imageSrc);
    };

    return (
        <div className="row gallery-container">
            <div className="col-md-8">
                <img onClick={handleShow} className='img32' src={img32} alt="" />
                <img onClick={handleShow} className='img32' src={img32} alt="" />
                <img onClick={handleShow} className='img32' src={img32} alt="" />
                <img onClick={handleShow} className='img22' src={img22} alt="" />
                <img onClick={handleShow} className='img42' src={img42} alt="" />
                <img onClick={handleShow} className='img22' src={img22} alt="" />
                <img onClick={handleShow} className='img32' src={img32} alt="" />
                <img onClick={handleShow} className='img32' src={img32} alt="" />
                <img onClick={handleShow} className='img32' src={img32} alt="" />
            </div>
            <div className="col-md-4">
                <img onClick={handleShow} className='img33' src={img33} alt="" />
                <img onClick={handleShow} className='img33' src={img33} alt="" />
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Image
            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <img style={{width:'100%'}} src={img} alt="" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default GallerySection;