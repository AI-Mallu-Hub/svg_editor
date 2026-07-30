
const rectBtn = document.getElementById("rectTool");
const selectBtn = document.getElementById("selectTool");
const deleteBtn = document.getElementById("deleteTool");

let currentTool = "select";

function highlightTool(button) {

    document.querySelectorAll(".toolbar button").forEach(btn => {
        btn.style.background = "#f2f2f2";
    });

    button.style.background = "#90caf9";
}

selectBtn.onclick = () => {

    currentTool = "select";

    highlightTool(selectBtn);

    enableDragging(true);

};

rectBtn.onclick = () => {

    currentTool = "rect";

    highlightTool(rectBtn);

    enableDragging(false);

};

highlightTool(selectBtn);
