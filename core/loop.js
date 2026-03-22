export function animate(skeleton, time) {
    // idle motion
    skeleton.leftArm.rotation = Math.sin(time * 0.003) * 0.3;
    skeleton.rightArm.rotation = Math.cos(time * 0.003) * 0.3;

    skeleton.leftLeg.rotation = Math.cos(time * 0.002) * 0.2;
    skeleton.rightLeg.rotation = Math.sin(time * 0.002) * 0.2;
}