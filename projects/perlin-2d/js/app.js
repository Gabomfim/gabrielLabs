let scale = 200;
let h = 0;
let s = 0;
let v = 0;

function setup() {
    createCanvas(1200, 1200);
    noStroke();
    colorMode(RGB, 100);
    //ver cores do mac
    
}

function draw() {
    for(let x = 0; x< width; x+=10){
        for(let y = 0; y< height; y+=10){
            let rnd = noise(x/scale, y/scale);
            if(rnd < 0.2){//deep water
                r = 40;
                g = 59;
                b = 158;
            }else if(rnd < 0.4){//water
                r = 59;
                g = 78;
                b = 177;
            }else if(rnd < 0.5){//sand
                r = 188;
                g = 142;
                b = 22;
            }else if(rnd < 0.6){//grass
                r = 42;
                g = 121;
                b = 45;
            }else{//floresta
                r = 11;
                g = 69;
                b = 13;
                
            }
            fill(color(r,g,b));
            rect(x,y,10,10);
        }
    }
    //rect(0, 0, 55, 55);
}
