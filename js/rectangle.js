let activeShape = null;

let dragging = false;

let startX = 0;
let startY = 0;

let shapeX = 0;
let shapeY = 0;

svg.on("click", (e) => {

    if (currentTool !== "rect") return;

    const p = svg.point(e.clientX, e.clientY);

    const rect = svg.rect(120,80)
        .move(p.x-60,p.y-40)
        .radius(8)
        .fill("#64b5f6")
        .stroke({
            color:"#1565c0",
            width:2
        });

    attachShapeEvents(rect);

});
function attachShapeEvents(shape){

    shape.on("pointerdown",function(e){

        if(currentTool!=="select") return;

        e.stopPropagation();

        selectShape(this);

        activeShape = this;

        dragging=true;

        startX=e.clientX;
        startY=e.clientY;

        shapeX=this.x();
        shapeY=this.y();

    });

}
window.addEventListener("pointermove",(e)=>{

    if (resizing) return;

    if(!dragging) return;

    if(!activeShape) return;

    const dx=e.clientX-startX;

    const dy=e.clientY-startY;

    let newX = shapeX + dx;
let newY = shapeY + dy;

newX = Math.max(0, newX);
newY = Math.max(0, newY);

activeShape.move(newX, newY);

});
window.addEventListener("pointerup",()=>{

    dragging=false;

});
svg.on("pointerdown",()=>{

    if(currentTool!=="select") return;

    deselectAll();

    activeShape=null;

});
