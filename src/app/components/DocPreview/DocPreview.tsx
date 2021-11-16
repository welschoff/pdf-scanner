import React, { useState } from 'react';
import useDeleteDocument from '../../utils/useDeleteDocument';
import styles from './DocPreview.module.css';

export type Document = {
  id: number;
  text: string;
  title: string;
};

function DocPreview({ title, text, id }: Document): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);
  const { deleteDocument } = useDeleteDocument();

  if (!text || text.length <= 20) {
    return (
      <article className={styles.wrapper}>
        <h2>{title}</h2>
        <p>{text}</p>
        <img
          src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1637005014~hmac=eb4c3f1224c8ddb19f15a1861d477178"
          alt=""
        />
      </article>
    );
  } else {
    return (
      <article className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <section className={styles.delete}>
          <p className={styles.text}>
            <details onClick={() => setCollapsed(!collapsed)}>
              <summary className={styles.text}>
                {collapsed ? `${text.substring(0, 30)}...` : text}
              </summary>
            </details>
          </p>
          <img
            className={styles.trash}
            src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1637005014~hmac=eb4c3f1224c8ddb19f15a1861d477178"
            alt=""
            onClick={() => deleteDocument(id)}
          />
        </section>
      </article>
    );
  }
}

export default DocPreview;
