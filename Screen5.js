var screen5,school;


function preload() {
 screen6 = loadImage ('Assets/Screen5.jpg');
 school = loadImage ('Assets/school.png');

}

function setup(){
  link=createA('Screen6.html','');
}

function draw() {
  createCanvas(1920,1708);
  background(240);

  image (screen6,0,0);
  image(school,1215,554);

  img=createImg('Assets/school.png').parent(link);
  img.position(1215,554);
  img.size(252,76);

}
