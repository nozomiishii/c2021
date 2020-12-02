import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { IconButton, NeuDiv, NeuLogo, NeuNav } from '../../../theme';

export const Layout: React.FC = ({ children }) => {
  let { pathname } = useLocation();
  // let param = useParams<any>();
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
        <div style={{ display: 'flex' }}>
          <NeuNav inset={pathname === '/'}>
            <Link to="/">HOME</Link>
          </NeuNav>
          <NeuNav inset={pathname === '/about'}>
            <Link to="/about"> ABOUT</Link>
          </NeuNav>
          <NeuNav inset={pathname === '/contact'}>
            <Link to="/contact"> CONTACT</Link>
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
