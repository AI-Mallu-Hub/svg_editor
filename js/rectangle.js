function enableDragging(enable) {

    svg.each(function () {

        if (this.type === "rect") {

            this.draggable(enable);

        }

    });

}

svg.on("click", (e) => {

    if (currentTool === "select") {

        deselectAll();

        return;

    }

    if (currentTool !== "rect") return;

    const p = svg.point(e.clientX, e.clientY);

    const rect = svg.rect(120, 80)
        .move(p.x - 60, p.y - 40)
        .radius(8)
        .fill("#64b5f6")
        .stroke({
            color: "#1565c0",
            width: 2
        });

    rect.draggable(false);

    rect.on("click", function (ev) {

        ev.stopPropagation();

        if (currentTool !== "select") return;

        this.front();

        selectShape(this);

    });

});
