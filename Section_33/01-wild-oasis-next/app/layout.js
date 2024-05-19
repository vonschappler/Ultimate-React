import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
