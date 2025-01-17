
// JavaScript to toggle product options visibility when clicked
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
  // Ensure the event is only triggered when the product-item itself is clicked, not child elements
  item.addEventListener('click', function(event) {
    // Check if the click was on the product-item itself and not on the child elements like the dropdown
    if (!event.target.closest('.product-options')) {
      item.classList.toggle('active');
    }
  });
});

