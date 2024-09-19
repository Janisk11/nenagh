import React, { useEffect } from 'react'
import './imageModal.css'

import next from '../../../assets/gallery/next.svg'
import prev from '../../../assets/gallery/prev.svg'
import close from '../../../assets/gallery/close.svg'

// Modal component
const ImageModal = ({ isOpen, images, currentImageIndex, closeModal, nextImage, prevImage, tabTitle, year }) => {
  // Add/Remove prevent-scroll class on modal open/close
  useEffect(() => {
    const html = document.documentElement // Reference to the <html> element
    if (isOpen) {
      html.classList.add('prevent-scroll')
    } else {
      html.classList.remove('prevent-scroll')
    }

    // Cleanup function to remove class on component unmount
    return () => {
      html.classList.remove('prevent-scroll')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          <img src={close} alt="close-icon" />
        </span>
        <div className="modal-header">
          <h2>
            {tabTitle} ~ {year}
          </h2>{' '}
          {/* Display the tab title and year */}
        </div>
          <button className="prev" onClick={prevImage}>
            <img src={prev} alt="prev-arrow" />
          </button>
          <img
            className="modal-image"
            src={images[currentImageIndex].preview}
            alt={images[currentImageIndex].title}
          />
          <button className="next" onClick={nextImage}>
            <img src={next} alt="next-arrow" />
          </button>
      </div>
    </div>
  )
};

export default ImageModal  