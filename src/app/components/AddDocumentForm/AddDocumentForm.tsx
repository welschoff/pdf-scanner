import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.styles.module.css';
import usePostDocument from '../../utils/usePostDocument';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps) {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Enter title"
        className={styles.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="submit"
        className={styles.submit}
        value="Add"
        disabled={!title || isLoading}
      />
    </form>
  );
}

export default AddDocumentForm;
