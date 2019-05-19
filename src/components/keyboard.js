import React, { useState, useEffect } from 'react';

const Keyboard = ({ active, setPressedKey, gameType }) => {
      const [keys, setKeys] = useState([]);
      const keyArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '-', '↑', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'];

      useEffect(() => {
            Array.from(document.getElementsByClassName('key')).forEach(key => {
                  setKeys((keys) => [...keys, key]);
                  key.addEventListener('click', e => {
                        let counter = 0;
                        setPressedKey({
                              key: e.target.innerHTML,
                              timesSent: counter++
                        });
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
            <div id="keyboard" className={active ? 'active' : 'inactive'}>
                  {
                        keyArr.map(key => {
                              if (key !== '↑') {
                                    return <div className="key" key={key}>
                                          {gameType === 'Sentences' ? key : key.toLowerCase()}
                                    </div>
                              } else return <div className="shift" key={key} onClick={() => shift()}>↑</div>
                        })
                  }
                  <div className="key space"> </div>
            </div>
      )
}

export default Keyboard;
