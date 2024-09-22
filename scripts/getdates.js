// Select the DOM elements for output  
const currentyear = document.querySelector("#currentyear");  
const lastModified = document.querySelector("#lastModified");  

// Use the Date object  
const today = new Date();  

// Set the current year  
currentyear.innerHTML = today.getFullYear();  

// Function to format date and time as "MM/DD/YYYY HH:MM:SS"  
function formatDate(date) {  
    const month = String(date.getMonth() + 1).padStart(2, '0');   
    const day = String(date.getDate()).padStart(2, '0');   
    const year = date.getFullYear();   
    const hours = String(date.getHours()).padStart(2, '0');   
    const minutes = String(date.getMinutes()).padStart(2, '0');   
    const seconds = String(date.getSeconds()).padStart(2, '0');   

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;   
}  

// Set last modified date and time  
lastModified.innerHTML = `Last Modified: <span id="lastModified">${formatDate(today)}</span>`;