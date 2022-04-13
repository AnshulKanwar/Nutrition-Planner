import { useEffect, useState } from "react";
import axios from "axios";
import FoodItemsList from "./components/FoodItemsList";
import AddItem from "./components/AddItem";
import Nutrition from "./components/Nutrition";

function App() {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) => {
        let data = res.data.map((food) => ({ ...food, quantity: 0 }));
        setFoods(data);
      })
      .catch((err) => console.err(err));
  }, []);

  let handleChange = (e) => {
    setInput(e.target.value);
  };

  let handleQuantity = (id, increment) => {
    let foodsCopy = [...foods];
    let food = foodsCopy.find((food) => food.id === id);
    food.quantity += increment;
    setFoods(foodsCopy);
  };

  let filteredItems = foods.filter((food) =>
    food.name.toLowerCase().includes(input.toLowerCase())
  );

  let addedItems = foods.filter(food => food.quantity > 0)

  return (
    <div className="App bg-[#F0F1F4] min-h-screen text-slate-600">
      <h1 className="text-4xl text-fuchsia-500 font-bold text-center py-14">
        Nutrition Planner
      </h1>
      <div className="w-4/5 mx-auto">
        <AddItem input={input} handleChange={handleChange} />
        {addedItems.length > 0 &&
        <Nutrition foods={addedItems}/>
        }
        <FoodItemsList foods={filteredItems} handleQuantity={handleQuantity} />
      </div>
    </div>
  );
}

export default App;
