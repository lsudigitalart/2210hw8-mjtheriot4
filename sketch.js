//copywright Micah Theriot

function preload(){
  head1 = loadImage("images/head1.png");
  head2 = loadImage("images/head2.png");
  head3 = loadImage("images/head3.png");
  head4 = loadImage("images/head4.png");
  head5 = loadImage("images/head5.png");
  eyes1 = loadImage("images/eyes1.png");
  eyes2 = loadImage("images/eyes2.png");
  eyes3 = loadImage("images/eyes3.png");
  eyes4 = loadImage("images/eyes4.png");
  eyes5 = loadImage("images/eyes5.png");
  nose1 = loadImage("images/nose1.png");
  nose2 = loadImage("images/nose2.png");
  nose3 = loadImage("images/nose3.png");
  nose4 = loadImage("images/nose4.png");
  nose5 = loadImage("images/nose5.png");
  mouth1 = loadImage("images/mouth1.png");
  mouth2 = loadImage("images/mouth2.png");
  mouth3 = loadImage("images/mouth3.png");
  mouth4 = loadImage("images/mouth4.png");
  mouth5 = loadImage("images/mouth5.png");
}
function setup (){
  createCanvas(1024, 768);
  imageMode(CENTER);
  background(255);
  textFont("Helvetica");
  textSize(24);
  text("Directions:",750,100,);
  textSize(12);
  text("To draw head: press a key 1 - 5",750,150);
  text("To draw eyes: press a key q - t",750,200);
  text("To draw nose: press a key a - g",750,250);
  text("To draw mouth: press a key z - b",750,300);
  text("To cear, press 0",750,350);
}

function keyTyped() {
  if (key == "1" || key == "2" || key == "3" || key == "4" || key == "5" ) {
    head(key);
  }
  else if (key == "q" || key == "w" || key == "e" || key == "r" || key == "t" ) {
    eyes(key);
  }
  else if (key == "a" || key == "s" || key == "d" || key == "f" || key == "g" ) {
    nose(key);
  }
  else if (key == "z" || key == "x" || key == "c" || key == "v" || key == "b" ) {
    mouth(key);
  }
  else if (key == "0") {
    background(255);
  }
}
function head(k){
  switch (k) {
    case "1":
      image(head1, mouseX, mouseY);
      break;
    case "2":
      image(head2, mouseX, mouseY);
      break;
    case "3":
      image(head3, mouseX, mouseY);
      break
    case "4":
      image(head4, mouseX, mouseY);
      break;
    case "5":
      image(head5, mouseX, mouseY);
      break;
    }
  }
  function eyes(k){
    switch (k) {
      case "q":
        image(eyes1, mouseX, mouseY);
        break;
      case "w":
        image(eyes2, mouseX, mouseY);
        break;
      case "e":
        image(eyes3, mouseX, mouseY);
        break
      case "r":
        image(eyes4, mouseX, mouseY);
        break;
      case "t":
        image(eyes5, mouseX, mouseY);
        break;
      }
  }
  function nose(k){
    switch (k) {
      case "a":
        image(nose1, mouseX, mouseY);
        break;
      case "s":
        image(nose2, mouseX, mouseY);
        break;
      case "d":
        image(nose3, mouseX, mouseY);
        break
      case "f":
        image(nose4, mouseX, mouseY);
        break;
      case "g":
        image(nose5, mouseX, mouseY);
        break;
      }
  }
  function mouth(k){
    switch (k) {
      case "z":
        image(mouth1, mouseX, mouseY);
        break;
      case "x":
        image(mouth2, mouseX, mouseY);
        break;
      case "c":
        image(mouth3, mouseX, mouseY);
        break
      case "v":
        image(mouth4, mouseX, mouseY);
        break;
      case "b":
        image(mouth5, mouseX, mouseY);
        break;
    }

}
