import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <style>{`
          /* Force white text on all blue backgrounds */
          [style*="backgroundColor: #0057B8"] h1,
          [style*="backgroundColor: #0057B8"] h2,
          [style*="backgroundColor: #0057B8"] h3,
          [style*="backgroundColor: #0057B8"] h4,
          [style*="backgroundColor: #0057B8"] h5,
          [style*="backgroundColor: #0057B8"] h6,
          [style*="backgroundColor: #0057B8"] p,
          [style*="backgroundColor:#0057B8"] h1,
          [style*="backgroundColor:#0057B8"] h2,
          [style*="backgroundColor:#0057B8"] h3,
          [style*="backgroundColor:#0057B8"] h4,
          [style*="backgroundColor:#0057B8"] h5,
          [style*="backgroundColor:#0057B8"] h6,
          [style*="backgroundColor:#0057B8"] p,
          [style*="background: linear-gradient(135deg, var(--primary-blue)"] h1,
          [style*="background: linear-gradient(135deg, var(--primary-blue)"] h2,
          [style*="background: linear-gradient(135deg, var(--primary-blue)"] h3,
          [style*="background: linear-gradient(135deg, var(--primary-blue)"] p {
            color: #FFFFFF !important;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
