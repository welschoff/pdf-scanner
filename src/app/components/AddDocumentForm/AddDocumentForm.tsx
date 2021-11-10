import React, { useState } from 'react';

function AddDocumentForm() {
  const [title, setTitle] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default AddDocumentForm;
