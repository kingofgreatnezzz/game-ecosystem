const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

// ===== LOAD IMAGES =====
const images = {
    head: loadImage("./assets/head.png"),
    torso: loadImage("./assets/torso.png"),
    arm: loadImage("./assets/arm.png"),
    leg: loadImage("./assets/leg.png")
};

function loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
}

// ===== DRAW FUNCTION =====
export function draw(skeleton) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseX = skeleton.torso.x;
    const baseY = skeleton.torso.y;

    // torso
    drawPart(images.torso, baseX, baseY, 0);

    // head
    drawPart(images.head, baseX, baseY - 60, skeleton.head.rotation);

    // arms
    drawPart(images.arm, baseX - 25, baseY - 20, skeleton.leftArm.rotation);
    drawPart(images.arm, baseX + 25, baseY - 20, skeleton.rightArm.rotation);

    // legs
    drawPart(images.leg, baseX - 15, baseY + 40, skeleton.leftLeg.rotation);
    drawPart(images.leg, baseX + 15, baseY + 40, skeleton.rightLeg.rotation);
}

// ===== DRAW WITH ROTATION =====
function drawPart(img, x, y, rotation) {
    const w = 40;
    const h = 40;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
}