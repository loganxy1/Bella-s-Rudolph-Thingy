var nose_y = 0;
var nose_x = 0;

function preload(){
    cuz_im_a_gummy_bear = loadImage('https://i.postimg.cc/prq02dxq/Clown-Nose-removebg-preview.png');
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
    image(cuz_im_a_gummy_bear,nose_x,nose_y,60,40);
}

function takeDaPicture(){
    save('You_As_Rudolph_The_Red_Nosed_Reindeer_Snapshot');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 28;
        nose_y = results[0].pose.nose.y - 28;
        console.log("X of Nose is"+nose_x);
        console.log("Y of Nose is"+nose_y);
    }
}