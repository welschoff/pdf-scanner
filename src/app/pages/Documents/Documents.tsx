import React, { useEffect, useState } from 'react';
import styles from './Documents.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../components/DocPreview/getDocuments';
import DocPreview, { Document } from '../../components/DocPreview/DocPreview';

function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);
  const [search, setSearch] = useState('');

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <SearchBar onSearch={setSearch} />
      <div className={styles.docs}>
        {filteredDocuments?.map((document) => (
          <DocPreview
            id={document.id}
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
