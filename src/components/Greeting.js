import React, { useState } from "react";

import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
}
