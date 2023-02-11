// save this file as sketch.js
// Sketch One

var w = document.getElementById("c1").offsetWidth;
var h = document.getElementById("c1").offsetHeight;
var x;
var y;
var s = function (p) { // p could be any variable name

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;

    p.setup = function () {
        p.createCanvas(w, h);

        img1 = p.loadImage('images/01.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img1,x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c1").offsetWidth;
        h = document.getElementById("c1").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img2 = p.loadImage('images/02.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img2, x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c2").offsetWidth;
        h = document.getElementById("c2").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c2');


// Sketch Three
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img3 = p.loadImage('images/03.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);


        p.image(img3, x, y, 50, 100)
    };

    p.windowResized = function () {
        w = document.getElementById("c3").offsetWidth;
        h = document.getElementById("c3").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c3');

// Sketch Four
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img4 = p.loadImage('images/04.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img4, x, y, 50, 100)
    };

    p.windowResized = function () {
        w = document.getElementById("c4").offsetWidth;
        h = document.getElementById("c4").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c4');

// Sketch Five
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img5 = p.loadImage('images/05.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img5, x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c5").offsetWidth;
        h = document.getElementById("c5").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c5');


// Sketch Six
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img6 = p.loadImage('images/06.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img6, x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c6").offsetWidth;
        h = document.getElementById("c6").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c6');

// Sketch Seven
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img7 = p.loadImage('images/07.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img7,x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c7").offsetWidth;
        h = document.getElementById("c7").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c7');

// Sketch Six
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img8 = p.loadImage('images/08.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);


        p.image(img8,x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c8").offsetWidth;
        h = document.getElementById("c8").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c8');

// Sketch Nine
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img9 = p.loadImage('images/09.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img9, x, y)
    };

    p.windowResized = function () {
        w = document.getElementById("c9").offsetWidth;
        h = document.getElementById("c9").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c9');

// Sketch Ten
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img10 = p.loadImage('images/10.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img10, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c10").offsetWidth;
        h = document.getElementById("c10").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c10');

// Sketch Eleven
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img11 = p.loadImage('images/11.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img11, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c11").offsetWidth;
        h = document.getElementById("c11").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c11');

// Sketch Twelve
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img12 = p.loadImage('images/12.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img12, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c12").offsetWidth;
        h = document.getElementById("c12").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c12');

// Sketch Thirteen
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img1 = p.loadImage('images/01.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img1, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c13").offsetWidth;
        h = document.getElementById("c13").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c13');

// Sketch Fourteen
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img2 = p.loadImage('images/02.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img2, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c14").offsetWidth;
        h = document.getElementById("c14").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c14');

// Sketch Fifteen
var t = function (p) {
    p.setup = function () {
        p.createCanvas(w, h);
        img3 = p.loadImage('images/03.png');
    };

    p.draw = function () {
        p.background('#f1f1f1');
        p.imageMode(p.CENTER);


        x = p.map(p.mouseX, 0, p.width, p.width / 2 - p.width / 16, p.width / 2 + p.width / 16);
        y = p.map(p.mouseY, 0, p.height, p.height / 2 - p.height / 16, p.height / 2 + p.height / 16);



        p.image(img3, x, y)
    };


    p.windowResized = function () {
        w = document.getElementById("c15").offsetWidth;
        h = document.getElementById("c15").offsetHeight;
        p.createCanvas(w, h);
        p.background(0);
    }
};
var myp5 = new p5(t, 'c15');