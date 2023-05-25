import React, { useState } from "react";
import "./ProductPageGallery.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";

export default function ProductPageGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpenModal = (imageUrl) => {
    setSelectedImg(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImg("");
  };

  return (
    <div className="product-gallery">
      <Carousel
        showArrows={true}
        renderArrowPrev={() => true}
        renderArrowNext={() => true}
        preventMovementUntilSwipeScrollTolerance={true}
        emulateTouc={true}
        swipeable={true}
        infiniteLoop={true}
        transitionTime={550}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {images &&
          images.map((img, index) => (
            <div onClick={() => handleOpenModal(img)} key={index}>
              <img src={img} alt="تصویر محصول" />
            </div>
          ))}
      </Carousel>

      <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
        <button onClick={handleCloseModal}>بستن</button>
        <img src={selectedImg} alt="" />
      </Modal>
    </div>
  );
}
