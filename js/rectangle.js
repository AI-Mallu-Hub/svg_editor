let activeShape = null;

let dragging = false;

let startX = 0;
let startY = 0;

let shapeX = 0;
let shapeY = 0;

/*
==================================
Attach Events To Any New Shape
==================================
*/

function attachShapeEvents(shape){

    shape.on("pointerdown", function(e){

        if(currentTool !== "select") return;

        e.stopPropagation();

        selectShape(this);

        activeShape = this;

        activeShape.front();

        dragging = true;

        startX = e.clientX;
        startY = e.clientY;

        shapeX = this.x();
        shapeY = this.y();

    });

}

/*
==================================
Move Selected Shape
==================================
*/

window.addEventListener("pointermove", (e)=>{

    if(resizing) return;

    if(!dragging) return;

    if(!activeShape) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newX = shapeX + dx;
    let newY = shapeY + dy;

    newX = Math.max(0, newX);
    newY = Math.max(0, newY);

    activeShape.move(newX, newY);

    if(selectedShape === activeShape){
        updateHandles(activeShape);
    }

});

/*
==================================
Stop Drag
==================================
*/

window.addEventListener("pointerup", ()=>{

    dragging = false;

    shapeX = activeShape ? activeShape.x() : 0;
    shapeY = activeShape ? activeShape.y() : 0;

});

/*
==================================
Canvas Click
==================================
*/

svg.on("pointerdown", ()=>{

    if(currentTool !== "select") return;

    deselectAll();

    activeShape = null;

});
