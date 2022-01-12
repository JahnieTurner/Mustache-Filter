noseX = 0;
noseY = 0;

function preload() {
    img = loadImage('mustashe.png')
}

function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotposes)
}

function draw() {
    image(video, 0, 0, 400, 400)
    image(img, noseX, noseY, 100, 60)
}

function take_snapshot() {
    save('mustashe.png')
}

function modelLoaded() {
    console.log("model is loaded")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x - 180
        noseY = results[0].pose.nose.y - 65
    }
}