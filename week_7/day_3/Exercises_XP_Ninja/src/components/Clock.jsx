import { useEffect, useState } from "react";

const Clock = () => {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    const [currentDate, setCurrentDate] = useState(localTime);

    const tick = () => {
        setCurrentDate(new Date().toLocaleTimeString());
    };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return ()=> clearInterval(interval)
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <p>It is {currentDate}</p>
    </>
  );
};
export default Clock;
