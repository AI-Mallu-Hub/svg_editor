const canvas = document.getElementById("canvas");
const rectTool = document.getElementById("rectTool");

canvas.setAttribute("viewBox", "0 0 1000 1000");

let currentTool = "select";

let drawing = false;

let startX = 0;
let startY = 0;

let currentRect = null;

rectTool.onclick = () => {

    currentTool = "rect";

    rectTool.style.background = "#8ec5ff";

};

function getPoint(e){

    const svgPoint = canvas.createSVGPoint();

    const touch = e.touches ? e.touches[0] : e;

    svgPoint.x = touch.clientX;
    svgPoint.y = touch.clientY;

    return svgPoint.matrixTransform(
        canvas.getScreenCTM().inverse()
    );

}

canvas.addEventListener("pointerdown",(e)=>{

    if(currentTool!=="rect") return;

    drawing=true;

    const p=getPoint(e);

    startX=p.x;
    startY=p.y;

    currentRect=document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
    );

    currentRect.setAttribute("x",startX);

    currentRect.setAttribute("y",startY);

    currentRect.setAttribute("width",0);

    currentRect.setAttribute("height",0);

    currentRect.setAttribute("fill","#4da3ff55");

    currentRect.setAttribute("stroke","#1976d2");

    currentRect.setAttribute("stroke-width","2");

    canvas.appendChild(currentRect);

});

canvas.addEventListener("pointermove",(e)=>{

    if(!drawing) return;

    const p=getPoint(e);

    const w=p.x-startX;

    const h=p.y-startY;

    currentRect.setAttribute("width",Math.abs(w));

    currentRect.setAttribute("height",Math.abs(h));

    currentRect.setAttribute("x",w<0?p.x:startX);

    currentRect.setAttribute("y",h<0?p.y:startY);

});

canvas.addEventListener("pointerup",()=>{

    drawing=false;

    currentRect=null;

});
document.getElementById("rectTool").onclick = function () {
    alert("Rectangle Tool Clicked");
};
