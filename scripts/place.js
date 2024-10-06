document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.innerHTML = document.lastModified;

    // Static weather data
    const temperature = 28;
    const condition = "Partly cloudy";
    const windSpeed = 10;

    // Display weather data
    document.getElementById("temp").textContent = temperature + "°C";
    document.getElementById("condition").textContent = condition;
    document.getElementById("wind").textContent = windSpeed + "km/h";

    // Calculate wind chill if conditions are met
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windChill !== null ? windChill + "°C" : "N/A";
});

// Function to calculate wind chill according to given conditions
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)))
    }
    else
    {
        return null;
    }
} 