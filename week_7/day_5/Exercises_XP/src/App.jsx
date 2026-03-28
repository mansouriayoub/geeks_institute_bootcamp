import { useState, useEffect } from "react";
import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import FavoriteColor from "./components/FavoriteColor";

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("Child component is being unmounted!");
//   }

//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

function Child() {
  useEffect(() => {
    return () => {
      alert("The component named Header is about to be unmounted.");
    };
  }, []);

  return <h1>Hello World!</h1>;
}

function App() {
  const [show, setShow] = useState(true);
  

  return (
    <>
      <div id="center">
        <p>
          <b>
            Click on the numbers to increase the counters. <br />
            The counter is programmed to throw error when it reaches 5. This
            simulates a JavaScript error in a component.
          </b>
        </p>

        <hr
          style={{
            width: "100%",
            height: "5px",
            border: "none",
            background: "#333",
          }}
        />

        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <hr
          style={{
            width: "100%",
            height: "5px",
            border: "none",
            background: "#333",
          }}
        />

        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <hr
          style={{
            width: "100%",
            height: "5px",
            border: "none",
            background: "#333",
          }}
        />

        <p>
          This counter is not inside of boundary. So if crashes, all other
          components are deleted.
        </p>
        <BuggyCounter />

        <FavoriteColor />
        <div>

            {show && <Child />}
            <button onClick={() => setShow(false)}>Delete Header</button>

        </div>
      </div>
    </>
  );
}

export default App;
