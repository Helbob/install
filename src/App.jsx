import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import Greeting from "./conponments/Greeting";
import MyButton from "./conponments/MyButton";
import MyHeader from "./conponments/MyHeader";
import MyFooter from "./conponments/MyFooter";

function App() {
  return (
    <>
      <MyHeader />
      <main>
        <Greeting />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
