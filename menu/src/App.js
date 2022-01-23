import { useState } from "react/cjs/react.development";
import items from "./data";
import Category from "./Category";
import List from "./List";

const ncategory = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const filterItems = (category) => {
    if (category === "all") {
      setmenuItems(items);
      return;
    }
    const list = items.filter((item) => {
      return item.category === category;
    });
    setmenuItems(list);
  };
  const [menuItems, setmenuItems] = useState(items);
  const [category, setCategory] = useState(ncategory);
  return (
    <div className="App">
      <h1 className="head">Our Menu</h1>
      <div className="line"></div>
      <Category category={category} filterItems={filterItems} />
      <List items={menuItems} />
    </div>
  );
}

export default App;
