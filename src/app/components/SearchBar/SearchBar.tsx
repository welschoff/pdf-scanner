import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(): JSX.Element {
  return (
    <div>
      <section className={styles.searchbar}>
        <input type="text" placeholder="Searchbar" />
        <input type="submit" value="Search" className={styles.submit} />
      </section>
    </div>
  );
}
