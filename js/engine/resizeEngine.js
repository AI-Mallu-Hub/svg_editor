
/*
========================================
SVG Studio
Version : 3.0
Module  : Resize Engine
========================================
*/

const ResizeEngine = {

    resizing: false,

    resizeShape: null,

    resizeHandle: -1,

    startPointerX: 0,
    startPointerY: 0,

    startShapeX: 0,
    startShapeY: 0,

    startWidth: 0,
    startHeight: 0,

    minWidth: 40,
    minHeight: 40,

    start(shape, handle, pointerX, pointerY) {

        this.resizing = true;

        this.resizeShape = shape;

        this.resizeHandle = handle;

        this.startPointerX = pointerX;
        this.startPointerY = pointerY;

        this.startShapeX = shape.x();
        this.startShapeY = shape.y();

        this.startWidth = shape.width();
        this.startHeight = shape.height();

    },

    stop() {

        this.resizing = false;

        this.resizeShape = null;

        this.resizeHandle = -1;

    },

    isResizing() {

        return this.resizing;

    }

};


/*
----------------------------------------
Compatibility Wrappers
----------------------------------------
*/

function startResize(shape, handle, x, y) {

    ResizeEngine.start(shape, handle, x, y);

}

function stopResize() {

    ResizeEngine.stop();

}
