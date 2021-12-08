var screen2,real;


function preload() {
 screen2 = loadImage ('Assets/Screen2.jpg');
 real = loadImage('Assets/Real.png');

}

function setup(){
  link=createA('Screen3.html','');
}

function draw() {
createCanvas(1920,5366);
background(240);

image (screen2,0,0);
image (real,451,557);


img=createImg('Assets/Real.png').parent(link);
img.position(451,557);
img.size(252,70);


}
