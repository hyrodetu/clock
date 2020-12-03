var hr, min, sec
var hourAngle, minAngle, secondAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
 
}

function draw() {
  background(0); 
  translate(200,200)
  rotate(-90)
  hr=hour()%12
  min=minute()
  sec=second()
  hourAngle=map(hr,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  secondAngle=map(sec,0,60,0,360)
  push()
  rotate(secondAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hourAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  noFill()
  point(0,0)
  strokeWeight(10)
  stroke("red")
  arc(0,0,300,300,0,secondAngle)
  
  stroke("blue")
  arc(0,0,280,280,0,minAngle)
  
  stroke("green");
  arc(0,0,260,260,0,hourAngle);
  
}