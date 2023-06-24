var canvas = new fabric.Canvas("myCanvas");
playerx = 10;
playery = 10;
widthblock = 30;
heightblock = 30;
var player = "";
var block = "";

function playerupdate() {
    //corregir jugador--player↓
    fabric.Image.fromURL("jugador.png", function (Img) {
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            left: playerx, top: playery
        });
        canvas.add(player);

    });
}

function new_Image(get_image) {
    //descripcion del bloque//;
    fabric.Image.fromURL(get_image, function (Img) {
        block = Img;
        block.scaleToHeight(heightblock)
        block.scaleToWidth(widthblock);
        block.set({
            left: playerx,
            top: playery,
        });
        canvas.add(block)



    });
}




window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
        console.log("left")
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "65"){
        new_Image("amarillo.png");
        console.log("a");
    }
    if (keyPressed == "72"){
        new_Image("hierba.png");
        console.log("h")
    }
    if (keyPressed == "76"){
        new_Image("ladrillo.jpg");
        console.log("l")
    }
    if (keyPressed == "77"){
        new_Image("madera.jpg");
        console.log("m")
    }
    if (keyPressed == "80"){
        new_Image("piedra.png");
        console.log("p");
    }
    if (keyPressed == "82"){
        new_Image("redstone.jpg");
        console.log("r");
    }
    if (keyPressed == "83"){
        new_Image("slime.png");
        console.log("s");
    }
    if (keyPressed == "84"){
        new_Image("terracota.jpg");
        console.log("t");
    }
    if (keyPressed == "86"){
        new_Image("verde.png");
        console.log("v");
        
    }
    if (e.shiftKey&&keyPressed=="80"){
        console.log ("shift+P presionado");
    widthblock=widthblock+10;
    heightblock=heightblock+10;
     document.getElementById ("currentheight").innerHTML=heightblock
document.getElementById ("currentwidth").innerHTML=widthblock
    }
    if (e.shiftKey&&keyPressed=="77"){
        console.log ("shift+M presionado");
        widthblock=widthblock-10;
        heightblock=heightblock-10;
        document.getElementById ("currentheight").innerHTML=heightblock
        document.getElementById ("currentwidth").innerHTML=widthblock
    }
}

function left() {
    if (playerx > 0) {
        playerx = playerx - widthblock;
        canvas.remove(player);
        playerupdate();
    }
}
function right() {
    if (playerx < 900) {
        playerx = playerx + widthblock
        canvas.remove(player);
        playerupdate();
    }
}
function up() {
    if (playery > 0) {
        playery = playery - heightblock
        canvas.remove(player)
        playerupdate();
    }
}
function down() {
    if (playery < 500) {
        playery = playery + heightblock
        canvas.remove(player)
        playerupdate();
    }
}