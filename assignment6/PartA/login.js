var d = document.getElementById("CalculatorCard");
function myFunction(x, y) {
    if (x.matches) { // If media query matches
        d.classList.add("col-md-12");
        d.classList.remove("col-md-6");
    } else if (y.matches) {
        d.classList.remove("col-md-12")
        d.classList.add("col-md-8");
    } else {
        d.classList.remove("col-md-8");
        d.classList.add("col-md-6");
    }
}
var x = window.matchMedia("(max-width: 350px)");
var y = window.matchMedia("(max-width: 768px)");
myFunction(x, y);
x.addListener(myFunction);


let paramString = document.URL.split('?')[1];
let queryString = new URLSearchParams(paramString);
for (let pair of queryString.entries()) {
    var x = pair[1];
    document.getElementById('name').value = x;
    console.log(document.getElementById('name').value);
    console.log(x);
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
}

