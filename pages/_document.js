import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:title" content="ELS: Empower Learning System" />
        <meta
          property="og:description"
          content="ELS learning system for refugees in Malaysia."
        />
        <meta
          property="og:image"
          content="https://www.elsystem.org/images/logo.png"
        />
        <meta property="og:url" content="https://www.elsystem.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="ELS: Empower Learning System" />
        <meta
          name="twitter:description"
          content="ELS learning system for refugees in Malaysia."
        />
        <meta
          name="twitter:image"
          content="https://www.elsystem.org/images/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/hsc1kgw.css"
          as="font"
        />
        {/* <link
          rel="preload"
          href="/fonts/MYRIADPRO-REGULAR.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MYRIADPRO-BOLD.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
