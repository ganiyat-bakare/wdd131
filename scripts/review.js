const currentYear = new Date().getFullYear();  
document.getElementById("currentyear").textContent = ` ${currentYear}`;  
document.getElementById("lastModified").innerHTML = document.lastModified;  

const products = [  
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5},  
    { id: "fc-1889", name: "power laces", averagerating: 4.7},  
    { id: "fc-1890", name: "time circuits", averagerating: 3.5},  
    { id: "fc-1891", name: "low voltage reactor", averagerating: 3.9},  
    { id: "fc-1892", name: "warp equalizer", averagerating: 5.0}  
];  

document.addEventListener('DOMContentLoaded', function() {  
    const params = new URLSearchParams(window.location.search);  
    const productId = params.get('productId');  
    const rating = params.get('rating');  
    const installationDate = params.get('installationDate');  
    const review = params.get('review');  
    const fullname = params.get('fullname');  

    const selectedProduct = products.find(product => product.id === productId);  

    const confirmationMessage = `Thank you, ${fullname || 'Guest'}, for reviewing ${selectedProduct ? selectedProduct.name : 'this product'} and giving it ${rating} star(s)! Your installation date was ${installationDate}.`;  
    const reviewDetails = review ? ` Your written review: "${review}"` : "";  

    document.querySelector("fieldset h2").textContent = "Thank you for your feedback";  
    document.querySelector("fieldset p").textContent = confirmationMessage + reviewDetails;  

    const reviewCount = localStorage.getItem('reviewCount') || 0;   
    document.getElementById('reviewCount').textContent = `Total Reviews Submitted: ${reviewCount}`;  
});