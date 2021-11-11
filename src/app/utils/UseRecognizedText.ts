import { useState } from 'react';
import { RecognizeProgress, recognizeText } from './ocr';

function useRecognizedText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = (imageURL: string) => {
    recognizeText(imageURL, setProgress).then(setText);
  };

  return { text, progress, recognize };
}

export default useRecognizedText;
