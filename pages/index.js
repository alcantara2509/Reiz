import Head from "next/head";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../pages/Home"));

export default function Home() {
  return (
    <main>
      <Head>
        <title>Reiz</title>
      </Head>
      <HomePage />
    </main>
  );
}
