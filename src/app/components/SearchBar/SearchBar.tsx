import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(): JSX.Element {
  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Searchbar"
          className={styles.searchbar}
        />
        <input type="submit" value="Search" className={styles.submit} />
      </section>
    </div>
  );
}
