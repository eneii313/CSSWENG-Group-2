import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Merryweather" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <body className='font-sans text-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
