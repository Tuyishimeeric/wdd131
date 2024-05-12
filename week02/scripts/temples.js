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