
const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    
];


function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');

    
    const placeholderOption = document.createElement('option');
    placeholderOption.value = "";
    placeholderOption.textContent = "Select a Product ...";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    productNameSelect.appendChild(placeholderOption);

  
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}


function handleSubmit(event) {
    event.preventDefault();
    
    
    let reviewsCompleted = localStorage.getItem('reviewsCompleted');
    if (!reviewsCompleted) {
        reviewsCompleted = 0;
    }
    reviewsCompleted++;
    localStorage.setItem('reviewsCompleted', reviewsCompleted);


    window.location.href = 'review.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

    
    populateProductOptions();
});
