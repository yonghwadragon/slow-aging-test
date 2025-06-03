import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon_antlers_pair.ico" />

        {/* ✅ GA4 삽입 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-44KKB5KYPW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44KKB5KYPW');
            `,
          }}
        />

        {/* ✅ Google AdSense 스크립트 삽입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9720816639692845"
          crossOrigin="anonymous"
        ></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}