import * as React from 'react';
import { LayoutProps } from '@pankod/refine-core';
import Header from '../components/Header';

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
