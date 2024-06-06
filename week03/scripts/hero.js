document.addEventListener("DOMContentLoaded", function() {
    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
        } else {
            return "N/A";
        }
    }

    const temperature = 5;
    const windSpeed = 10; 
    const windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windchill;

    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModifiedDate;
});
