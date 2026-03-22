import { useEffect, useState } from "react";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState();

    const tick = () => {
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        setCurrentDate(localTime);
    };

  useEffect(() => {
    const interval = setInterval(() => {
      `It is ${tick()}`;
    }, 1000);

    return ()=> clearInterval(interval)
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <p>{currentDate}</p>
    </>
  );
};
export default Clock;
