import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../components/Books/BookItem/BookItem';
import Banner from '../../images/home_banner.jpg';
import styles from './Home.module.css';
import { getBooks } from '../../lib/common';

function Home() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayBooks = () => (
    books && books.length > 0 
      ? books.map((book) => <BookItem size={2} book={book} key={book.id} />) 
      : <h1>Aucun livre disponible</h1>
  );

  useEffect(() => {
    async function getBooksList() {
      try {
        const data = await getBooks();
        console.log('Books received:', data); // Pour déboguer
        setBooks(data || []);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError(err.message);
        setBooks([]);
      } finally {
        setLoading(false); // ⚠️ IMPORTANT : always set loading to false
      }
    }
    getBooksList();
  }, []);

  const backgroundImageStyle = { backgroundImage: `url(${Banner})` };

  return (
    <div className={styles.Home}>
      <div className={styles.banner} style={backgroundImageStyle} />
      <main className={styles.main}>
        <header className={styles.head}>
          <h1>Nos Livres</h1>
          <p>à lire et à relire</p>
          <Link to="/Ajouter" className="button">+ Ajouter un livre</Link>
        </header>
        <section className={styles.bookList}>
          {loading ? (
            <h1>Chargement...</h1>
          ) : error ? (
            <h1 style={{ color: 'red' }}>Erreur : {error}</h1>
          ) : (
            displayBooks()
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;