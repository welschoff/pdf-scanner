import React, { useEffect, useState } from 'react';
import styles from './Documents.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../components/DocPreview/getDocuments';
import DocPreview, { Document } from '../../components/DocPreview/DocPreview';

function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);
  console.log(documents);

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.docs}>
        {documents?.map((document) => (
          <DocPreview
            title={document.title}
            text={document.text}
            key={document.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Documents;
