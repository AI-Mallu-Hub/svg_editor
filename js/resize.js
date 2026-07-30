const MIN_WIDTH = 40;
const MIN_HEIGHT = 40;
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

        const h = svg.circle(24)
            .fill("#ffffff")
            .stroke({
                color: "#1e88e5",
                width: 3
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

    startShapeX = resizeShape.x();
    startShapeY = resizeShape.y();

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

if (dragging) return;  

    const dx = e.clientX - startPointerX;
const dy = e.clientY - startPointerY;

let x = startShapeX;
let y = startShapeY;

let w = startWidth;
let h = startHeight;

switch (resizeHandle) {

    case 0: // Top Left
        x = startShapeX + dx;
        y = startShapeY + dy;
        w = startWidth - dx;
        h = startHeight - dy;
        break;

    case 1: // Top Right
        y = startShapeY + dy;
        w = startWidth + dx;
        h = startHeight - dy;
        break;

    case 2: // Bottom Left
        x = startShapeX + dx;
        w = startWidth - dx;
        h = startHeight + dy;
        break;

    case 3: // Bottom Right
        w = startWidth + dx;
        h = startHeight + dy;
        break;
}

w = Math.max(MIN_WIDTH, w);
h = Math.max(MIN_HEIGHT, h);

resizeShape.move(x, y);
resizeShape.width(w);
resizeShape.height(h);

updateHandles(resizeShape);
    
});
    
window.addEventListener("pointerup", () => {

    resizing = false;

    resizeShape = null;

});
