const cards = {
    wave: {
        apply: (skeleton, time) => {
            skeleton.rightArm.rotation = Math.sin(time * 0.005) * 1.2;
        }
    },

    jump: {
        apply: (skeleton, time) => {
            skeleton.torso.y = 200 + Math.sin(time * 0.01) * 10;
        }
    }
};

let activeCards = [cards.wave, cards.jump];

export const cardSystem = {
    apply(skeleton, time) {
        activeCards.forEach(card => {
            card.apply(skeleton, time);
        });
    }
};