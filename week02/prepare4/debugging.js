const pi = 3.14;
console.log("Pi: $pi");

function circleArea(radius) {

    let area = radius * radius * pi;
    return area;
}

area = circleArea(3);
console.log(area);
area = circleArea(5);
console.log(area);
