import React from 'react';
import { Yobareru } from '../art';
import { Layout } from '../components';
import { canvasHeight, canvasWidth, flamePadding, NeuCanvas } from '../theme';

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <NeuCanvas inset style={{ display: 'flex', justifyContent: 'center', padding: flamePadding }}>
        <Yobareru height={canvasHeight} width={canvasWidth} />
      </NeuCanvas>
    </Layout>
  );
};
