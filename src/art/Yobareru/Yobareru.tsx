import p5 from 'p5';
import React from 'react';
import Sketch from 'react-p5';

interface P {
  width: number;
  height: number;
  text?: string;
}

interface Circle {
  x: number;
  y: number;
  r: number;
  speedX: number;
  speedY: number;
  colorR: number;
  colorG: number;
  colorB: number;
  alpha: number;
  move: () => void;
  show: () => void;
}

export const Yobareru: React.FC<P> = ({ height, width, text = '404' }) => {
  const circles: Circle[] = [];
  let circle: Circle;

  const windowResized = (p: p5) => {
    p.resizeCanvas(width, height);
  };
  const setup = (p: p5, canvasParentRef: Element) => {
    p.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p: p5) => {
    p.background(38, 38, 38);
    const title = {
      name: text,
      x: width * 0.5,
      y: height * 0.4,
      height: 38,
    };
    p.textAlign(p.CENTER);
    p.textSize(title.height);
    p.text(title.name, title.x, title.y);
    circles.forEach((circle, index) => {
      circle.show();
      if (
        circle.x + circle.r < 0 ||
        circle.x - circle.r > width ||
        circle.y + circle.r < 0 ||
        circle.y - circle.r > height
      ) {
        circles.splice(index, 1);
      } else {
        circle.move();
      }
    });
  };

  const mouseMoved = (p: p5) => {
    class Circle {
      x;
      y;
      r;
      speedX;
      speedY;
      colorR;
      colorG;
      colorB;
      alpha;
      constructor(
        x: number,
        y: number,
        r: number,
        speedX: number,
        speedY: number,
        colorR: number,
        colorG: number,
        colorB: number,
        alpha: number,
      ) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speedX = speedX;
        this.speedY = speedY;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
        this.alpha = alpha;
      }
      move() {
        if (p.floor(this.x) == width || p.floor(this.y) == height) {
          this.speedX = this.speedX * -1;
          this.speedY = this.speedY * -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      show() {
        p.stroke(this.colorB, this.colorR, this.colorG);
        p.fill(this.colorR, this.colorG, this.colorB, this.alpha);
        p.ellipse(this.x, this.y, this.r * 2);
      }
    }
    circle = new Circle(
      p.mouseX,
      p.mouseY,
      p.random(46),
      p.random(-2, 0),
      p.random(-2, 1),
      p.random(255),
      p.random(255),
      p.random(255),
      p.random(255),
    );
    circles.push(circle);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} mouseMoved={mouseMoved} />;
};
