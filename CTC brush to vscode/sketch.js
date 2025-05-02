// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("./img/dolphinnn.jpg");
}

function setup() {
  let cnv = createcanvas (windowWidth, windowheight);
  cnv.position(0, 0);
  cnv.style ('z-index','-2'); 
  cnv.style ('position', 'absolute');
  imageMode (CENTER);
  background (0, 0, 0, 0); // Transparent background 
  
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
}

function draw() {

  // Draw an image at your mouse position
  image(img, mouseX, mouseY, 100,100);

  function windowResize() {
    resizeCanvas(windowWidth, wndowHeight);
  }
}