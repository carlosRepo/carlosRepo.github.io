"strict mode";
var bgColorHsl = 0;
let bodyStyle = document.body.style;


function changeBgColor() {

    bodyStyle.backgroundColor = "hsl(" + bgColorHsl + ",27%, 95%)";
    bgColorHsl = bgColorHsl + 4;
    if (bgColorHsl >= 360) {
        bgColorHsl = 0;
    }
}


window.setInterval(function() {
    changeBgColor();

}, 200);