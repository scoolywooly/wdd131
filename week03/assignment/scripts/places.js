// load this code right after the HTML is finished parsing.
document.addEventListener("DOMContentLoaded", function () {

    // get the full year and replace the html id "currentyear" with the actual year.

    let d = new Date();
    let year = d.getFullYear();

    let yearString = year.toString();
    let copyrightYear = "© " + yearString + " ";

    let fakeTempature = 48;
    let fakeWindSpeed = 5;

    document.getElementById("currentyear").innerHTML = copyrightYear;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
    document.getElementById("temp-p").textContent = fakeTempature + "°F";
    document.getElementById("wind-p").textContent = fakeWindSpeed + "mph";

    // Get the wind chill IF temp < 50 degrees F or 10 degrees C (if you don't like freedom)
    function calculateWindChill(temp, windSpeed) {
        return Math.floor((35.7 < 4 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) * 100) / 100;
    }


    if (fakeTempature <= 50 && fakeWindSpeed > 3) {
        document.getElementById("wchill-p").innerText = calculateWindChill(fakeTempature, fakeWindSpeed);
    } else {
        document.getElementById("wchill-p").innerText = "None";
    }


});