import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizedText from '../../utils/UseRecognizedText';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizedText();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Docs Scanner</h1>

      {text ? (
        <p className={styles.text}>{text}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}

      {text && <AddDocumentForm text={text} />}

      {!text && progress && (
        <Progress progress={progress.progress * 100} status={progress.status} />
      )}

      {!progress && (
        <button
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognize(imageURL);
            }
          }}
        >
          Scan
        </button>
      )}
      <button className={styles.documents}>Documents</button>
    </div>
  );
}

export default Scan;
