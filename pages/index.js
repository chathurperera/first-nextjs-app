import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content ="ninjas" />
    </Head>
    <div className={styles.title}>
      <h1>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate,
        in natus ipsam iusto sit pariatur! Non omnis repellendus cupiditate!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate,
        in natus ipsam iusto sit pariatur! Non omnis repellendus cupiditate!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate,
        in natus ipsam iusto sit pariatur! Non omnis repellendus cupiditate!
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>
          See ninjas Listing
        </a>
      </Link>
    </div>
    </>
  );
}
