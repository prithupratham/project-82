canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   currentposition_x = e.clientX-canvas.offsetLeft;
   currentposition_y = e.clientY-canvas.offsetTop; 

   if(mouseEvent == "mouseDown")
   {
       ctx.beginPath();
       ctx.strokeStyle = Color;
       ctx.lineWidth = Width_line;
       console.log("last position of x & y coordinates = ");
       console.log("x = " + lastposition_x + "y = " + lastposition_y);
       ctx.moveTo(lastposition_x , lastposition_y);

       console.log("current position of x & y coordinates = ");
       console.log("x = " + currentposition_x + "y = " + currentposition_y);
       ctx.lineTo(currentposition_x , currentposition_y);
       ctx.stroke();
   }
   lastposition_x = currentposition_x;
   lastposition_y = currentposition_y;
}
function Clear_area()
{
ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color = document.getElementById("Color").value;
    Width_of_line = document.getElementById("Width_line").value;
    radius = document.getElementById("Radius").value; 
    mouseEvent == my_mousedown;
}