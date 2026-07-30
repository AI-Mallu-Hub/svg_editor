let resizing = false;

let resizeHandle = null;

let resizeShape = null;

let startWidth = 0;
let startHeight = 0;

let startShapeX = 0;
let startShapeY = 0;

let startPointerX = 0;
let startPointerY = 0;

let handles = [];

function createHandles() {

    for (let i = 0; i < 4; i++) {

        const h = svg.circle(14)
            .fill("#ffffff")
            .stroke({
                color: "#1e88e5",
                width: 2
            });
        h.data("index", i);

h.on("pointerdown", function (e) {

    e.stopPropagation();

    if (!selectedShape) return;

    resizing = true;

    resizeHandle = this.data("index");

    resizeShape = selectedShape;

    startWidth = resizeShape.width();

    startHeight = resizeShape.height();

    startPointerX = e.clientX;

    startPointerY = e.clientY;

});

        h.hide();

        handles.push(h);

    }

}
function updateHandles(shape) {

    const box = shape.bbox();

    handles[0].center(box.x, box.y);

    handles[1].center(box.x2, box.y);

    handles[2].center(box.x, box.y2);

    handles[3].center(box.x2, box.y2);

    handles.forEach(h => h.show());

}
function hideHandles() {

    handles.forEach(h => h.hide());

}
window.addEventListener("pointermove", (e) => {

    if (!resizing) return;

    if (!resizeShape) return;

    if (resizeHandle !== 3) return;

    const dx = e.clientX - startPointerX;

    const dy = e.clientY - startPointerY;

    resizeShape.width(Math.max(20, startWidth + dx));

    resizeShape.height(Math.max(20, startHeight + dy));

    updateHandles(resizeShape);

});
window.addEventListener("pointerup", () => {

    resizing = false;

    resizeShape = null;

});
