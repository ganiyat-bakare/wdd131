
// Function to generate recipe cards  
function loadFeaturedRecipes() {  
    const recipeContainer = document.querySelector('.recipe-container');  
    featuredRecipes.forEach(recipe => {  
        const recipeCard = `  
            <div class="recipe-card">  
                <img src="${recipe.image}" alt="${recipe.title}">  
                <h3 class="recipe-name">${recipe.title}</h3>  
                <p class="recipe-cuisine">${recipe.cuisine}</p>  
                <a href="${recipe.main-course}" class="view-recipe">View Recipe</a>  
            </div>  
        `;  
        recipeContainer.innerHTML += recipeCard;  
    });  
}  

// Call the function on load  
window.onload = loadFeaturedRecipes;  


const recipes = [  
    { name: "Avocado & Coconut Cream Smoothie", type: "beverage", ingredients: "Avocado, Vanilla extract, Greek yogurt, Coconut cream", instructions: "Blend all ingredients until smooth.", imageUrl: "images/bev1.webp" },  
    { name: "Pina Colada Smoothie", type: "beverage", ingredients: "Pineapple chunks, Mango chunks, Coconut milk, Honey, Banana", instructions: "Blend all ingredients until thick and creamy.", imageUrl: "images/bev2.webp" },  
    { name: "Bruschetta", type: "appetizer", ingredients: "Extra-virgin olive oil, Garlic, Tomatoes, Salt, Basil, Balsamic vinegar, Crushed red pepper flakes, Baguette", instructions: "Stir-fry garlic. Add tomato. Add basil. Add vinegar. Add pepper flakes. Let it marinate for 30 minutes. Spread on bread brushed with oil. Toast bread and serve.", imageUrl: "images/appet1.webp" },  
    { name: "Spaghetti Carbonara", type: "main-course", ingredients: "Spaghetti, Eggs, Parmesan, Pancetta, Black Pepper, Olive oil", instructions: "Cook spaghetti. Beat eggs and mix with cheese. Fry pancetta. Combine all.", imageUrl: "images/course1.webp" },  
    { name: "Beef Stroganoff with Ground Beef", type: "main-course", ingredients: "Butter, Mushrooms, Onion, Ground beef, Flour, Garlic powder, Salt, Ground paprika, Condensed cream of mushroom soup, Sour cream, Worcestershire sauce", instructions: "Melt butter in a large skillet. Add mushrooms and onions and sauté. Add beef, cook and stir. Sprinkle flour, garlic, salt, paprika, and pepper. Add soup, sour cream, Worcestershire sauce, and cook for 7 minutes.", imageUrl: "images/course2.webp" },  
    { name: "Chocolate Cake", type: "dessert", ingredients: "Flour, Sugar, Cocoa powder, Baking powder, Eggs, Milk, Oil, Vanilla extract", instructions: "Mix all ingredients, pour into a pan, and bake at 350°F for 30 minutes.", imageUrl: "images/choc.webp" },
    { name: "Green Bean and Chicken Stir Fry", type: "main-course", ingredients: "Butter, Boneless skinless chicken, Green beans, Black pepper, Salt, Red pepper flakes, Onion powder, Garlic, Lemon, Soy sauce, honey ", instructions: "Mix all the wet ingrdients in a bowl and add cornstarch. Heat butter, add green bean season it. Saute garlic in mixture and stir fry.", imageUrl: "images/main.webp" },  
    { name: "Chicken & Strawberry Salad", type: "main-course", ingredients: "Strawberries, Spinach, Onions, Carrot, Chicken breast", instructions: "Grill the chicken breast under a medium/high heat until cooked (approx 15-20 mins), then slice. Place the spinach on a plate then layer over with the rest of the ingredients", imageUrl: "images/chic.webp" },  
    { name: "Stuffed Mushrooms", type: "appetizer", ingredients: "Mushrooms, Pine nuts and panko bread crumbs, Dried tomato and pecorino cheese, Parsley, Garlic, Olive oil, Salt and pepper.", instructions: "Clean the mushrooms. Stirfry it with grated cheese, tomatoes, pasrley, bread crumbs, garlic, pine nuts, salt and a few grinds of black pepper.", imageUrl: "images/appet3.webp" },  
    { name: "Sushi Rolls", type: "main-course", ingredients: "6 Sushi seaweed sheets, 1 batch Prepared sushi rice, 1/2 lb Sashimi-grade raw salmon, 4 oz cream cheese, 1 avocado, Soy sauce.", instructions: "Place the seaweed on a bamboo mat, cover with an even layer of sushi rice and smoothen. Layer salmon, cream cheese, and avocado on the rice and roll it up. Slice with knife and eat it with soy sauce.", imageUrl: "images/sushi-rolls.webp" },  

]; 

