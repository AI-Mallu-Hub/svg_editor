
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
