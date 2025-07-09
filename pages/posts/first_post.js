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
        <title>Test blog</title>
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
        src="/images/dummy-user.png"
        width={144}
        height={144}
        alt="Test test"
      />

      <h2>
        <Link href='/'>Return to Home page</Link>
      </h2>
    </Layout>
  );
}
