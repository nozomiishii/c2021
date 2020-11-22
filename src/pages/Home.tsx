import React, { useState } from 'react';

interface S {
  colorBeam: boolean;
}

const init = {
  colorBeam: false,
};
export const Home: React.FC = () => {
  const [state, setState] = useState<S>(init);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Nozomi ishii</div>
        <div></div>
      </div>
    </div>
  );
};
