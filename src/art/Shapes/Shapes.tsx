import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

// const SVG = styled.svg`
//   .rect {
//     stroke-dasharray: 792;
//     stroke-dashoffset: -792;
//     animation: ${() => draw(792)} 3s infinite;
//     transform-origin: 50% 50%;
//   }
// `;

interface P {
  offset: number;
}

const draw = (offset: number) => {
  return keyframes`
    0% {
      stroke-dashoffset: ${-offset};
      transform: rotate(0deg)
    }
    100% {
      stroke-dashoffset: 0;
      transform: rotate(360deg);
    }
  `;
};

const baseStyle = css<P>`
  stroke-dasharray: ${({ offset }) => offset};
  stroke-dashoffset: ${({ offset }) => -offset};
  animation: ${({ offset }) => draw(offset)} 3s infinite alternate-reverse;
  transform-origin: 50% 50%;
`;

const Circle = styled.circle<P>`
  ${baseStyle}
`;

const Rect = styled.rect<P>`
  ${baseStyle}
`;

const Star = styled.path<P>`
  ${baseStyle}
`;

const Triangle = styled.path<P>`
  ${baseStyle}
`;

export const Shapes: React.FC = () => {
  const [rectOffset, setRectOffset] = useState(0);
  const [circleOffset, setCircleOffset] = useState(0);
  const [starOffset, setStarOffset] = useState(0);
  const [triangleOffset, setTriangleOffset] = useState(0);

  const rect = useRef<SVGRectElement>(null);
  const circle = useRef<SVGCircleElement>(null);
  const star = useRef<SVGPathElement>(null);
  const triangle = useRef<SVGPathElement>(null);

  useEffect(() => {
    setRectOffset(rect.current.getTotalLength());
    setCircleOffset(circle.current.getTotalLength());
    setStarOffset(star.current.getTotalLength());
    setTriangleOffset(triangle.current.getTotalLength());
  }, []);
  return (
    <div>
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect
          offset={rectOffset}
          ref={rect}
          x="41"
          y="41"
          width="198"
          height="198"
          stroke="#FF0101"
          strokeWidth="2"
        />
        <Circle
          offset={circleOffset}
          ref={circle}
          cx="141"
          cy="140"
          r="99"
          stroke="#C9CD05"
          strokeWidth="2"
        />
        <Triangle
          offset={triangleOffset}
          ref={triangle}
          d="M55.1295 189L140 42L224.87 189H55.1295Z"
          stroke="#0168A2"
          strokeWidth="2"
        />
        <Star
          offset={starOffset}
          ref={star}
          d="M83.2085 61.8012L139.497 102.697L140.085 103.124L140.673 102.697L196.961 61.8012L175.461 127.972L175.236 128.663L175.824 129.091L232.113 169.987L162.536 169.987L161.81 169.987L161.585 170.678L140.085 236.849L118.585 170.678L118.36 169.987L117.634 169.987L48.0569 169.987L104.346 129.091L104.933 128.663L104.709 127.972L83.2085 61.8012Z"
          stroke="#35A80D"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
