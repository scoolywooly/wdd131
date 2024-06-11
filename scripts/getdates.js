
// load this code right after the HTML is finished parsing.
document.addEventListener("DOMContentLoaded", function () {

    // get the full year and replace the html id "currentyear" with the actual year.

    let d = new Date();
    let year = d.getFullYear();

    let yearString = year.toString();
    let copyrightYear = "© " + yearString + " ";

    document.getElementById("currentyear").innerHTML = copyrightYear;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
});