difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(500,500);

canvas=createCanvas(500,500);
canvas.position(560,100);
var posenet=ml5.poseNet(video,modaloaded);
posenet.on("pose",getpose);
}

function modaloaded(){
console.log("posenet is initialized");
}

function getpose(result){
if(result.length>0){
    console.log(result);    
    
    leftWristX = result[0].pose.leftWrist.x;
    rightWristX = result[0].pose.rightWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
    console.log("difference = " + difference);
}}

function draw(){
background("#0037ff");
document.getElementById("textside").innerHTML="fontsize = " + difference + "px";
textSize(difference);
fill("#fafafc");
text("Dhev",200,200);
}