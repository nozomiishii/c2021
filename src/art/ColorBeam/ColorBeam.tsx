import p5 from 'p5';
import React from 'react';
import Sketch from 'react-p5';

interface P {
  width?: number;
  height?: number;
}

export const ColorBeam: React.FC<P> = ({
  height = window.innerHeight,
  width = window.innerWidth,
}) => {
  const beams = [];
  let beam;

  const windowResized = (p: p5) => {
    p.resizeCanvas(width, height);
  };
  const setup = (p: p5, canvasParentRef: Element) => {
    p.createCanvas(width, height).parent(canvasParentRef);
  };

  const mousePressed = (p: p5) => {
    class Beam {
      x;
      y;
      speed;
      constructor(x: number, y: number, speed: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
      }
      shoot() {
        p.stroke(6);
        p.fill(p.random(255));
        p.ellipse(this.x, this.y, 5, 20);
        this.y += this.speed;
      }
    }

    beam = new Beam(p.mouseX, p.mouseY, -3);
    beams.push(beam);
  };

  const draw = (p: p5) => {
    const title = {
      name: 'Page Not Found',
      x: width * 0.5,
      y: height * 0.4,
      height: 32,
    };

    p.background(0);
    p.textSize(46);
    p.fill(255);
    p.textAlign(p.CENTER);

    if (p.mouseX) {
      p.text('👨🏻‍🚀', p.mouseX, p.mouseY);
    } else {
      p.text('👨🏻‍🚀', width / 2, height * 0.6);
    }

    p.fill(255);
    p.textSize(title.height);
    p.text(title.name, title.x, title.y);
    if (beams.length) {
      for (let i = 0; i < beams.length; i++) {
        beams[i].shoot();
        const dx = Math.abs(beams[i].x - title.x);
        const dy = Math.abs(beams[i].y - title.y);
        if (dx < p.textWidth(title.name) / 2 && dy < title.height) {
          p.fill(p.random(255), p.random(255), p.random(255));
          p.textSize(title.height);
          p.text(title.name, title.x, title.y);
        }
        if (beams[i].y < 0) {
          beams.splice(i, 1);
        }
      }
    }
  };

  return (
    <Sketch setup={setup} draw={draw} mousePressed={mousePressed} windowResized={windowResized} />
  );
};
