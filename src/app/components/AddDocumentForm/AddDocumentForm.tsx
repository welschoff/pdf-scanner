import React, { useState } from 'react';
import styles from './AddDocumentForm.styles.module.css';

function AddDocumentForm() {
  const [title, setTitle] = useState('');

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Enter title"
        className={styles.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" className={styles.submit} value="Add" />
    </form>
  );
}

export default AddDocumentForm;
