import React, { useState, useEffect } from 'react';

import wordList from '../assets/wordList';

export default function Words({ score, setScore }) {
      const newWord = () => wordList[Math.floor(Math.random() * 2338)];
      const [currentWord, setCurrentWord] = useState(newWord());
      const [currentChar, setCurrentChar] = useState(0);
      const [streak, setStreak] = useState(1);

      useEffect(() => {
            document.querySelector('.words').focus();
      }, [])

      const handleKeyPress = e => {
            if (e.key === currentWord.charAt(currentChar)) {
                  if (currentChar !== currentWord.length - 1) {
                        setCurrentChar(currentChar + 1);
                        setScore(score + 1);
                  } else {
                        setCurrentChar(0);
                        setCurrentWord(newWord());
                        setStreak(streak + 1);
                        setScore(score + streak);
                  }
            } else {
                  setStreak(1);
            }
      }

      return (
            <div
                  className="words"
                  tabIndex="0"
                  title="Type here"
                  onKeyPress={(e) => handleKeyPress(e)}
            >
                  {currentWord.substring(0, currentChar)}
                  <div className="cursor"></div>
                  <div style={{ opacity: 0.5 }}>{currentWord.substring(currentChar, currentWord.length)}</div>
            </div>
      )
}
