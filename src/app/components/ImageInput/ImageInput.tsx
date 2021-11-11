import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';
import UploadIcon from './UploadIcon';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
    onUpload(newImageUrl);
  };

  return (
    <label className={styles.upload}>
      <input className={styles.input} type="file" onChange={handleChange} />
      {imageUrl ? (
        <img src={imageUrl} className={styles.preview} />
      ) : (
        <UploadIcon />
      )}
    </label>
  );
}

export default ImageInput;
