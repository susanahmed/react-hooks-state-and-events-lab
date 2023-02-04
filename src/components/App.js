import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState (false);
  
  function handleClick() {
    setIsDark ((isDark) => !isDark);
  }
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleClick}>
          {isDark ? "Dark" : "Light"} Mode 
          </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
