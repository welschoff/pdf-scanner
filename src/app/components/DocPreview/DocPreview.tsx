import React from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  text: string;
  title: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default DocPreview;
