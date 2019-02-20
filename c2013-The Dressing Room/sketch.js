/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 6386874
CaseNum: 201-2-80841032-6386874

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.


*/

var img;

function preload() {
    img = loadImage('scene.png');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {

    image(img, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    beginShape(POINTS);
    vertex(417, 142);
    vertex(496, 104);
    vertex(588, 155);
    vertex(496, 192);
    vertex(653, 133);
    vertex(649, 191);
    endShape();

}
