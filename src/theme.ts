import { createGlobalStyle } from 'styled-components';

export enum Color {
  BG_COLOR = '#EEF0F4',
  DARK_FONT = '#383539',
  ERROR = '#ec524b',
}

export const GlobalStyle = createGlobalStyle`
  *{
		margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	body{
		min-height: 100vh;
    font-family: 'Kosugi Maru', sans-serif;
    background-color:${Color.BG_COLOR};
    color: ${Color.DARK_FONT};
	}
`;
