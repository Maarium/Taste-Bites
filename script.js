// Show dummy table after login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('orderTable').classList.remove('d-none');
});
 function filterMenu(category) {
    const sections = document.querySelectorAll('.menu-category');
    const buttons = document.querySelectorAll('.btn-outline-primary');

    // Reset active button
    buttons.forEach(btn => btn.classList.remove('active'));

    // Highlight selected button
    event.target.classList.add('active');

    // Show or hide menu categories
    sections.forEach(sec => {
      if (category === 'all') {
        sec.style.display = 'block';
      } else {
        sec.style.display = sec.classList.contains(category) ? 'block' : 'none';
      }
    });
  }