// let slider;
let mySelect;
let myPicker;
let myRadio;
var pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  pg = createGraphics(windowWidth, windowHeight);

  let button = createButton('clean');
  button.position(10, 80);
  button.mousePressed(clean);

  myPicker = createColorPicker('deeppink');
  myPicker.position(10, 30);

  myRadio = createRadio();
  myRadio.position(10, 10);
  myRadio.size(150);
  myRadio.option('light');
  myRadio.option('dark');
  myRadio.selected("light")

  // slider = createSlider(0, 255);
  // slider.position(10, 10);
  // slider.size(80);

  mySelect = createSelect();
  mySelect.position(10, 60);

  // Add color options.
  mySelect.option('circle');
  mySelect.option('square');
  mySelect.option('triangle');
  mySelect.selected('figures');

}

function draw() {
  // let g = slider.value();
  let select = mySelect.selected();
  let color = myPicker.color();
  let radio = myRadio.value();
  
  if (radio == 'light') {
    background(255)
  }
  else if (radio == 'dark') {
    background(0)
  }
  stroke("black")
  fill("white")
  rect(0, 0, 130, 100);
  
  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "circle") {
        pg.fill(color);
        pg.stroke(mouseY, mouseX, mouseX);
        pg.strokeWeight(2);
        pg.circle(mouseX, mouseY, 100);
      }
    }
  }

  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "square") {
        pg.fill(color);
        pg.stroke(mouseX, mouseY, mouseY);
        pg.strokeWeight(2);
        pg.square(mouseX, mouseY, 100);
      }
    }
  }
  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "triangle") {
        pg.fill(color);
        pg.stroke(mouseX, mouseY, mouseX);
        pg.strokeWeight(2);
        pg.triangle(mouseX, mouseY, mouseX-150, mouseY, mouseX-75, mouseY+75 );
      }
    }
  }
  // mySelect.style('margin', '20px, 20px');
  // myPicker.style('margin', '40px, 40px');
  myRadio.style('display', 'flex', 'align-items', 'center', ) 

  
  image(pg, 0, 0);
}

function clean() {
  pg = createGraphics(windowWidth, windowHeight);
}