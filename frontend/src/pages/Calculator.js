import { useEffect, useState } from "react";
import axios from "axios";

import Nutrition from "../components/Nutrition";
import FoodItemsList from "../components/FoodItemsList";
import AddItem from "../components/AddItem";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) => {
        let data = res.data.map((food) => ({ ...food, quantity: 0 }));
        setFoods(data);
      })
      .catch((err) => console.err(err));
  }, []);

  let handleQuantity = (id, increment) => {
    let foodsCopy = [...foods];
    let food = foodsCopy.find((food) => food.id === id);
    food.quantity += increment;
    setFoods(foodsCopy);
    setInput("");
  };

  let filteredItems = foods.filter((food) =>
    food.name.toLowerCase().includes(input.toLowerCase())
  );

  let addedItems = foods.filter((food) => food.quantity > 0);

  return (
    <div className="pb-36">
      <AddItem input={input} handleChange={(e) => setInput(e.target.value)} />
      <Nutrition foods={addedItems} handleQuantity={handleQuantity} />
      <FoodItemsList foods={filteredItems} handleQuantity={handleQuantity} />
    </div>
  );
};

export default Calculator;
