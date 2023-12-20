const activeCircle = document.querySelector('.container .circle');

const moveData = {
    l: 0,
    t: 0,

    speed: 25,

    rCode: 39,
    lCode: 37,
    tCode: 38,
    bCode: 40,

    moveLeft() {
        this.l -= this.speed;
    },
    moveRight() {
        this.l += this.speed;
    },
    moveUp() {
        this.t -= this.speed;
    },
    moveDown() {
        this.t += this.speed;
    },
    updateCoords(element) {
        element.style.left = `${this.l}px`;
        element.style.top = `${this.t}px`;
    }
}

// keydown
window.onkeydown = (event) => {

    switch (event.keyCode) {
        case moveData.lCode:
            moveData.moveLeft();
            break;

        case moveData.rCode:
            moveData.moveRight();
            break;

        case moveData.tCode:
            moveData.moveUp();
            break;

        case moveData.bCode:
            moveData.moveDown();
            break;
    }

    moveData.updateCoords(activeCircle);
}
