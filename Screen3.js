var screen3,crime;


function preload() {
 screen3 = loadImage ('Assets/Screen3.jpg');
 crime = loadImage('Assets/crime.png');

}

function setup(){
  link=createA('Screen4.html','');
}

function draw() {
createCanvas(1920,5366);
background(240);

image (screen3,0,0);
image (crime,710,554);


img=createImg('Assets/crime.png').parent(link);
img.position(710,554);
img.size(252,76);


}
