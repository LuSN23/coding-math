window.onload = function() {
    var canvas = document. getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    for(var angle = 0; angle < Math.PI * 2; angle += .01) {
        console.log(Math.sin(angle));
    }
};