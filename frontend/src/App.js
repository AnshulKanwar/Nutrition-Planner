import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
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
  };

  return (
    <div className="App bg-[#F0F1F4] min-h-screen text-slate-600">
      <BrowserRouter>
        <Navbar />

        <div className="w-4/5 mx-auto">
          <Routes>
            <Route path="/login" exact element={<LoginPage />} />

            <Route
              path="/"
              exact
              element={
                <PrivateRoute>
                  <Calculator foods={foods} handleQuantity={handleQuantity} />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
