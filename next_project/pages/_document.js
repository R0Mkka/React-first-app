import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Разработка и развитие сайтов | Digital heroes club</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="../static/icon/icon.ico" />
          <style dangerouslySetInnerHTML={{__html: `
            body {
              margin: 0;
              padding: 0;
              font-family: "SourceSansPro", sans-serif;
              background-color: #edf0f4;
              overflow-y: scroll;
            }

            h1 {
              font-size: 60px;
              font-weight: 300;
            }

            ul { list-style: none; }

            a {
              outline: none;
              text-decoration: none;
            }

            @font-face {
            	font-family: 'SourceSansPro';
            	src: url('../static/fonts/SourceSansPro-Regular.eot');
            	src: local('☺'), url('../static/fonts/SourceSansPro-Regular.woff') format('woff'),
            	url('../static/fonts/SourceSansPro-Regular.ttf') format('truetype'),
            	url('../static/fonts/SourceSansPro-Regular.svg') format('svg');
            	font-weight: normal;
            	font-style: normal;
            }

            @font-face {
            	font-family: 'SourceSansPro';
            	src: url('../static/fonts/SourceSansPro-Light.eot');
            	src: local('☺'), url('../static/fonts/SourceSansPro-Light.woff') format('woff'),
            	url('../static/fonts/SourceSansPro-Light.ttf') format('truetype'),
            	url('../static/fonts/SourceSansPro-Light.svg') format('svg');
            	font-weight: 300;
            	font-style: normal;
            }

            @font-face {
            	font-family: 'SourceSansPro';
            	src: url('../static/fonts/SourceSansPro-ExtraLight.eot');
            	src: local('☺'), url('../static/fonts/SourceSansPro-ExtraLight.woff') format('woff'),
            	url('../static/fonts/SourceSansPro-ExtraLight.ttf') format('truetype'),
            	url('../static/fonts/SourceSansPro-ExtraLight.svg') format('svg');
            	font-weight: 200;
            	font-style: normal;
            }

            @font-face {
            	font-family: 'SourceSansPro';
            	src: url('../static/fonts/SourceSansPro-Bold.eot');
            	src: local('☺'), url('../static/fonts/SourceSansPro-Bold.woff') format('woff'),
            	url('../static/fonts/SourceSansPro-Bold.ttf') format('truetype'),
            	url('../static/fonts/SourceSansPro-Bold.svg') format('svg');
            	font-weight: 700;
            	font-style: normal;
            }
          `}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="../static/js/script.js" />
        </body>
      </html>
    )
  }
}
