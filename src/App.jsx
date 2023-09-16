// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, PfTextField } from "./index";

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
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Button handleClick={() => alert("hi")} label="TEST" showIcon={false} />

        <PfTextField 
          handleClick={(value) => alert(value)}
          placeholder="Write something..."
         />
      </div>
    </>
  );
}

export default App;
