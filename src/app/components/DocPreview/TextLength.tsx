// import { useState } from 'react';
import React from 'react';

type TextLimitProps = {
  text: string;
};

function TextLimit({ text }: TextLimitProps): JSX.Element {
  //   const [showAll, setShowAll] = useState(false);

  //   const showMore = () => setShowAll(true);
  //   const showLess = () => setShowAll(false);

  if (text.length <= 10) {
    return <p>{text}</p>;
  }

  return <p>{text}</p>;
}

export default TextLimit;
