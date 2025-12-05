
import './globals.css';
import type { Metadata } from 'next';
import { AppProvider } from './context/AppContext';
import { Navbar } from './ui/Navbar';

export const metadata: Metadata = {
  title: 'Cosmos Explorer',
  description: 'Интерактивный сайт про космос с избранным и тёмной темой.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
