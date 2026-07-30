
let selectedShape = null;

function deselectAll() {

    svg.each(function () {

        if (this.type === "rect") {

            this.stroke({
                color: "#1565c0",
                width: 2
            });

        }

    });

    selectedShape = null;

}

function selectShape(shape) {

    deselectAll();

    selectedShape = shape;

    shape.stroke({
        color: "#ff3b30",
        width: 4
    });

}

deleteBtn.onclick = () => {

    console.log("Delete Clicked");

    console.log(selectedShape);

    if (!selectedShape) {

        alert("No Shape Selected");

        return;

    }

    selectedShape.remove();

selectedShape = null;
activeShape = null;

};
