const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
    { id: "fc-1888", name: "power laces", averagerating: 4.7},
    { id: "fc-1888", name: "time circuits", averagerating: 3.5},
    { id: "fc-1888", name: "low voltage reactor", averagerating: 3.9},
    { id: "fc-1888", name: "warp equalizer", averagerating: 5.0}
];

function populateProductSelect() {
    const productSelect = document.getElementById('product');

    products.forEach(product=> {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (Average Rating: ${product.averagerating} ⭐)`;
        productSelect.appendChild(option);
    });
}

function handleFormSubmit(event) {  
    event.preventDefault();  

    const userRating = document.querySelector('input[name="rating"]:checked').value;  
    const productSelect = document.getElementById('product');  
    const selectedProduct = products.find(product => product.id === productSelect.value);  
    const installationDate = document.getElementById('date').value;  
    const reviewText = document.getElementById('write').value;  
    const userName = document.getElementById('username').value;  

    const queryString = new URLSearchParams({  
        productId: selectedProduct.id,  
        rating: userRating,  
        installationDate,  
        review: reviewText,  
        fullname: userName  
    }).toString();  

    let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;  

    localStorage.setItem('reviewCount', reviewCount + 1);  

    window.location.href = `review.html?${queryString}`;  
}

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text

    
document.addEventListener('DOMContentLoaded', function() {
    populateProductSelect();

    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});