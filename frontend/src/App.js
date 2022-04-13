import { useEffect, useState } from "react";
import axios from "axios";
import FoodItemsList from "./components/FoodItemsList";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.err(err));
  }, []);

  return (
    <div className="App bg-[#F0F1F4] min-h-screen text-slate-600">
      <h1 className="text-4xl text-fuchsia-500 font-bold text-center py-14">
        Nutrition Planner
      </h1>
      <FoodItemsList foods={foods} />
    </div>
  );
}

export default App;
