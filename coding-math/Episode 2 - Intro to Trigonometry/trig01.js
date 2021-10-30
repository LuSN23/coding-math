window.onload = function() {
    var canvas = document. getElementById("canvas"); //Pick the canvas element
    var context = canvas.getContext("2d");           //Define a context to canvas
    var width = canvas.width = window.innerWidth;    //The width is equal to the width of the inner of the object window
    var height = canvas.height = window.innerHeight;  //The height is equal to the height of the inner of the object window

    context.translate(0, height / 2); //Adjusting with translate the positions of x and y, to show the sine wave at the center of the screen
    context.scale(1, -1); //Adjusting with scale, resizing the element 2D to revert the axis of the waves considering the monitors reverted positions

    for(var angle = 0; angle < Math.PI * 2; angle += .01) { 
       var x = angle * 200;             //Spacing individual data points, using x and y axis
       var y = Math.sin(angle) * 200;

       context.fillRect(x, y, 5, 5); //Draws a rectangle
    }
};