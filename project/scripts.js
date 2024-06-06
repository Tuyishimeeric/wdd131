document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    const featuredProducts = [
        { id: 1, name: "Product 1", image: "images/product1.jpg", description: "Best Phones" },
        { id: 2, name: "Product 2", image: "images/product2.jpg", description: "Best Laptops" },
        { id: 3, name: "Product 3", image: "images/product3.jpg", description: "Best Headphones" }
    ];

    function displayProducts(containerId, products) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            container.appendChild(productCard);
        });
    }

    if (document.getElementById("showProducts")) {
        document.getElementById("showProducts").addEventListener("click", () => {
            displayProducts("featuredProducts", featuredProducts);
        });
    }

    if (document.getElementById("productList")) {
        displayProducts("productList", featuredProducts);
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const contactDetails = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
            };
            localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
            alert("Thank you for your message!");
            contactForm.reset();
        });
    }
});
