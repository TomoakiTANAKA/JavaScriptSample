function init() {
    setInterval("tick()", 1000);
}

function tick() {
    space = document.getElementById("color_space");
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);
    space.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';

}
