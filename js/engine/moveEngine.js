
/*
========================================
SVG Studio
Version : 3.0
Module  : Move Engine
========================================
*/

const MoveEngine = {

    activeShape: null,

    dragging: false,

    startX: 0,
    startY: 0,

    shapeX: 0,
    shapeY: 0,

    startDrag(shape, pointerX, pointerY) {

        this.activeShape = shape;

        this.dragging = true;

        this.startX = pointerX;
        this.startY = pointerY;

        this.shapeX = shape.x();
        this.shapeY = shape.y();

    },

    move(pointerX, pointerY) {

        if (!this.dragging || !this.activeShape) return;

        let dx = pointerX - this.startX;
        let dy = pointerY - this.startY;

        let newX = Math.max(0, this.shapeX + dx);
        let newY = Math.max(0, this.shapeY + dy);

        this.activeShape.move(newX, newY);

        if (typeof updateHandles === "function") {
            updateHandles(this.activeShape);
        }

    },

    stopDrag() {

        this.dragging = false;

        this.activeShape = null;

    }

};


/*
----------------------------------------
Compatibility Wrappers
----------------------------------------
*/

function startShapeDrag(shape, x, y) {

    MoveEngine.startDrag(shape, x, y);

}

function moveActiveShape(x, y) {

    MoveEngine.move(x, y);

}

function stopShapeDrag() {

    MoveEngine.stopDrag();

      }
