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

    // Navigation menu functionality
    document.getElementById('home').addEventListener('click', () => {
      createTemplateCard(temples);
    });

    document.getElementById('old').addEventListener('click', () => {
      createTemplateCard(temples.filter(temple => {
        const year = new Date(temple.dedicated.split(',')[0]).getFullYear();
        return year < 1900;
      }));
    });

    document.getElementById('new').addEventListener('click', () => {
      createTemplateCard(temples.filter(temple => {
        const year = new Date(temple.dedicated.split(',')[0]).getFullYear();
        return year > 2000
      }));
    });

    document.getElementById('large').addEventListener('click', () => {
      createTemplateCard(temples.filter(temple => temple.area > 90000));
    });

    document.getElementById('small').addEventListener('click', () => {
      createTemplateCard(temples.filter(temple => temple.area <10000));
    });
});

// Temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Sandy Springs, Georgia, United States",
      dedicated: "1983, June, 1",
      area: 34500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
    },
    {
      templeName: "Arequipa Peru",
      location: "Arequipa, Peru",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
    },
    {
      templeName: "Apia Samoa",
      location: "Apia, Pesega, Samoa",
      dedicated: "1983, August, 5",
      area: 18691,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
  ];

function createTemplateCard(filteredTemplates) {
  // clear existing cards
  document.querySelector(".gallery").innerHTML = "";
  filteredTemplates.forEach(temple => {
    let card = document.createElement("section");
    // Add class the card
    card.classList.add("temple-card");

    let name = document.createElement("h3");
    // Add class to the temple name
    name.classList.add("temple-name");

    let location = document.createElement("p");
    // Add class to the temple location
    location.classList.add("temple-location");

    let dedication = document.createElement("p");
    // Add class to the date of dedication
    dedication.classList.add("temple-dedication");

    let area = document.createElement("p");
    // Add class to the temple area
    area.classList.add("temple-area");

    let img = document.createElement("img");
    // Add class to the temple image
    img.classList.add("temple-image");
    
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">size:</span> ${temple.area} sq ft`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    
    // Append elements in the order
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    document.querySelector(".gallery").appendChild(card);
  })
}