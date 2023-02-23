import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <link rel='icon' href='/PM.svg' />
        <meta http-equiv='X-UA-Compatible' content='IE=7' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
