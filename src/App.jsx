import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import picture from "./assets/testset.png";
import Section from "./conponments/Section";
import MyButton from "./conponments/MyButton";
import MyHeader from "./conponments/MyHeader";
import MyFooter from "./conponments/MyFooter";
//import ListSweetList from "./conponments/ListSweetList";
import ImageList from "./conponments/ImageList";
function App() {
  const user = "Mille";

  return (
    <>
      <MyHeader> </MyHeader>
      <main>
        <Section
          user={user}
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        necessitatibus."
          title="Blockchain finally made accessible"
          keywords={[]}
        />
        <Section
          user={user}
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        necessitatibus."
          title="Blockchain finally made accessible"
          keywords={[]}
        />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
