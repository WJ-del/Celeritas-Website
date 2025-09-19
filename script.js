// Log website load
console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const popupForm = document.getElementById('popup-form');

  // Open popup
  openBtn.addEventListener('click', () => {
    popupForm.style.display = 'block';
  });

  // Close popup via close button
  closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  // Close popup if clicked outside the form
  document.addEventListener('click', (e) => {
    if (popupForm.style.display === 'block' && !popupForm.contains(e.target) && e.target !== openBtn) {
      popupForm.style.display = 'none';
    }
  });
});
