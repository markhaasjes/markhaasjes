import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class StyledDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400|Work+Sans:300,400|Open+Sans:300,400|Lora:400,700|Frank+Ruhl+Libre:400,500,700,900|PT+Serif:400,700"
              rel="stylesheet"
            />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
