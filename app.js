// =============================
// SVG Editor - Part 4
// Select + Drag
// =============================

const svg = SVG("#canvas");

svg.viewbox(0,0,1000,1000);

const rectBtn=document.getElementById("rectTool");
const selectBtn=document.getElementById("selectTool");

let tool="select";

highlight(selectBtn);

function highlight(btn){

document.querySelectorAll(".toolbar button").forEach(b=>{

b.style.background="#f2f2f2";

});

btn.style.background="#90caf9";

}

selectBtn.onclick=()=>{

tool="select";

highlight(selectBtn);

};

rectBtn.onclick=()=>{

tool="rect";

highlight(rectBtn);

};

svg.on("click",(e)=>{

if(tool!=="rect") return;

const p=svg.point(e.clientX,e.clientY);

const r=svg.rect(120,80)
.move(p.x-60,p.y-40)
.radius(8)
.fill("#64b5f6")
.stroke({
color:"#1565c0",
width:2
});

r.draggable();

r.on("click",function(ev){

ev.stopPropagation();

if(tool!=="select") return;

this.front();

});

});
