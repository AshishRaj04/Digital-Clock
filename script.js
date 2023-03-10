let clock = document.querySelector(".container");
let greetings = document.querySelector(".greeting");

let time = document.createElement("h1");
time.classList.add("Time");

setInterval(() => {
  let a = new Date();
  let hours = a.getHours();
  let minutes = a.getMinutes();
  let seconds = a.getSeconds();
  let miliseconds = a.getMilliseconds();

  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  update(hours);
  
}, 1000);

clock.appendChild(time);

function update(hours) {
  if (hours >= 00 && hours < 12) {
    greetings.innerHTML = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    greetings.innerHTML = "Good Afternoon";
  } else if (hours >= 17 && hours < 19) {
    greetings.innerHTML = "Good Evening";
  } else {
    greetings.innerHTML = "Good Night";
  }
}



// canva


var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var circleArray = [];
let colors =[
  "#2C3532",
  "#0F6466",
  "#D8B08C",
  "#FFCB9A",
  "#D2E8E3",

] 
let  minRadius = 2 ;
let  maxRadius = 70 ;

let position = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (e) => {
  position.x = e.x;
  position.y = e.y;
  // console.log(position);
});

window.addEventListener("resize",(e)=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
 
})

function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.color = colors[Math.floor(Math.random()*5 + 1)];
  this.minRadius = r ;


  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    //interactivity
    if (
      position.x - this.x < 50 &&
      position.x - this.x > -50 &&
      position.y - this.y < 50 &&
      position.y - this.y > -50
    ) {
      if (this.r < maxRadius) {
        this.r += 1;
       
      }
    } else if (this.r >this.minRadius) {
      this.r -= 1;
    }

    this.x += this.dx;
    this.y += this.dy;
  };
}


for (var i = 0; i < 1000; i++) {
  var x = Math.random() * (innerWidth - r * 2) + r;
  var y = Math.random() * (innerHeight - r * 2) + r;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var r = Math.random() * 3 + 1;

  circleArray.push(new Circle(x, y, dx, dy, r));
}



function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}

animate();

