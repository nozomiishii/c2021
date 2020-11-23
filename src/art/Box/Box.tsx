import p5 from 'p5';
import React from 'react';
import Sketch from 'react-p5';

interface P {
  width: number;
  height: number;
}

export const Box: React.FC<P> = ({ height, width }) => {
  let angle = 0;
  let image: p5.Image;

  const preload = (p: p5) => {
    image = p.loadImage('https://picsum.photos/400/600?random=1');
  };
  const windowResized = (p: p5) => {
    p.resizeCanvas(width, height);
  };
  const setup = (p: p5, canvasParentRef: Element) => {
    p.createCanvas(width, height, p.WEBGL).parent(canvasParentRef);
  };

  const draw = (p: p5) => {
    let dx = p.mouseX - p.width / 2;
    let dy = p.mouseY - p.height / 2;
    let v = p.createVector(dx, dy, 0);
    v.div(100);
    p.directionalLight(255, 255, 255, v);

    p.background(0);
    p.noStroke();

    p.push();
    p.rotateX(angle);
    p.rotateY(angle * 0.3);
    p.rotateZ(angle * 1.3);
    p.texture(image);
    p.box(100);
    p.pop();

    p.translate(0, 100);
    p.rotateX(p.HALF_PI);
    p.ambientMaterial(10);
    p.plane(500, 500);

    angle -= 0.01;
  };

  return <Sketch setup={setup} draw={draw} preload={preload} windowResized={windowResized} />;
};
