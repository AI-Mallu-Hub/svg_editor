/*
==================================
Line Tool
Version 4.2 Part 1A
==================================
*/

let drawingLine = false;

let tempLine = null;

let lineStartX = 0;
let lineStartY = 0;


// ================================
// Start Drawing
// ================================

svg.on("pointerdown", function (e) {

    if (currentTool !== "line") return;

    const p = svg.point(e.clientX, e.clientY);

    lineStartX = p.x;
    lineStartY = p.y;

    drawingLine = true;

    tempLine = svg.line(
        lineStartX,
        lineStartY,
        lineStartX,
        lineStartY
    )
    .stroke({
        color: "#222",
        width: 3,
        linecap: "round"
    });

});


// ================================
// Live Preview
// ================================

window.addEventListener("pointermove", function (e) {

    if (!drawingLine) return;

    if (!tempLine) return;

    const p = svg.point(e.clientX, e.clientY);

    tempLine.plot(
        lineStartX,
        lineStartY,
        p.x,
        p.y
    );

});


// ================================
// Finish Drawing
// ================================

window.addEventListener("pointerup", function (e) {

    if (!drawingLine) return;

    drawingLine = false;

    if (!tempLine) return;

    registerShape(tempLine, "line");

    attachShapeEvents(tempLine);

    tempLine = null;

});
