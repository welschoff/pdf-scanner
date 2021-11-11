import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.styles.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
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
        disabled={!title}
      />
    </form>
  );
}

export default AddDocumentForm;
