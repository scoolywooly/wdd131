
let foods = ["Stroganoff", "Fruit Salad", "Sanoran Dogs", "Pizza"];
// // forEach method

//foods.forEach(function (food, index) {
// let listItem = document.createElement("li");
// listItem.textContent = food;
// document.querySelector("#favorite-foods").appendChild(listItem);
//});


//map


// const foodMap = foods.map(food => {
//     let listItem = document.createElement("li");
//     listItem.textContent = food;
//     document.querySelector("#favorite-foods").appendChild(listItem);
// });
// document.getElementById("#favorite-foods").innerHTML = foodMap.join("");



// ACTIVITY 3


//  return food string
function addFoodItemFromArray(foodArray, htmlID) {
    const foodMap = foodArray.map(food => "<li>" + food + "</li>");
    document.getElementById(htmlID).innerHTML = foodMap.join("");
}

// return html string
let placeArray = [{ place: "West Plains, MO", length: "19 Years" }, { place: "Rexburg, ID", length: "14 months" }];
function addPlace(placeArray, htmlID) {
    let tagString = "";
    placeArray.forEach(function (location) {
        tagString += "<dt>" + location.place + "</dt>\n";

    });
    return tagString;
}

// Callback function
function higherOrderFunction(callback, list) {
    return list.map(callback);
}


addFoodItemFromArray(["Cake", "Ice Cream", "Salad"], "#favorite-foods");
