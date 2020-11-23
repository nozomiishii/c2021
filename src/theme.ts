import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, css } from 'styled-components';

export enum Color {
  BG_COLOR = '#EEF0F4',
  DARK_FONT = '#383539',
  ERROR = '#ec524b',
  GREEN = '#A9DC76',
}

export const GlobalStyle = createGlobalStyle`
  *{
		margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style:none;
    user-select: none;
    color: ${Color.DARK_FONT};
  }
	body{
		min-height: 100vh;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    /* font-family: 'Rubik Mono One', sans-serif; */
    /* font-family: 'Kosugi Maru', sans-serif; */
    background-color:${Color.BG_COLOR};

	}
`;

export const layoutPadding = 60;
export const flamePadding = 4;
export const canvasWidth = window.innerWidth - layoutPadding * 2 - flamePadding * 2;
export const canvasHeight = window.innerHeight * 0.7;

export const Neumorphism = {
  BASE: Color.BG_COLOR,
  LIGHT: '#FCFEFF',
  SHADOW: '#E0E2E5',
};
interface P {
  inset?: boolean;
  borderColor?: string;
}

const boxShadow = ({ inset = false }) => {
  return inset
    ? css`
        box-shadow: inset 4px 4px 5px ${Neumorphism.SHADOW}, inset -6px -6px 14px ${Neumorphism.LIGHT};
      `
    : css`
        box-shadow: 4px 4px 5px ${Neumorphism.SHADOW}, -6px -6px 14px ${Neumorphism.LIGHT};
      `;
};

const highBoxShadow = ({ inset = false }) => {
  return inset
    ? css`
        box-shadow: inset 8px 8px 10px ${Neumorphism.SHADOW}, inset -12px -12px 28px ${Neumorphism.LIGHT};
      `
    : css`
        box-shadow: 8px 8px 10px ${Neumorphism.SHADOW}, -12px -12px 28px ${Neumorphism.LIGHT};
      `;
};

const border = ({ borderColor = Neumorphism.SHADOW }) => {
  return css`
    border: 1px solid ${borderColor};
  `;
};

export const NeuDiv = styled.div<P>`
  background: ${Neumorphism.BASE};
  border-radius: 3px;
  ${border}
  ${boxShadow}
`;

export const NeuCanvas = styled.div<P>`
  background: ${Neumorphism.BASE};
  border-radius: 3px;
  ${border}
  ${boxShadow}
  canvas {
    border-radius: 3px;
  }
`;

export const NeuLogo = styled(Link)<P>`
  background: ${Neumorphism.BASE};
  width: 320px;
  padding: 10px 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  ${border}
  ${highBoxShadow}
  &:hover {
    border: 1px solid ${Color.GREEN};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    box-shadow: inset 8px 8px 10px ${Neumorphism.SHADOW}, inset -12px -12px 28px ${Neumorphism.LIGHT};
  }
`;

export const NeuNav = styled(Link)<P>`
  background: ${Neumorphism.BASE};
  border-radius: 8px;
  padding: 10px 20px;
  margin-left: 8px;
  font-weight: bold;
  width: 120px;
  margin-bottom: 20px;
  ${border}
  ${highBoxShadow}
  &:hover {
    border: 1px solid ${Color.GREEN};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    box-shadow: inset 8px 8px 10px ${Neumorphism.SHADOW}, inset -12px -12px 28px ${Neumorphism.LIGHT};
  }
`;

export const NeuButton = styled.button<P>`
  background: ${Neumorphism.BASE};
  border-radius: 15px;
  padding: 8px;
  ${border}
  border-width:2px;
  ${boxShadow}
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    box-shadow: inset 8px 8px 10px ${Neumorphism.SHADOW}, inset -12px -12px 28px ${Neumorphism.LIGHT};
  }
`;

export const IconButton = styled(NeuButton)`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
  }
  &:hover {
    border: 1px solid ${Color.GREEN};
  }
`;

export const NeuInput = styled.input<P>`
  background: ${Neumorphism.BASE};
  border-radius: 4px;
  padding: 8px;
  border-width: 2px;
  border: 1px solid ${Neumorphism.SHADOW};
  ${boxShadow}
  &:focus {
    border: 2px solid ${Color.GREEN};
    outline: none;
  }
`;

export const NeuTextarea = styled.textarea<P>`
  background: ${Neumorphism.BASE};
  border-radius: 4px;
  padding: 8px;
  border-width: 2px;
  border: 1px solid ${Neumorphism.SHADOW};
  ${boxShadow}
  &:focus {
    border: 2px solid ${Color.GREEN};
    outline: none;
  }
`;
