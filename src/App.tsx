import React, { useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      name: "Anurag",
      url: "",
      age: 26,
      notes: "He is trying his best!",
    },
    {
      name: "Anurag",
      url: "",
      age: 26,
    },
  ]);
  people.map((person) => {
    return person.age;
  });

  return (
    <div className="App">
      <h1>People Invited</h1>
    </div>
  );
}

export default App;
