// ===== SVG EDITOR - PART 3 =====

const svg = document.getElementById("canvas");
const rectTool = document.getElementById("rectTool");

svg.setAttribute("viewBox", "0 0 1000 1000");

let currentTool = "select";

// Tool Selection
rectTool.addEventListener("click", () => {
    currentTool = "rect";

    // Reset all toolbar buttons
    document.querySelectorAll(".toolbar button").forEach(btn => {
        btn.style.background = "#f2f2f2";
    });

    // Highlight selected tool
    rectTool.style.background = "#90caf9";
});

// Create Rectangle
svg.addEventListener("click", function (e) {

    if (currentTool !== "rect") return;

    const rect = svg.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 1000;
    const y = ((e.clientY - rect.top) / rect.height) * 1000;

    const newRect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    newRect.setAttribute("x", x - 40);
    newRect.setAttribute("y", y - 30);
    newRect.setAttribute("width", 80);
    newRect.setAttribute("height", 60);

    newRect.setAttribute("rx", 6);

    newRect.setAttribute("fill", "#64b5f6");
    newRect.setAttribute("stroke", "#1565c0");
    newRect.setAttribute("stroke-width", "2");

    svg.appendChild(newRect);

});
