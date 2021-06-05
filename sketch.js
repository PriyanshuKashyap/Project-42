var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
//var arcWidth, arcHeight, lineWidth;
//var loop1Arc, loop2Arc, loop3Arc, loop1Line, loop2Line, loop3Line;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  /*hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr, 0, 24, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);*/
  /*arcWidth = 0;
  arcHeight = 0;
  lineWidth = 0;*/
}

function draw() {
  background(255,255,255);
  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr, 0, 24, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  console.log("" + hr + ":" + mn + ":" + sc);
  console.log("" + hrAngle + ":" + mnAngle + ":" + scAngle);

  push();
  stroke(255, 0, 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(scAngle);
  line(0, 0, 75, 0);
  pop();
  
  //translate(width/2, height/2);
  push();
  stroke("pink");
  strokeWeight(7);
  translate(width/2, height/2);
  //rotate(scAngle);
  //rotate(0);
  noFill();
  //ellipse(0, 0, 75, 75);
  //arc(0, 0, 150, 150, 0, 180);
  arc(0, 0, 150, 150, 0, scAngle);
  pop();

  push();
  stroke(0, 255, 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(mnAngle);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke("green");
  strokeWeight(7);
  translate(width/2, height/2);
  //rotate(0);
  noFill();
  //ellipse(0, 0, 150, 150);
  arc(0, 0, 300, 300, 0, mnAngle);
  pop();

  push();
  stroke(0, 0, 255);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(hrAngle);
  line(0, 0, 225, 0);
  pop();

  push();
  stroke("blue");
  strokeWeight(7);
  translate(width/2, height/2);
  //rotate(scAngle);
  noFill();
  //ellipse(0, 0, 150, 150);
  arc(0, 0, 450, 450, 0, hrAngle);
  pop();

  drawSprites();
  
  
}
/*for (var j = 3; j <= 3; j++) {
    push();
    stroke(255, 0, 0);
    strokeWeight(7);
    translate(width/2, height/2);
    rotate(scAngle);
    line(0, 0, lineWidth, 0);
    pop();

    translate(width/2, height/2);
    //rotate(scAngle);
    noFill();
    //ellipse(0, 0, 150, 150);
    arc(0, 0, arcWidth, arcHeight, 0, scAngle);
    //arcWidth += 150;
    //arcHeight += 150;
    //lineWidth += 75;
    if (j === 1) {
      loop1 = arc(0, 0, arcWidth, arcHeight, 0, scAngle);
      loop1Line = line(0, 0, lineWidth, 0);
    } 
    
    if (j === 2) {
      loop2Arc = arc(0, 0, arcWidth, arcHeight, 0, scAngle);
      loop2Line = line(0, 0, lineWidth, 0);
    } 
    
    if (j === 3) {
      loop3Arc = arc(0, 0, arcWidth, arcHeight, 0, scAngle);
      loop3Line = line(0, 0, lineWidth, 0);
    }
    arcWidth += 150;
    arcHeight += 150;
    lineWidth += 75;
  }*/