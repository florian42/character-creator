import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className={styles.greyBar} />
      <Footer />
    </>
  );
}

export default App;
