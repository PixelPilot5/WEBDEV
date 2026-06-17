const container = document.getElementById('card-container');
const btn = document.getElementById('circle-nav-btn');

btn.addEventListener('click', () => {
  // Define how far you want to scroll on each click (e.g., 200 pixels)
  const scrollAmount = 390;

  container.scrollBy({
    left: scrollAmount,   // Positive number scrolls right; negative scrolls left
    behavior: 'smooth'   // Makes the slide animation fluid
  });
});