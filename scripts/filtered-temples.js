// load this code right after the HTML is finished parsing.
document.addEventListener("DOMContentLoaded", function () {

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
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
            templeName: "St. Louis Missouri",
            location: "St. Louis, Missouri, United States",
            dedicated: "1997, June, 1",
            area: 58749,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/400x250/st-louis-temple-lds-903363-wallpaper.jpg"
        },
        {
            templeName: "Fukuoka Japan",
            location: "Fukupka, Japan",
            dedicated: "2000, June, 11",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
        },
        {
            templeName: "Fresno California Temple",
            location: "Fresno, California, United States",
            dedicated: "2000, April, 9",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fresno-california/400x250/fresno-temple-lds-935867-wallpaper.jpg"
        }

    ];



    // create a card each ittereation of the loop

    function makeArray(condition) {


        if (condition == "Home") {
            temples.forEach(function (temple, index) {
                const card = document.createElement("div");
                card.className = "card";
                const heading = document.createElement("h3");
                heading.textContent = temple.templeName;

                const data = document.createElement("div");
                data.className = "data-div";

                const location = document.createElement("p");
                location.className = "data-p";
                location.textContent = `Location: ${temple.location}`;

                const dedication = document.createElement("p");
                dedication.className = "data-p";
                dedication.textContent = `Dedication: ${temple.dedicated}`;

                const size = document.createElement("p");
                size.className = "data-p";
                size.textContent = `Size: ${temple.area}`;


                const templePicture = document.createElement("img");
                templePicture.className = "temple-pic";
                templePicture.src = temple.imageUrl;
                templePicture.alt = `Picture of the ${temple.name}`;
                templePicture.loading = "lazy";


                data.appendChild(location);
                data.appendChild(dedication);
                data.appendChild(size);

                card.appendChild(heading);
                card.appendChild(data);
                card.appendChild(templePicture);

                card.id = `temple${index}`;

                const mainTag = document.querySelector("main");
                mainTag.appendChild(card);


            });

            // OLD
        } else if (condition == "Old") {

            oldTemples = temples.filter(temple => temple.dedicated.contains("1900"));
        }

    }



    makeArray("Home");


    // get the full year and replace the html id "currentyear" with the actual year.

    let d = new Date();
    let year = d.getFullYear();

    let yearString = year.toString();
    let copyrightYear = "© " + yearString + " ";

    document.getElementById("currentyear").innerHTML = copyrightYear;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

    const hamMenu = document.querySelector(".ham-menu");
    const hamBtn = document.querySelector("#ham-icon");

    hamBtn.addEventListener("click", () => {
        if (hamMenu) {
            hamMenu.classList.toggle("active");
            if (hamMenu.classList.contains("active")) {
                hamBtn.textContent = "✕";
            } else {
                hamBtn.textContent = "☰";
            }
        }
    })
});

