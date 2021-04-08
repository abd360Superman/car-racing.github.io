canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.png";
car2_x = 10;
car2_y = 100;

background_img = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    } else if(keyPressed == '40') {
        car1_down();
        console.log("down arraow key");
    } else if(keyPressed == '37') {
        car1_left();
        console.log("left arrow key");
    } else if(keyPressed = '39') {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87') {
        car2_up();
        console.log("w(up arrow) key");
    } else if(keyPressed == '83') {
        car2_down();
        console.log("s(down arraow) key");
    } else if(keyPressed == '65') {
        car2_left();
        console.log("a(left arrow) key");
    } else if(keyPressed = '68') {
        car2_right();
        console.log("d(right arrow) key");
    }
    if(car1_x > 700) {
        console.log("car 1 wins");
        document.getElementById("game_status").innerHTML = "Car 1 WINS!!!";
    }
    if(car2_x > 700) {
        console.log("car 2 wins");
        document.getElementById("game_status").innerHTML = "Car 2 WINS!!!";
    }
}
function car1_up() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When Car1's up arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down() {
    if(car1_y <= 520) {
        car1_y = car1_y + 10;
        console.log("When Car1's down arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left() {
    if(car1_x >= 0) {
        car1_x = car1_x - 10; 
        console.log("When Car1's left arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right() {
    if(car1_x <= 675) {
        car1_x = car1_x + 10;
        console.log("When Car1's right arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up() {
    if(car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When Car2's w(up arrow) is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down() {
    if(car2_y <= 520) {
        car2_y = car2_y + 10;
        console.log("When Car2's s(down arrow) is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left() {
    if(car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When Car2's a(left arrow) is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right() {
    if(car2_x <= 675) {
        car2_x = car2_x + 10;
        console.log("When Car2's d(right arrow) is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}