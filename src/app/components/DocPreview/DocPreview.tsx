import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = {
  title: string;
  text: string;
};

function DocPreview({ title, text }: DocPreviewProps): JSX.Element {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Bar"
        className={styles.searchbar}
      />
      <div className={styles.wrapper}>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </div>
    </div>
  );
}

export default DocPreview;
