function preload(){}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);
    video.position(100, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
}

function modelLoaded(){
    console.log('PoseNet is Intialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}