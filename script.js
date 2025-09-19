// Placeholder for future scripts
console.log('Website loaded successfully!');

// Question Popup Functionality
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const popupForm = document.getElementById('popup-form');

openBtn.addEventListener('click', () => {
  popupForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popupForm.style.display = 'none';
});
