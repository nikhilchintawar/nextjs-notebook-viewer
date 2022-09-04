import type { NextPage } from "next";
import Head from "next/head";
import NotebookViewer from "../src/NotebookViewer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jupyter Notebook Viewer</title>
        <meta name="description" content="Jupyter Notebook Viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NotebookViewer notebookHtml="" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nikhilchintawar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nikhil Chintawar
        </a>
      </footer>
    </div>
  );
};

export default Home;
