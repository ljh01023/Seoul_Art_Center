import { useState } from 'react';

export default function Search({ searchClose, searchIcon }) {
  let [inputText, setInputText] = useState('');

  return (
    <div className='searchModal'>
      <div className='inputCon'>
        <input
          value={inputText}
          placeholder='검색어를 입력하세요'
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button>{searchIcon}</button>
      </div>
      <button className='close' onClick={searchClose}>
        X
      </button>
    </div>
  );
}
