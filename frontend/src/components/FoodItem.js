import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const Button = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="text-lg font-semibold w-8 h-8 grid place-items-center rounded-full text-fuchsia-500 bg-fuchsia-100 hover:bg-fuchsia-200 active:bg-fuchsia-300"
    >
      {children}
    </button>
  );
};

function FoodItem({ food: { name, carbohydrates, protein, fats } }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-white p-5 rounded-3xl">
      <div className="flex justify-between items-start mb-1">
        <h1 className="text-xl font-semibold pb-2 text-slate-800">{name}</h1>
        <span className="flex gap-x-2 ml-2">
          {quantity !== 0 && (
            <>
              <Button
                clickHandler={() => setQuantity((quantity) => quantity - 1)}
              >
                <HiMinus />
              </Button>
              <Button>{quantity}</Button>
            </>
          )}
          <Button clickHandler={() => setQuantity((quantity) => quantity + 1)}>
            <HiPlus />
          </Button>
        </span>
      </div>
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbohydrates</td>
            <td>{carbohydrates} g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{protein} g</td>
          </tr>
          <tr>
            <td>Fats</td>
            <td>{fats} g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FoodItem;
