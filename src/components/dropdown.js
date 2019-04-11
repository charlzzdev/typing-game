import React, { useState } from 'react'

export default function Dropdown({ label, options }) {
      const [open, setOpen] = useState(false);
      const [getOption, setOption] = useState('Choose');

      return (
            <div className="select">
                  <label>{label}</label>
                  <button className="btn" onClick={() => setOpen(!open)}>{getOption}</button>
                  {
                        open && (
                              <ul className="dropdown">
                                    {
                                          options.map((option, index) => (
                                                <li
                                                      className="btn"
                                                      key={index}
                                                      onClick={() => {
                                                            setOption(option);
                                                            setOpen(false);
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
