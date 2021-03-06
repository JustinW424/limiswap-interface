import Head from "next/head";
import SwapInterface from "../src/components/swap/SwapInterface";
import styles from "../styles/Home.module.css";
import AlertModal from "../src/components/popups/AlertModal";
import SuccessModal from "../src/components/popups/SuccessModal";
import Footer from "../src/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>LimiSwap</title>
        <meta name="description" content="World leading token exchange!" />
        <link rel="icon§" href="/assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AlertModal />
        <SuccessModal />
        <SwapInterface />
        <Footer />
      </main>
    </>
  );
};

export default Home;
