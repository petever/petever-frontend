import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Header from '../Header';
import Footer from '../Footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { AppLayout };
