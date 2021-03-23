import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="application-name" content="NOZOMI ISHII" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="Dance + Code + Art | Front-end engineer who loves dancing and 3D art."
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/icon-16x16.png" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="format-detection" content="telephone=no" />

          {/* windows config */}
          <meta name="msapplication-square70x70logo" content="/static/site-tile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/static/site-tile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/static/site-tile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/static/site-tile-310x310.png" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* safari config */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="NOZOMI ISHII" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#fff" />

          {/* SNS */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://nozomiishii.jp" />
          <meta name="twitter:title" content="NOZOMI ISHII" />
          <meta
            name="twitter:description"
            content="Dance + Code + Art | Front-end engineer who loves dancing and 3D art."
          />
          <meta
            name="twitter:image"
            content="https://nozomiishii.jp/static/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@nozomiishii_jp" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="NOZOMI ISHII" />
          <meta
            property="og:description"
            content="Dance + Code + Art | Front-end engineer who loves dancing and 3D art."
          />
          <meta property="og:site_name" content="NOZOMI ISHII" />
          <meta property="og:url" content="https://nozomiishii.jp" />
          <meta
            property="og:image"
            content="https://nozomiishii.jp/static/icons/apple-touch-icon.png"
          />
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
