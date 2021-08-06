var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    mouse_y = e.clientY - canvas.offsetTop;
     mouse_x =e.clientX - canvas.offsetLeft;
     circle(mouse_x,mouse_y);
}
function  circle(mouse_x,mouse_y){
    ctx.beginPath(); 
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=1;
ctx.arc(410,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=1;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();