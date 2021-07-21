import React, { useState } from 'react';
import './index.css';

let textArr = [];

let index = 0;
function App() {
  const [getWord, setWord] = useState('');
  const [checkWord, setCheck] = useState('');
  const tryWord = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
      );
      setCheck(getWord);
      let stopper = true;
      for(let i = 0; i <= index; ++i) {
        if(textArr[i] === getWord) {
          stopper = false;
        }
      }
      if(stopper === true) {
        textArr[index] = getWord;
        ++index;
      }
      console.log(textArr[index])
    }
  return(
    <center>
      <div>
      <input onChange={event => setWord(event.target.value)} />
            <button onClick = {() => tryWord()}>Change</button>
      </div>
      <div className='boxWords'>
        {textArr.map((number, j) => <li key={j}>{number}</li>)}
      </div>
    </center>
  );
}

export default App;
