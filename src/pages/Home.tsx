import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent } from 'styled-components';
import { Box, ColorBeam, Yobareru } from '../art';
import { Layout } from '../components';
import { canvasHeight, canvasWidth, flamePadding, NeuCanvas, NeuDiv } from '../theme';

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

  return (
    <Layout>
      <NeuCanvas inset style={{ display: 'flex', justifyContent: 'center', padding: flamePadding, paddingBottom: 0 }}>
        {/* <ColorBeam height={canvasHeight} width={canvasWidth} /> */}
        <Box height={canvasHeight} width={canvasWidth} />
      </NeuCanvas>
    </Layout>
  );
};
