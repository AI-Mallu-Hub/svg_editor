
let handles = [];

function createHandles() {

    for (let i = 0; i < 4; i++) {

        const h = svg.circle(14)
            .fill("#ffffff")
            .stroke({
                color: "#1e88e5",
                width: 2
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
