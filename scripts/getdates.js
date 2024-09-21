// Select the DOM elements for output  
const currentyear = document.querySelector("#currentyear");  
const lastModified = document.querySelector("#lastModified");  

// Use the Date object  
const today = new Date();  

// Set the current year  
currentyear.innerHTML = today.getFullYear();  

// Set last modified date and time  
lastModified.innerHTML = `Last Modified: <span id="lastModified">${today.toLocaleString("en-US", { dateStyle: "short", timeStyle: "medium" })}</span>`;