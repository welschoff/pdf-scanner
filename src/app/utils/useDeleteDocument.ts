import { useState } from 'react';

function useDeleteDocument() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteDocument = async (id: number) => {
    setIsLoading(true);
    await fetch(`https://json-server.machens.dev/docs/${id}`, {
      method: 'DELETE',
    });
    setIsLoading(false);
  };

  return { isLoading, deleteDocument };
}

export default useDeleteDocument;
