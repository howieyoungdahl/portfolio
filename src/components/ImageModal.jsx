// components/ImageModal.jsx
import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Handle ESC key to close modal
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside the image
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`image-modal-overlay ${isOpen ? 'active' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="image-modal-content">
        <img src={imageSrc} alt={imageAlt} />
        <button className="image-modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;