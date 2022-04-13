function Nutrition({ foods }) {

  return (
    <div className="my-8 max-w-2xl mx-auto rounded-2xl overflow-x-auto">
      <div className="bg-white min-w-max rounded-2xl p-5">
        <table className="w-full text-sm sm:text-base text-left">
          <thead>
            <tr>
              <th>Food</th>
              <th>Quantity</th>
              <th>Carbohydrates</th>
              <th>Protein</th>
              <th>Fats</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
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
                    (acc, food) => acc + parseFloat(food.fats) * food.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                g
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Nutrition;
