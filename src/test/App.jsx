// import { useState } from 'react'
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, TextFieldWithBtn, TextField } from "../index";

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
          label="TEST"
          showIcon={false}
        />

        <TextFieldWithBtn
          handleClick={(value) => alert(value)}
          placeholder="Write something..."
        />

        <TextField
          handleClick={(value) => alert(value)}
          placeholder="Write something..."
        />
      </div>
    </>
  );
}

export default App;
