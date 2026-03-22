import { skeleton } from "./core/skeleton.js";
import { animate } from "./core/loop.js";
import { draw } from "./core/renderer.js";
import { cardSystem } from "./systems/cardSystem.js";

function loop(time) {
    animate(skeleton, time);
    cardSystem.apply(skeleton, time);
    draw(skeleton);

    requestAnimationFrame(loop);
}

loop();