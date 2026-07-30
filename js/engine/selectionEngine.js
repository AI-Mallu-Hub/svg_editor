
/*
========================================
SVG Studio
Version : 3.0
Module  : Selection Engine
========================================
*/

const SelectionEngine = {

    selectedShape: null,

    select(shape) {

        if (this.selectedShape === shape) return;

        this.clear();

        this.selectedShape = shape;

        shape.stroke({
            color: "#ff0000",
            width: 2
        });

        if (typeof createHandles === "function") {
            createHandles(shape);
        }

    },

    clear() {

        if (!this.selectedShape) return;

        this.selectedShape.stroke({
            color: "#000000",
            width: 1
        });

        if (typeof hideHandles === "function") {
            hideHandles();
        }

        this.selectedShape = null;

    },

    getSelected() {

        return this.selectedShape;

    },

    hasSelection() {

        return this.selectedShape !== null;

    }

};


/*
----------------------------------------
Compatibility Wrappers
----------------------------------------
*/

function selectShape(shape) {

    SelectionEngine.select(shape);

}

function deselectAll() {

    SelectionEngine.clear();

}

function getSelectedShape() {

    return SelectionEngine.getSelected();

      }
