document.addEventListener('DOMContentLoaded', function() {  
    // Set copyright year  
    const currentYear = new Date().getFullYear();  
    document.getElementById("currentyear").textContent = currentYear;  

    // Set last modified date  
    const lastModifiedElement = document.getElementById("lastModified");  
    lastModifiedElement.innerHTML = document.lastModified;  

    // Hamburger menu functionality  
    const mainnav = document.querySelector('.navigation');  
    const hambutton = document.querySelector('#menu');  

    hambutton.addEventListener('click', () => {  
        mainnav.classList.toggle('open');  
        hambutton.classList.toggle('open');  
    });  
});