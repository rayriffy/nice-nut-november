import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2G2JHXEZW8"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-2G2JHXEZW8');
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "3xn54cwmzo");
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default NextDocument
