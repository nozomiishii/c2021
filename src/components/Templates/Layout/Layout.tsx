import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { IconButton, NeuDiv, NeuLogo, NeuNav } from '../../../theme';

export const Layout: React.FC = ({ children }) => {
  let { pathname } = useLocation();
  // let param = useParams<any>();
  console.log('🚀 ~ file: Layout.tsx ~ line 10 ~ param', pathname);
  // useEffect(() => {
  //   console.log('id', id);
  // }, );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
          marginLeft: 60,
          marginRight: 60,
        }}
      >
        <NeuLogo to="/">
          <h1 style={{ fontFamily: 'Rubik Mono One', fontSize: 38, overflow: 'none' }}>🦄NOZOMI</h1>
        </NeuLogo>
        <div>
          <NeuNav inset={pathname === '/'} to="/">
            HOME
          </NeuNav>

          <NeuNav inset={pathname === '/about'} to="/about">
            ABOUT
          </NeuNav>
          <NeuNav inset={pathname === '/contact'} to="/contact">
            CONTACT
          </NeuNav>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: '70vh', marginLeft: 60, marginRight: 60 }}>{children}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 40,
          marginLeft: 60,
          marginRight: 60,
        }}
      >
        <p>© 2021 NOZOMI ISHII</p>
        <div>
          <IconButton>
            <p>👨🏻‍🚀</p>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
