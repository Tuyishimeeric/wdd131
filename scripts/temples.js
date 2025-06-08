function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
    // Update current year in footer
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Update last modified date in footer
    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = "Last modified: " + formattedDate;
});
// 1. Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-lds-758904-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-2431602-wallpaper.jpg"
  },
  {
    templeName: "Kinshasa DR Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-the-congo/400x250/kinshasa-temple-lds-2410677-wallpaper.jpg"
  }
];

// 2. Temple Rendering Function
const container = document.getElementById("templeContainer");

function displayTemples(templeArray) {
  container.innerHTML = "";

  templeArray.forEach((temple) => {
    const card = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Image of ${temple.templeName}`;
    img.loading = "lazy";

    card.appendChild(h3);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// 3. Filter Functions
function filterOld() {
  const filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) < 1900);
  displayTemples(filtered);
}

function filterNew() {
  const filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) > 2000);
  displayTemples(filtered);
}

function filterLarge() {
  const filtered = temples.filter((t) => t.area > 90000);
  displayTemples(filtered);
}

function filterSmall() {
  const filtered = temples.filter((t) => t.area < 10000);
  displayTemples(filtered);
}

// 4. Event Listeners for Menu
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", filterOld);
document.getElementById("new").addEventListener("click", filterNew);
document.getElementById("large").addEventListener("click", filterLarge);
document.getElementById("small").addEventListener("click", filterSmall);

// 5. Footer Date Support
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// 6. Initial Load
displayTemples(temples);
