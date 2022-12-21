import type { PropsWithChildren } from 'react';
import '../styles/globals.css';

const RootLayout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
