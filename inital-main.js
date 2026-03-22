
// ===== Skeleton Setup =====
const skeleton = {
    torso: { x: 200, y: 200 },
    head: { x: 0, y: -30 },
    leftArm: { x: -20, y: -10, rotation: 0 },
    rightArm: { x: 20, y: -10, rotation: 0 }
};

// ===== Card System =====
const cards = {
    waveCard: {
        apply: (skeleton, time) => {
            skeleton.rightArm.rotation = Math.sin(time * 0.005) * 1.2;
        }
    }
};

let activeCard = cards.waveCard;

// ===== Animation =====
function animateSkeleton(time) {
    // base idle animation
    skeleton.leftArm.rotation = Math.sin(time * 0.003) * 0.3;

    // apply card effect
    if (activeCard) {
        activeCard.apply(skeleton, time);
    }
}

// ===== Rendering =====
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseX = skeleton.torso.x;
    const baseY = skeleton.torso.y;

    // torso
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(baseX, baseY - 50);
    ctx.stroke();

    // head
    ctx.beginPath();
    ctx.arc(baseX, baseY - 65, 10, 0, Math.PI * 2);
    ctx.stroke();

    // arms
    drawLimb(baseX, baseY - 40, skeleton.leftArm);
    drawLimb(baseX, baseY - 40, skeleton.rightArm);
}

function drawLimb(x, y, limb) {
    const length = 30;
    const angle = limb.rotation;

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

// ===== Game Loop =====
function loop(time) {
    animateSkeleton(time);
    draw();
    requestAnimationFrame(loop);
}

loop();