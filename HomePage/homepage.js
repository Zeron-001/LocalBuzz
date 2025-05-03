const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
  
    document.querySelectorAll('.story-thumb img, .post img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        overlay.style.display = 'flex';
      });
    });
  
    // Close when clicking outside the image or pressing ESC
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        overlay.style.display = 'none';
      }
    });