function preload(){
}

function setup(){
    canvas  = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('The Pose Net Is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function takeDaPicture(){
    save('You_As_Rudolph_The_Red_Nosed_Reindeer_Snapshot');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("X of Nose is"+results[0].pose.nose.x);
        console.log("Y of Nose is"+results[0].pose.nose.y);
    }
}