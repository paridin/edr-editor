import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return (
      <html>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <style>
            {
              `
              * {
                box-sizing: border-box;
                -moz-box-sizing: border-box;
              }
              html {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              .theme-1 {
                background: #ecf0f1;
                font-size: 16px;
              }
              .theme-1 .main-header {
                background: #bdc3c7;
                height: 40px;
                border-bottom: 1px solid #f0f0f0;
                display: flex;
                align-items: center;
              }
              .main-header .brand {
                font-size: 18px;
                margin-left: 2rem;
                color: #3b3b3b;
              }
            `}</style>

        </Head>
        <body className="theme-1">
          <header className="main-header">
            <div className="brand">EDR-Editor</div>
          </header>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}