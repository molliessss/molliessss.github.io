function setup() {
  createCanvas(1500, 1500);
 
}

function draw() {
   let inside = color(2, 200, 89)
   let inside2 = color(2, 400, 89)
   let p = createP('hey there');
  p.style('font-size', '30px');
p.style('width', '65px');
  p.style('text-align', 'CENTRE');
p.position(mouseX, mouseY, 0);
  if (mouseIsPressed) {
    fill(inside);
  }else{
    fill(inside2);
    strokeWeight(0);
}
createP(mouseX, mouseY, 100) 
ellipse(mouseX, mouseY, 180);
}
