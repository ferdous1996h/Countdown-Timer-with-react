import { useState, useEffect } from 'react';
export default function App() {
  const [remainTime, setRemainTime] = useState(300);
  const [running, setRunning] = useState(false);
  const min = Math.floor(remainTime / 60)
    .toString()
    .padStart(2, '0');
  const sec = Math.floor(remainTime % 60)
    .toString()
    .padStart(2, '0');
  const displayTime = `${min}:${sec}`;

  useEffect(() => {
    if (running) {
      const timeLapse = setInterval(() => {
        setRemainTime(prev => prev - 1);
      }, 1000);
      if (remainTime < 1) {
        clearInterval(timeLapse);
      }
      return () => clearInterval(timeLapse);
    }
  }, [running, remainTime]);
  return (
    <main className="app">
      <section className="display_time">{displayTime}</section>
      <section className="btn_sec">
        <button onClick={()=>setRunning(true)}>Start</button>
        <button onClick={()=>setRunning(false)}>Stop</button>
        <button onClick={() => setRemainTime(300)}>Reset</button>
      </section>
    </main>
  );
}
