import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent } from 'styled-components';
import { ColorBeam } from '../art';
import { Layout } from '../components';
import { NeuCanvas, NeuDiv } from '../theme';

interface S {
  colorBeam: boolean;
}
interface P {
  inset?: boolean;
  borderColor?: string;
}

const init = {
  colorBeam: false,
};
export const Home: React.FC = () => {
  const [state, setState] = useState<S>(init);
  // const [width, setWidth] = useState('');
  const layoutPadding = 60;
  const flamePadding = 4;
  const canvasWidth = window.innerWidth - layoutPadding * 2 - flamePadding * 2;
  const canvasHeight = window.innerHeight * 0.7;
  return (
    <Layout>
      <NeuCanvas inset style={{ display: 'flex', justifyContent: 'center', padding: flamePadding }}>
        <ColorBeam height={canvasHeight} width={canvasWidth} />
      </NeuCanvas>
    </Layout>
  );
};
