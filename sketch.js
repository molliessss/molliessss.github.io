function setup() {
  createCanvas(1500, 1500);
 
}

function draw() {
   let inside = color(2, 200, 89)
   let p = createP('hi Im mollie and im trying really hard to code');
  p.style('font-size', '12px');
p.style('width', '65px');
p.style('text-align', 'center');
p.position(mouseX, mouseY, 100);
  if (mouseIsPressed) {
 fill(0);
  }else{
    fill(inside);
}
createP(mouseX, mouseY, 100) 
  square(mouseX, mouseY, 100)
}