// Function to populate form dropdown recipe
function populateRecipeSelect() {
    const recipeSelect = document.getElementById('recipe');

    recipes.forEach(recipe=> {
        const option = document.createElement('option');
        option.value = recipe.name;
        option.textContent = `${recipe.name}`;
        recipeSelect.appendChild(option);
    });
}


// Function to handle form submission
function handleFormSubmit(event) {  
    event.preventDefault(); 
    
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', handleFormSubmit);

    const userRating = document.querySelector('input[name="rating"]:checked').value;  
    const recipeSelect = document.getElementById('recipe');  
    const selectedRecipe = recipes.find(recipe => recipe.name === recipeSelect.value);  
    const reviewText = document.getElementById('write').value;  
    const userName = document.getElementById('username').value;  

    if (!selectedRecipe) {  
        console.error("Selected recipe not found!");  
        return;  
    }  

    const queryString = new URLSearchParams({  
        recipeId: selectedRecipe.name,  
        rating: userRating,  
        review: reviewText,  
        fullname: userName  
    }).toString();  

    let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0; 

    localStorage.setItem('reviewCount', reviewCount + 1);  

    window.location.href = `review.html?${queryString}`;  
}

// Set the current year and last modified date  
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text

 // Hamburger menu functionality
 const mainnav = document.querySelector('.navigation');
 const hambutton = document.querySelector('#menu');

 hambutton.addEventListener('click', () => {
     mainnav.classList.toggle('open');
     hambutton.classList.toggle('open');
 }); 


document.addEventListener('DOMContentLoaded', () => { 
    populateRecipeSelect();

    const recipesContainer = document.getElementById('recipesContainer');  
    const loadRecipesButton = document.getElementById('loadRecipesButton');  
    const categoryFilter = document.getElementById('categoryFilter');  


    // Function to display recipes based on selected filter  
    const displayRecipes = (selectedFilter = "all") => {  
        recipesContainer.innerHTML = "";  // Clear previous recipes  
        let filteredRecipes = selectedFilter === "all" ? recipes : recipes.filter(recipe => recipe.type === selectedFilter);  

        filteredRecipes.forEach(recipe => {  
            const recipeCard = document.createElement('div');  
            recipeCard.classList.add('recipe-card');  

            recipeCard.innerHTML = `  
                <h2>${recipe.name}</h2>  
                <img src="${recipe.imageUrl}" alt="${recipe.name}">  
                <button class="toggle-button">Show Recipe</button>  
                <div class="recipe-details" style="display: none;">  
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>  
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>  
                </div>  
            `;  

            recipesContainer.appendChild(recipeCard);  
            
            // Toggle recipe details  
            recipeCard.querySelector('.toggle-button').addEventListener('click', () => {  
                const details = recipeCard.querySelector('.recipe-details');  
                const isVisible = details.style.display === 'block';  
                details.style.display = isVisible ? 'none' : 'block';  
                recipeCard.querySelector('.toggle-button').textContent = isVisible ? 'Show Recipe' : 'Hide Recipe';  
            });  
        });  
    };  

    // Load recipes on button click  
    if (loadRecipesButton) {  
        loadRecipesButton.addEventListener('click', () => {  
            const selectedFilter = categoryFilter.value;  
            displayRecipes(selectedFilter);  
        });  
    }  

    // Track page visits  
    let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount'), 10) : 0;  
    visitCount++;  
    localStorage.setItem('visitCount', visitCount);  
    console.log(`Page visited ${visitCount} times`); 

    // Initial load of recipes  
    displayRecipes();

    // Load categories dynamically  
    const filterCategories = () => {  
        const uniqueTypes = [...new Set(recipes.map(recipe => recipe.type))];  
        uniqueTypes.forEach(type => {  
            const option = document.createElement('option');  
            option.value = type;  
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);  
            categoryFilter.appendChild(option);  
        });  
    };  

     // Populate filter dropdown 
    filterCategories();
});
