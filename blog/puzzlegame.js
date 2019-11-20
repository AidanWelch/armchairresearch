const RAD = 10;
const CIRCLEINRADIANS = Math.PI * 2;

var point = {
    x,
    y,
    hit: false,
    color: "#ff0000",
    detect: function (mouseX, mouseY){
        if( ( ((mouseX-RAD) <= x) && ((mouseX+RAD) >= x) ) && ( ((mouseY-RAD) <= y) && ((mouseY+RAD) >= y) ) ){//checks for collision between mouse and point
            this.hit = true;
            this.color = "#00ff00";
            return true;
        } else {
            return false;
        }
    },
    draw: function (ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, RAD, 0, CIRCLEINRADIANS, true);
        ctx.fill();
    }
}

function draw(){

}

function Tutorial(){
    var canvas = document.querySelector("#tutlvl");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#faeddc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
