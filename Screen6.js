var screen6, amenity;


function preload() {
 screen6 = loadImage ('Assets/Screen6.jpg');
 amenity = loadImage('Assets/amenity.png');

}

function setup(){
  link=createA('Screen7.html','');
}

function draw() {
  createCanvas(1920,1708);
  background(240);

  image (screen6,0,0);
  image(amenity,1468,554);

  img=createImg('Assets/amenity.png').parent(link);
  img.position(1468,554);
  img.size(252,76);


}
