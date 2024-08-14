import '@/app/_styles/globals.css'  ;
import {Neuton} from 'next/font/google'
import Navbar from "./_components/Navbar";
import Footer from './_components/Footer';


export const metadata = {
  title: "My Real Estate Website",
};


const newton = Neuton({
   weight: ['200', '300', '400', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={newton.className}>
      <body>
        <main className="max-w-[1260px] mx-auto">
          <Navbar />
        </main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
