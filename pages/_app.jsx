import '../styles/globals.css';
import "../styles/surya.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
