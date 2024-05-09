// let slider;
let mySelect;
let myPicker;
let myRadio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rect(0, 0, 130, 100);

  let button = createButton('clean');
  button.position(10, 80);

  myPicker = createColorPicker('deeppink');
  myPicker.position(10, 30);

  myRadio = createRadio();
  myRadio.position(10, 10);
  myRadio.size(150);
  myRadio.option('light');
  myRadio.option('dark');

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
  

  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "circle") {
        fill(color);
        circle(mouseX, mouseY, 100);
      }
    }
  }

  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "square") {
        fill(color);
        square(mouseX, mouseY, 100);
      }
    }
  }
  if (mouseIsPressed) {
    if ((mouseX > 150) || (mouseY > 150)) {
      if (select == "triangle") {
        fill(color);
        triangle(mouseX, mouseY, mouseX-150, mouseY, mouseX-75, mouseY+75 );
      }
    }
  }
  // mySelect.style('margin', '20px, 20px');
  // myPicker.style('margin', '40px, 40px');
  myRadio.style('display', 'flex', 'align-items', 'center', )

  
  
 

}