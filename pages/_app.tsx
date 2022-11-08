import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

const defaultSEOConfig = {
  title: "Brennan Fife",
  description: "Tech is cool. Running is cool. Mushrooms are cool.",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍄</text></svg>"
        />
      </Head>
      <ChakraProvider>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
