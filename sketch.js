var bird;
var pipes = [];
function preload() {  // preload() runs once
  img = loadImage("assets/backgroundFixed.png");
}

function setup() {
  createCanvas(1200, 800);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(img);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.slice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 60 == 0) {
    pipes.push(new Pipe());
  }

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    // console.log("Spacebar");


  }
}
