import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <label className={styles.searchbar}>
      <input
        className={styles.input}
        value={value}
        placeholder="Search..."
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <span className={styles.clear} onClick={() => setValue('')}>
        X
      </span>
    </label>
  );
}
