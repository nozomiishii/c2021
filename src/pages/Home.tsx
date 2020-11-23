import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';

interface S {
  colorBeam: boolean;
}

const init = {
  colorBeam: false,
};
export const Home: React.FC = () => {
  const [state, setState] = useState<S>(init);
  return <Layout>home</Layout>;
};
