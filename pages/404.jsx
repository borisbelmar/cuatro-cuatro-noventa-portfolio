import NotFound from "components/views/NotFound";
import Head from "next/head";

export default function NotFoundPage () {
  return (
    <>
      <Head>
        <title>Cuatro Cuatro Noventa - 404</title>
        <meta name="description" content="Agencia de publicidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  )
}