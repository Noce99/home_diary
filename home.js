document.addEventListener('DOMContentLoaded', function() {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
});

function updateCanvasSize() {
    const canvases = document.querySelectorAll('canvas');
    for (let i = 0; i < canvases.length; i++) {
        canvases[i].setAttribute("width", String(window.innerWidth));
        if (canvases[i].classList.contains("single_H")){
            console.log(`${canvases[i].id} is single size!`);
            canvases[i].setAttribute("height", String(window.innerHeight * 0.15));
        }else if (canvases[i].classList.contains("double_H")){
            console.log(`${canvases[i].id} is double size!`);
            canvases[i].setAttribute("height", String(window.innerHeight * 0.30));
        }else{
            console.error(`${canvases[i].id} has no vertical size information!`)
        }
    }
}