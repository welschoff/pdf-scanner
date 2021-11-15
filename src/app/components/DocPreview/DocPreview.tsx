import React, { useState } from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  text: string;
  title: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);

  if (!text || text.length <= 20) {
    return (
      <article className={styles.wrapper}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  } else {
    return (
      <article className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>
          <details onClick={() => setCollapsed(!collapsed)}>
            <summary className={styles.text}>
              {collapsed ? `${text.substring(0, 30)}...` : text}
            </summary>
          </details>
        </p>
      </article>
    );
  }
}

export default DocPreview;
