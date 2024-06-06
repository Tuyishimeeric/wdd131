document.addEventListener("DOMContentLoaded", function() {

    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = "Last modified: " + formattedDate;

    displayTemples("Home");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Nigeria Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Utah Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "Payson Utah Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Guam Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Perú Temple"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Mexico Temple"
    }
];

function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function filterTemples(criteria) {
    switch (criteria) {
        case "Old":
            return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
        case "New":
            return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
        case "Large":
            return temples.filter(temple => temple.area > 90000);
        case "Small":
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

function displayTemples(criteria) {
    const filteredTemples = filterTemples(criteria);

    const templeContainer = document.getElementById("templeContainer");
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.alt}" class="temple-image" loading="lazy">
            <div class="temple-details">
                <h2 class="temple-name">${temple.templeName}</h2>
                <p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
                <p class="temple-dedicated"><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p class="temple-area"><strong>Area:</strong> ${temple.area.toLocaleString()} square feet</p>
            </div>
        `;

        templeContainer.appendChild(templeCard);
    });
}

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const criteria = event.target.innerText; 
        displayTemples(criteria);
    });
});
