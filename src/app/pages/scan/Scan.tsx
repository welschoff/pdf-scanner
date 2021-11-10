import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Docs Scanner</h1>
      <ImageInput onUpload={setImageURL} />
      <button disabled={imageURL === null}>Scan</button>
    </div>
  );
}

export default Scan;
