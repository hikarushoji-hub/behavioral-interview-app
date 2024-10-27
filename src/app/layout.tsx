// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Behavioral Interview App',
  description: '行動面接模擬ツール',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Behavioral Interview App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Behavioral Interview App</p>
        </footer>
      </body>
    </html>
  );
}
