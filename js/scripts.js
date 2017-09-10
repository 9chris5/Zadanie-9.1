function getTriangleArea (a, h) {
    if (a>0 && h>0) {
        return (a * h / 2);
    }
    else {
        return ("Nieprawidłowe dane");
    }
}
var triangle1Area = getTriangleArea(10,6);
var triangle2Area = getTriangleArea(5,2);
var triangle3Area = getTriangleArea(12,4);
console.log("Pole 1: " + triangle1Area + ", pole 2: " + triangle2Area + ", pole 3: " + triangle3Area + ".");