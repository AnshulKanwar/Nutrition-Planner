import { HiPlus, HiMinus } from "react-icons/hi";

const Button = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="text-sm font-semibold w-5 h-5 grid place-items-center rounded-full text-fuchsia-500 bg-fuchsia-100 hover:bg-fuchsia-200 active:bg-fuchsia-300"
    >
      {children}
    </button>
  );
};

function Nutrition({ foods, handleQuantity }) {
  return (
    <div className="my-8 max-w-2xl mx-auto rounded-2xl overflow-x-auto">
      <div className="bg-white font-bold px-5 py-3 inline-block rounded-t-2xl">
        Todays Log
      </div>
      <div className="flex flex-col justify-center bg-white min-w-max min-h-[10em] rounded-b-2xl rounded-tr-2xl p-5">
          {foods.length === 0 ? (
            <div className="py-10 text-lg font-semibold sm:text-2xl flex justify-center items-center gap-x-2">
              Press{" "}
              <Button>
                <HiPlus />
              </Button>{" "}
              to add items
            </div>
          ) : (
            <table className="w-full text-sm sm:text-base text-left">
              <thead>
                <tr>
                  <th className="pb-2">Food</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Carbohydrates</th>
                  <th className="pb-2">Protein</th>
                  <th className="pb-2">Fats</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food) => (
                  <tr key={food.name}>
                    <td>{food.name}</td>
                    <td>
                      <span className="grid grid-cols-3 items-center justify-items-center">
                        <Button
                          clickHandler={() => handleQuantity(food.id, -1)}
                        >
                          <HiMinus />
                        </Button>
                        {food.quantity}
                        <Button clickHandler={() => handleQuantity(food.id, 1)}>
                          <HiPlus />
                        </Button>
                      </span>
                    </td>
                    <td>{(food.carbohydrates * food.quantity).toFixed(2)} g</td>
                    <td>{(food.protein * food.quantity).toFixed(2)} g</td>
                    <td>{(food.fats * food.quantity).toFixed(2)} g</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <td>{foods.reduce((acc, food) => acc + food.quantity, 0)}</td>
                  <td>
                    {foods
                      .reduce(
                        (acc, food) =>
                          acc + parseFloat(food.carbohydrates) * food.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    g
                  </td>
                  <td>
                    {foods
                      .reduce(
                        (acc, food) =>
                          acc + parseFloat(food.protein) * food.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    g
                  </td>
                  <td>
                    {foods
                      .reduce(
                        (acc, food) =>
                          acc + parseFloat(food.fats) * food.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    g
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
    </div>
  );
}

export default Nutrition;
