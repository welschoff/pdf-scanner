import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Docs Scanner</h1>

      {recognizedText ? (
        <p className={styles.text}>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}

      {recognizedText && <AddDocumentForm />}

      {!recognizedText && recognizeProgress && (
        <Progress
          progress={recognizeProgress.progress * 100}
          status={recognizeProgress.status}
        />
      )}

      {!recognizeProgress && (
        <button
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognizeText(imageURL, setRecognizeProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Scan
        </button>
      )}
    </div>
  );
}

export default Scan;
