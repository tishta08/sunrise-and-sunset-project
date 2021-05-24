const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
    background(backgroundImg);
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var currenttime=await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
   
    //change the data in JSON format
    var timejson= await currenttime.json();
    
    

    // write code slice the datetime
    var onlydatetime= timejson.datetime;
   
    var onlytime=onlydatetime.slice(11,13)
    console.log(onlytime)


    // add conditions to change the background images from sunrise to sunset
    if (onlytime>=04 && onlytime<=06){
        bg="sunrise1.png"
    }
    else if (onlytime>=06 && onlytime<=08){
        bg="sunrise2.png"
    }
    else if (onlytime>=08 && onlytime<17){
        bg="sunrise6.png"
    }
    else if (onlytime >=17 && onlytime<18){
        bg="sunset7.png"
    }
    else if (onlytime>=18 && onnlytime <= 19){
        bg="sunset10.png"
    }
    else if (onlytime>=19 && onlytime<=23){
        bg="sunset11.png"
    }

    else if (onlytime>=23 && onlytime==0){
        bg="sunset11.png"
    }
    else if (onlytime==0 && onlytime<=03){
        bg="sunset12.png"
    }
    else{
        bg="sunset12.png"
    }
    backgroundImg=loadImage(bg)


    //load the image in backgroundImg variable here

}
