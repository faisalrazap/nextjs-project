import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Faisal blog</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>

      <Image
        src="/images/me.png"
        width={144}
        height={144}
        alt="Faisal Raza"
      />

      <h2>
        <Link href='/'>Return to Home page</Link>
      </h2>
    </Layout>
  );
}
