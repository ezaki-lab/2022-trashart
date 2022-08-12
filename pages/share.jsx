import Main from '../components/main';
import React, { useState } from "react";

const title = '共有';
const description = '共有をしましょう！';

const Share = () => {
  const [text, setText] = useState("");

  return (
    <Main
      title={title}
      description={description}
    >
    <div className="App">
        <input
            className="shadow-xl border"
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        
        <a className="mx-3 px-4 py-2 w-full text-lg font-medium text-white rounded bg-crafting hover:bg-orange-700 shadow-xl" href = {"https://twitter.com/intent/tweet?text=" + text}>Twitter</a>
        <a className="mx-3 px-4 py-2 w-full text-lg font-medium text-white rounded bg-crafting hover:bg-orange-700 shadow-xl" href = {"https://www.facebook.com/sharer/sharer.php?u=" + text}>Facebook</a>
        </div>
    </Main>
  );
};

export default Share;
