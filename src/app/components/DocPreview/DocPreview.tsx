import React, { useState } from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  text: string;
  title: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);
  //   return (
  //     <div className={styles.wrapper}>
  //       <h2>{title}</h2>
  //       <p>{text}</p>
  //     </div>
  //   );

  if (!text || text.length <= 10) {
    return (
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  } else {
    return (
      <article>
        <h2>{title}</h2>
        <p>
          {collapsed ? `${text.substring(0, 10)}...` : text}
          <button onClick={() => setCollapsed(!collapsed)}>
            Read {collapsed ? 'more' : 'less'}
          </button>
        </p>
      </article>
    );
  }
}

export default DocPreview;
