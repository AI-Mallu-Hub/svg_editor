/*
========================================
SVG Studio
Version : 3.0
Module  : Shape Engine
========================================
*/

const ShapeEngine = {

    shapes: [],

    nextId: 1,

    register(shape, type) {

        const id = this.nextId++;

        shape.data("id", id);
        shape.data("type", type);

        this.shapes.push(shape);

        return id;

    },

    unregister(shape) {

        this.shapes = this.shapes.filter(s => s !== shape);

    },

    getById(id) {

        return this.shapes.find(s => s.data("id") === id);

    },

    getAll() {

        return this.shapes;

    },

    count() {

        return this.shapes.length;

    },

    clear() {

        this.shapes = [];

        this.nextId = 1;

    }

};


/* ------------------------------------
Compatibility Layer
(Old code continues to work)
------------------------------------ */

function registerShape(shape, type) {

    return ShapeEngine.register(shape, type);

}

function unregisterShape(shape) {

    ShapeEngine.unregister(shape);

}

function getAllShapes() {

    return ShapeEngine.getAll();

}
