var crimedata;
var incident1, incident2, incident3;
var found_on_list;
var neighborhoodList = [];
var map, screen5,commute;


function preload() {
  map = loadImage('Assets/SF map.png');
  screen5 = loadImage ('Assets/Screen5.jpg');
  commute = loadImage('Assets/commute.png');
  loadJSON('https://data.sfgov.org/resource/wg3w-h783.json', myCallback);
  //loadJSON('police.json', myCallback);
  function myCallback(jsondata) {
    crimedata = jsondata;
  }
}

function setup() {
  createCanvas(1920,2200);
  background(240);
  link=createA('Screen5.html','');


   neighborhoodList = [{
    name: 'Tenderloin',
    count: 0
  }]; // lets create an array of data structures with the neighborhood name and incident count
  for (var i = 0; i < crimedata.length; i++) { // look at each incident
    if (crimedata[i].analysis_neighborhood) { // if there is a neighborhood listed (not all do)
      for (var j = 0; j < neighborhoodList.length; j++) { // look at each neighborhood in the list
        if (neighborhoodList[j].name == crimedata[i].analysis_neighborhood) { // if the incident neighborhood matches one on the list
          neighborhoodList[j].count++; // add one to the count of incidents in that neighborhood
          break; // break out of the var j for loop
        };
        if (j == neighborhoodList.length - 1) { // if we got to the end of the j loop without finding the neighborhood
          neighborhoodList.push({  //add this neighborhood to the list
            name: crimedata[i].analysis_neighborhood,
            count: 1 // with a count of one incident
          });
        }
      }
    }
  }
  print("neighborhood list is:");
  print(neighborhoodList);
}
function draw() {


  image (screen5,0,0);
  image (map,200,690,1519,1495);
  image(commute,962,557);

  img=createImg('Assets/commute.png').parent(link);
  img.position(962,557);
  img.size(252,70);

  var neighborhoodName = neighborhoodList[10].name; //10 is for Nob Hill
  var neighborhoodIncidents = neighborhoodList[10].count; //10 is for Nob Hill

  if ((mouseX > 1280) && (mouseX < 1320) &&
   (mouseY > 1200) && (mouseY < 1240)) {
   fill(198,104,42);
   textAlign(CENTER);
   textSize(30);
   text(neighborhoodName, 300, 1100 , 1955);
   text(neighborhoodIncidents,100,1140,2360);
   ellipse(1280,1200,40,40);
 } else {
  fill(36,43,44);
  ellipse(1280,1200,40,40);
}
var neighborhoodName = neighborhoodList[0].name; //0 is for Tenderloin
var neighborhoodIncidents = neighborhoodList[0].count;

if ((mouseX > 1280) && (mouseX < 1320) &&
 (mouseY > 1300) && (mouseY < 1340)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1300, 2200);
 text(neighborhoodIncidents,100,1330,2600);
 ellipse(1280,1300,40,40);
} else {
fill(36,43,44);
ellipse(1280,1300,40,40);
}

var neighborhoodName = neighborhoodList[1].name; //1 is for Hayes Valley
var neighborhoodIncidents = neighborhoodList[1].count;

if ((mouseX > 1200) && (mouseX < 1240) &&
 (mouseY > 1350) && (mouseY < 1390)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1390 , 1800);
 text(neighborhoodIncidents,100,1425,2200);
 ellipse(1200,1350,40,40);
} else {
fill(36,43,44);
ellipse(1200,1350,40,40);

}

var neighborhoodName = neighborhoodList[2].name; //2 is for Excelsior
var neighborhoodIncidents = neighborhoodList[2].count;

if ((mouseX > 1320) && (mouseX < 1360) &&
 (mouseY > 1760) && (mouseY < 1800)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1800, 2030);
 text(neighborhoodIncidents,100,1835,2425);
 ellipse(1320,1760,40,40);
} else {
fill(36,43,44);
ellipse(1320,1760,40,40);
}
var neighborhoodName = neighborhoodList[3].name; //3 is for South Market
var neighborhoodIncidents = neighborhoodList[3].count;

if ((mouseX > 1455) && (mouseX < 1495) &&
 (mouseY > 1250) && (mouseY < 1290)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1290, 2300);
 text(neighborhoodIncidents,100,1325,2700);
 ellipse(1455,1250,40,40);
} else {
fill(36,43,44);
ellipse(1455,1250,40,40);
}

var neighborhoodName = neighborhoodList[4].name; //4 is for North Beach
var neighborhoodIncidents = neighborhoodList[4].count;

if ((mouseX > 1350) && (mouseX < 1390) &&
 (mouseY > 1050) && (mouseY < 1090)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1090, 2120);
 text(neighborhoodIncidents,100,1120,2500);
 ellipse(1350,1050,40,40);
} else {
fill(36,43,44);
ellipse(1350,1050,40,40);
}

var neighborhoodName = neighborhoodList[5].name; //4 is for North Beach
var neighborhoodIncidents = neighborhoodList[5].count;

if ((mouseX > 1420) && (mouseX < 1460) &&
 (mouseY > 1160) && (mouseY < 1200)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1090, 2120);
 text(neighborhoodIncidents,100,1125,2500);
 ellipse(1420,1160,40,40);
} else {
fill(36,43,44);
ellipse(1420,1160,40,40);
}

var neighborhoodName = neighborhoodList[6].name; //4 is for North Beach
var neighborhoodIncidents = neighborhoodList[6].count;

if ((mouseX > 1425) && (mouseX < 1465) &&
 (mouseY > 1950) && (mouseY < 1990)) {
 fill(198,104,42);
 textAlign(CENTER);
 textSize(30);
 text(neighborhoodName, 300, 1850, 2250);
 text(neighborhoodIncidents,100,1890,2650);
 ellipse(1425,1950,40,40);
} else {
fill(36,43,44);
ellipse(1425,1950,40,40);
}
textSize(30);
text('Data Provided:',225,1000);
text('Name of the Neighborhood',225,1050);
text('Number of Incidents',225,1100);


}
