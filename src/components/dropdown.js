import React, { useState } from 'react'

export default function Dropdown({ label, options, gameSettings, setGameSettings }) {
      const [open, setOpen] = useState(false);

      return (
            <div className="select">
                  <label>{label}</label>
                  <button className={`btn ${label}`} onClick={() => setOpen(!open)}>{gameSettings[label]}</button>
                  {
                        open && (
                              <ul className="dropdown">
                                    {
                                          options.map((option, index) => (
                                                <li
                                                      className="btn"
                                                      key={index}
                                                      onClick={(e) => {
                                                            setGameSettings({
                                                                  ...gameSettings,
                                                                  [label]: e.target.innerHTML
                                                            });
                                                            setOpen(false);

                                                            const durationBtn = document.querySelector(`.duration`);
                                                            e.target.innerHTML === 'Practice' && (durationBtn.disabled = true);
                                                            e.target.innerHTML === 'Timed' && (durationBtn.disabled = false);
                                                      }}
                                                      tabIndex="0"
                                                      onKeyPress={(e) => {
                                                            if (e.key === "Enter") {
                                                                  e.target.click();
                                                            }
                                                      }}
                                                >{option}</li>
                                          ))
                                    }
                              </ul>
                        )
                  }
            </div>
      )
}
