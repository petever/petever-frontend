import React, { useEffect, useState } from 'react';
import Header from '../Header';

type AppLayoutProps = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { AppLayout };
