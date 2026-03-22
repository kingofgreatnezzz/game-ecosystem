const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

export function draw(skeleton) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseX = skeleton.torso.x;
    const baseY = skeleton.torso.y;

    // torso
    drawLine(baseX, baseY, baseX, baseY - 60);

    // head
    ctx.beginPath();
    ctx.arc(baseX, baseY - 75, 10, 0, Math.PI * 2);
    ctx.stroke();

    // arms
    drawLimb(baseX, baseY - 40, skeleton.leftArm);
    drawLimb(baseX, baseY - 40, skeleton.rightArm);

    // legs
    drawLimb(baseX, baseY + 10, skeleton.leftLeg);
    drawLimb(baseX, baseY + 10, skeleton.rightLeg);
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawLimb(x, y, limb) {
    const length = 40;
    const angle = limb.rotation;

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    drawLine(x, y, endX, endY);
}