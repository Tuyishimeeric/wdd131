

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function displayProducts() {
    const productContainer = document.getElementById("productContainer");


    const products = [
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 1",
            price: 399.99,
            imageUrl: "images/product1.jpg",
            description: "Description of Product 1"
        },
        {
            name: "Product 2",
            price: 499.99,
            imageUrl: "images/product2.jpg",
            description: "Description of Product 2"
        },
        {
            name: "Product 3",
            price: 99.99,
            imageUrl: "images/product3.jpg",
            description: "Description of Product 2"
        },
    ];


    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
