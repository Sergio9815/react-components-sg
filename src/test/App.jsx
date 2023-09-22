// import { useState } from 'react'
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "../index";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Button
          handleClick={() => alert("test")}
          variant="primary"
          size="sm"
          rightIcon={
            <svg width="10" height="10" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.335647 0.752601C0.74843 0.385683 1.3805 0.422864 1.74742 0.835647L5.74742 5.33565C6.08421 5.71453 6.08421 6.28549 5.74742 6.66437L1.74742 11.1644C1.3805 11.5772 0.74843 11.6143 0.335647 11.2474C-0.077136 10.8805 -0.114317 10.2484 0.252601 9.83565L3.66206 6.00001L0.252601 2.16437C-0.114317 1.75159 -0.077136 1.11952 0.335647 0.752601Z"/>
            </svg>
          }
        >
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
