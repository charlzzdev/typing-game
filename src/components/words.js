import React, { useState, useEffect } from 'react';

import wordList from '../assets/wordList';
import sentenceList from '../assets/sentenceList';

export default function Words({ type, score, setScore, streak, setStreak, setWordEnd, keyboardActive, setKeyboardActive, pressedKey }) {
      const newWord = () => {
            if (type === 'Words') {
                  return wordList[Math.floor(Math.random() * 2338)];
            } else return sentenceList[Math.floor(Math.random() * 68)];
      }
      const [currentWord, setCurrentWord] = useState(newWord());
      const [currentChar, setCurrentChar] = useState(0);
      const charAmount = typeof window !== 'undefined' && Math.round(window.innerWidth / 70)


      useEffect(() => {
            document.querySelector('.words').focus();
      }, [])

      useEffect(() => {
            pressedKey.key && handleKeyPress(pressedKey);
      }, [pressedKey])

      const handleKeyPress = e => {
            if (e.key === currentWord.charAt(currentChar)) {
                  if (currentChar !== currentWord.length - 1) {
                        setCurrentChar(currentChar + 1);
                        setScore(score + 1);
                        setWordEnd(false);
                  } else {
                        setCurrentChar(0);
                        setCurrentWord(newWord());
                        setStreak(streak + 1);
                        setScore(score + streak);
                        setWordEnd(true);
                  }
            } else {
                  setStreak(1);
            }
      }

      return (
            <div
                  className={`words ${keyboardActive ? 'keyboard-active' : ''}`}
                  tabIndex="0"
                  title="Type here"
                  onClick={() => setKeyboardActive(true)}
                  onKeyPress={(e) => handleKeyPress(e)}
            >
                  {currentWord.substring(currentChar - charAmount, currentChar)}
                  {currentWord.charAt(currentChar - 1) === ' ' && <span>&nbsp;</span>}
                  <div className="cursor"></div>
                  <div style={{ opacity: 0.5 }}>
                        {currentWord.charAt(currentChar) === ' ' && <span>&nbsp;</span>}
                        {currentWord.substring(currentChar, currentWord.length).substring(0, charAmount)}
                  </div>
            </div>
      )
}
