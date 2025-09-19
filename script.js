// Placeholder for future scripts
console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const popupForm = document.getElementById('popup-form');

  // Open popup
  openBtn.addEventListener('click', () => {
    popupForm.style.display = 'block';
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  // Close popup if clicked outside
  document.addEventListener('click', (e) => {
    if (popupForm.style.display === 'block' && !popupForm.contains(e.target) && e.target !== openBtn) {
      popupForm.style.display = 'none';
    }
  });

  // ✅ Handle form submission with Formspree
  popupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop normal submit

    const formData = new FormData(popupForm);
    fetch(popupForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        popupForm.innerHTML = "<p>✅ Thank you! Your question has been sent.</p>";
      } else {
        popupForm.innerHTML = "<p>❌ Oops! Something went wrong. Please try again.</p>";
      }
    }).catch(error => {
      popupForm.innerHTML = "<p>❌ Oops! Something went wrong. Please try again.</p>";
    });
  });
});
