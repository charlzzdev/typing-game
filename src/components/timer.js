import React, { useState, useEffect } from 'react';

export default function Timer({ mode, duration }) {
      const [time, setTime] = useState({ min: duration.split(' ')[0], sec: 0 });

      mode === 'Timed' && useEffect(() => {
            const countdown = setInterval(() => {
                  setTime(prevTime => {
                        if (prevTime.sec > 0) {
                              return {
                                    min: prevTime.min,
                                    sec: prevTime.sec - 1
                              }
                        } else if (prevTime.min !== 0) {
                              return {
                                    min: prevTime.min - 1,
                                    sec: 59
                              }
                        } else {
                              clearInterval(countdown);
                              return prevTime;
                        }
                  });
            }, 1000);

            return () => clearInterval(countdown);
      }, []);

      return (
            <>
                  {
                        mode === 'Timed' ? (
                              <div>
                                    {time.min < 10 ? `0${time.min}` : time.min}:{time.sec < 10 ? `0${time.sec}` : time.sec}
                              </div>
                        ) : <div style={{ fontSize: '40px' }}>∞</div>
                  }
            </>
      )
}
