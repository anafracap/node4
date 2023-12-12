let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const person = new Image();
let x = 0, y = 0, vx = 4, vy = 3;
const width = 100, height = 100;

window.addEventListener("load", (event) => {   
    init(); 
});

function init() {
    person.src = "person.png";
    window.requestAnimationFrame(draw);
};
    
function draw() {
    if(x < 0 || x > canvas.width - width){     
        vx *= -1;  
    }   
    x += vx;  

    if(y < 0 || y > canvas.height - height){     
        vy *= -1;  
    }   
    y += vy;  

    clear();

    ctx.drawImage(person, x, y, width, height);

    window.requestAnimationFrame(draw);
};

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
};

window.addEventListener("load", (event) => {   
    init(); 
});

window.addEventListener("click", (e) => {
    x = Math.floor(Math.random() * canvas.width);
    y = Math.floor(Math.random() * canvas.height);
    draw();
});
