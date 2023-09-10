import { useState } from "react";

type Item = {
  id: number;
  text: string;
};

export function NxWelcome() {

  const [input, setInput] = useState(""); 
  const [items, setItems] = useState<Item[]>([]); 

  const handleClick = () => {
    if (input) {
      setItems([...items, { id: Math.random(), text: input }]);
      setInput("");
    }
  };

  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista en React con TypeScript</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Añadir</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleRemove(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NxWelcome;
