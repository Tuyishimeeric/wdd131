document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.querySelector('#currentYear').textContent = currentYear;

    // Format and set last modified date
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    document.querySelector('#lastModified').textContent = `Last Modified: ${formattedDate}`;
});
