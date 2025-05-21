
function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
  } else if (temp <= 50 && windSpeed > 3) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
  } else {
    return 'N/A';
  }
}

function updateWindchill() {
  const temp = 5;
  const windSpeed = 10; 
  
  const windchill = calculateWindChill(temp, windSpeed);
  document.getElementById('windchill').textContent = windchill === 'N/A' ? 'N/A' : windchill.toFixed(1) + '°C';
}

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
window.onload = updateWindchill;
