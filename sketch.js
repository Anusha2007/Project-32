const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    //change the data in JSON format
    var rjson= await response.json();
    var datetime1= rjson.datetime;
    console.log(datetime1);
    // write code slice the datetime
    var hour= datetime1.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=5){
        bg="sunrise1.png";
    }
    else if (hour>=5 && hour<=6){
        bg="sunrise2.png";
    }
    else if(hour>=6 && hour<=8){
        bg="sunrise3.png";
    }
    else if(hour>=8 && hour<=11){
        bg="sunrise4.png";
    }
    else if(hour>=11 && hour<=13){
        bg="sunrise5.png";
    }
    else if(hour>=13 && hour<=14){
        bg="sunrise6.png";
    }
    else if(hour>=14 && hour<=16){
        bg="sunset7.png";
    }
    else if(hour>=16 && hour<=17){
        bg="sunset8.png";
    }
    else if(hour>=17 && hour<=18){
        bg="sunset10.png";
    }
    else if(hour>=18 && hour<=20){
        bg="sunset11.png";
    }
    else{
       bg="sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
