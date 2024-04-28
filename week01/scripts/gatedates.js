// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer's first paragraph
document.querySelector('#currentYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the last modified date in the footer's second paragraph
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}`;
