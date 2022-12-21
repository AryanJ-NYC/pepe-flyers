import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import '../styles/globals.css';

const RootLayout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="px-8 py-4">
          <Image alt="Pepe Flyers logo" height="125" src="/square-logo.png" width="121" />
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
