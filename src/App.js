import { useState } from "react";
import "./App.css";
import Button from "./components/components/Button";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  }

  function handleRemove(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className='shopping-list'>
      <h2>Boodschappenlijstje</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='Item toevoegen'
        />
        <Button title={"Toevoegen"} classname={"add"} type={"submit"} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <Button
              title={"Verwijder"}
              classname={"remove"}
              type={"button"}
              onClick={() => handleRemove(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
