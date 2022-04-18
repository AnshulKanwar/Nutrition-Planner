import Nutrition from "../components/Nutrition";
import FoodItemsList from "../components/FoodItemsList";
import AddItem from "../components/AddItem";
import { useState } from "react";

const Calculator = ({
  foods,
  handleQuantity,
}) => {
  const [input, setInput] = useState("");

  let filteredItems = foods.filter((food) =>
    food.name.toLowerCase().includes(input.toLowerCase())
  );

  let addedItems = foods.filter((food) => food.quantity > 0);

  return (
    <div>
      <AddItem input={input} handleChange={(e) => setInput(e.target.value)} />
      {addedItems.length > 0 && <Nutrition foods={addedItems} />}
      <FoodItemsList foods={filteredItems} handleQuantity={handleQuantity} />
    </div>
  );
};

export default Calculator;
