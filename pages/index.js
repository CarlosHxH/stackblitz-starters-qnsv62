import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios.post('/api', { name: 'User', cpf: '01234567890' }).then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes</title>
      </Head>
      <nav>
        <Header />
      </nav>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Nome &rarr;</h3>
            <p>{data.name}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
