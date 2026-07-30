const shapes = [];

function registerShape(shape, type) {

    shape.data("type", type);

    shape.data("id", Date.now() + "-" + Math.random());

    shapes.push(shape);

}
function unregisterShape(shape){

    const index = shapes.indexOf(shape);

    if(index>=0){

        shapes.splice(index,1);

    }

}
function getAllShapes(){

    return shapes;

}
