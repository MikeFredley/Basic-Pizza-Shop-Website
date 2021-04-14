var canvas = document.querySelector('canvas'); // creates canvas variable
var c =  canvas.getContext('2d'); // moves the methods of the canvas into the c variable
canvas.height = window.innerHeight - 35; // changes canvas size
canvas.width = window.innerWidth - 35; // changes canvas size

var x = 100;
var y = 100;
var dx = 10;
var dy = 10;
var radius = 100;
function animate()  // Recursive function to animate the circle
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight); // clears the screen so the circle doesn't keep drawing
    c.beginPath(); // Separates the line from the circle
    c.arc(x, y, radius, 0, Math.PI * 2, false); // tells where to draw the circle
    c.strokeStyle = 'red'; // changes the color
    c.stroke(); // draws the circle
    if (x + radius > innerWidth || x - radius < 0) // subtracts its x position if it hits the edge of the screen
    {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) // subtracts its y position if it hits the edge of the screen
    {
        dy = -dy;
    }

    x += dx; // adds its x position
    y += dy; // adds it y position
}

animate();

// Rectangle
//c.fillStyle = 'rgba(255, 0, 0, 1)';
//c.fillRect(100, 100, 100, 100);
//c.fillRect(200, 200, 100, 100);
//c.fillStyle = 'rgba(0, 255, 0, 1)'; // Color of fill style only effects preceding rectangles
//c.fillRect(300, 300, 100, 100);
//c.fillRect(400, 400, 100, 100);
//c.fillStyle = 'rgba(0, 0, 255, 1)';
//c.fillRect(500, 500, 100, 100);
//c.fillRect(600, 600, 100, 100);

// Line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400,300);
//c.strokeStyle = "blue";
//c.stroke();

// Arc or circle
//c.beginPath(); // Separates the line from the circle
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'green';
//c.stroke();