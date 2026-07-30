
/*
==================================
Rectangle Tool
Version 3.1
==================================
*/

function createRectangle(x, y) {

    const rect = svg.rect(120, 80)
        .move(x - 60, y - 40)
        .radius(8)
        .fill("#64b5f6")
        .stroke({
            color: "#1565c0",
            width: 2
        });

    registerShape(rect, "rectangle");

    attachShapeEvents(rect);

    return rect;

}

svg.on("click", (e) => {

    if (currentTool !== "rect") return;

    const p = svg.point(e.clientX, e.clientY);

    createRectangle(p.x, p.y);

});
