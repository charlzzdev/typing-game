import React, { useState, useEffect } from 'react';

const Keyboard = () => {
      const [keys, setKeys] = useState([]);
      const keyArr = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '-', '↑', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'];

      useEffect(() => {
            Array.from(document.getElementsByClassName('key')).forEach(key => {
                  setKeys((keys) => [...keys, key]);
                  key.addEventListener('click', e => {
                        console.log(e.target.innerHTML);
                  });
            });
      }, []);

      const shift = () => {
            keys.forEach(key => {
                  if (key.innerHTML.toUpperCase() === key.innerHTML) {
                        key.innerHTML = key.innerHTML.toLowerCase();
                  } else key.innerHTML = key.innerHTML.toUpperCase();
            })
      }

      return (
            <div id="keyboard">
                  {
                        keyArr.map(key => {
                              if (key !== '↑') {
                                    return <div className="key" key={key}>{key}</div>
                              } else return <div className="shift" key={key} onClick={() => shift()}>↑</div>
                        })
                  }
            </div>
      )
}

export default Keyboard;
