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

function FoodItem({
  food: { id, name, carbohydrates, protein, fats, quantity },
  handleQuantity,
}) {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="flex justify-between items-start mb-1">
        <h1 className="text-xl font-semibold pb-2 text-slate-800">{name}</h1>
        <span className="flex gap-x-2 ml-4">
          {quantity !== 0 && (
            <>
              <Button clickHandler={() => handleQuantity(id, -1)}>
                <HiMinus />
              </Button>
              <Button>{quantity}</Button>
            </>
          )}
          <Button clickHandler={() => handleQuantity(id, 1)}>
            <HiPlus />
          </Button>
        </span>
      </div>
      <table className="table-auto w-full text-left">
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
