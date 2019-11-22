const RAD = 10;
const CIRCLEINRADIANS = Math.PI * 2;

function getPos(canvas, event){
    let bounds = canvas.getBoundingClientRect();
    return {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top
    }
}

const Point = {
    //assume there is an x and y here although they are created on assignment
    hit: false,
    color: "#ff0000",
    detect: function (mouseX, mouseY, ctx){
        if( ( ((mouseX-RAD) <= this.x) && ((mouseX+RAD) >= this.x) ) && ( ((mouseY-RAD) <= this.y) && ((mouseY+RAD) >= this.y) ) ){//checks for collision between mouse and point(with box collision)
            this.hit = true; //yes we don't neeed hit, we can check color, this makes it more readable
            this.color = "#00ff00";
            this.draw(ctx);
        }
    },
    draw: function (ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, RAD, 0, CIRCLEINRADIANS, true);
        ctx.fill();
    }
}

function drawMouse(mouseX, mouseY, ctx){
    ctx.fillStyle = "#0000ff";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, RAD, 0, CIRCLEINRADIANS, true);
    ctx.fill();
}

function Tutorial(){
    var canvas = document.querySelector("#tutlvl");
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;

    canvas.requestPointerLock();
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#faeddc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var points = [];
    points.push(Object.assign({x: 50, y: 50}, Point));
    points.push(Object.assign({x: 100, y: 100}, Point));
    points.push(Object.assign({x: 150, y: 150}, Point));
    points.push(Object.assign({x: 150, y: 50}, Point));

    for(let i = 0; i < points.length; i++){
        points[i].draw(ctx);
    }

    canvas.addEventListener('mousemove', function(event){
        mousePos = getPos(canvas, event);
        drawMouse(mousePos.x, mousePos.y, ctx);

        let hit = 0;
        for(let i = 0; i < points.length; i++){
            points[i].detect(mousePos.x, mousePos.y, ctx);
            if(points[i].hit){
                hit++;
            }
            if(hit == points.length){
                ctx.fillStyle = "#00ff00";
                ctx.font = "30px Arial";
                ctx.fillText("You Win!", 360, 50);
            }
        }
    }, false);
}

Tutorial();