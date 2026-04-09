import '../styles/globals.css';
import "../styles/surya.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LCPB5SB48B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LCPB5SB48B');
        `}
      </Script>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}