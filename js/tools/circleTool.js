
/*
==================================
Circle Tool
Version 4.1
==================================
*/

function createCircle(x, y) {

    const circle = svg.circle(100)
        .center(x, y)
        .fill("#81c784")
        .stroke({
            color: "#2e7d32",
            width: 2
        });

    registerShape(circle, "circle");

    attachShapeEvents(circle);

    return circle;

}

svg.on("click", (e) => {

    if (currentTool !== "circle") return;

    const p = svg.point(e.clientX, e.clientY);

    createCircle(p.x, p.y);

});
