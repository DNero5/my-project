import '@/app/_styles/globals.css';
import { Neuton } from 'next/font/google';
import Navbar from "./_components/Navbar";
import Footer from './_components/Footer';
import { CartProvider } from '@/app/_components/CartContext';

export const metadata = {
  title: "My Real Estate Website",
};

const neuton = Neuton({
  weight: ['200', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={neuton.className}>
      <body>
        <CartProvider> {/* Wrap everything with CartProvider */}
          <Navbar />
          <main className="max-w-[1260px] mx-auto">
            {children} {/* Content passed from other pages */}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
