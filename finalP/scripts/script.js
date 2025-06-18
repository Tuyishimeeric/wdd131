// Elements
const yearSpan = document.getElementById('year');
const lastModified = document.getElementById('lastModified');
const featuredProductsContainer = document.getElementById('featuredProducts');
const allProductsContainer = document.getElementById('allProducts');
const darkModeToggle = document.getElementById('darkModeToggle');

// Set year and last modified
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Dark mode toggle
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  });

  // Initialize mode from localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
}

// Product data
const products = [
  { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'images/earbuds.jpg', featured: true },
  { id: 2, name: 'Smartwatch X2', price: 129.99, image: 'images/smartwatch.jpg', featured: true },
  { id: 3, name: 'Bluetooth Speaker', price: 39.99, image: 'images/speaker.jpg', featured: true },
  { id: 4, name: 'USB-C Charger', price: 19.99, image: 'images/charger.jpg', featured: false },
  { id: 5, name: 'Noise Cancelling Headphones', price: 89.99, image: 'images/headphones.jpg', featured: false },
  { id: 6, name: 'Fitness Tracker', price: 49.99, image: 'images/fitness-tracker.jpg', featured: true },
  { id: 7, name: '4K Action Camera', price: 149.99, image: 'images/action-camera.jpg', featured: false },
  { id: 8, name: 'Mini Drone', price: 99.99, image: 'images/drone.jpg', featured: false },
  { id: 9, name: 'Portable SSD 1TB', price: 79.99, image: 'images/ssd.jpg', featured: false },
  { id: 10, name: 'Wireless Keyboard', price: 29.99, image: 'images/keyboard.jpg', featured: false },
  { id: 11, name: 'Smart Light Bulb', price: 14.99, image: 'images/smart-bulb.jpg', featured: false },
  { id: 12, name: 'Phone Tripod', price: 24.99, image: 'images/tripod.jpg', featured: false }
];

// Render product card
function renderProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
    </div>
  `;
}

// Render featured or all products
function renderProducts(container, filterFn) {
  if (!container) return;
  container.innerHTML = products
    .filter(filterFn)
    .map(renderProductCard)
    .join('');
}

// Initialize featured and all products
renderProducts(featuredProductsContainer, p => p.featured);
renderProducts(allProductsContainer, () => true);

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Save to localStorage
    const formSubmission = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('contactSubmission', JSON.stringify(formSubmission));

    alert(`Thank you, ${name}! We'll respond to your message shortly.`);
    contactForm.reset();
  });
}
