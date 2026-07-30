const shapes = [];

function registerShape(shape, type) {

    shape.data("type", type);

    shape.data("id", Date.now() + "-" + Math.random());

    shapes.push(shape);

}
