import React, { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/About";

function App() {
  const [page, setPage] = useState("About Me");
  return (
    <main className="scroll">
      <Landing setPage={setPage} />
      <Navbar setPage={setPage} page={page} />
      <AboutMe setPage={setPage} />
    </main>
  );
}

export default App;
