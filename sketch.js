var screen1, search;


function preload() {
 screen1 = loadImage ('Assets/Screen1.jpg');
 search = loadImage ('Assets/search- button.png');

}

function setup(){
  link=createA('Screen2.html','');
}

function draw() {
  createCanvas(1920,1080);


image (screen1,0,0);
image (search,1305,583);


img=createImg('Assets/search- button.png').parent(link);
img.position(1305,583);
img.size(48,48);


}
