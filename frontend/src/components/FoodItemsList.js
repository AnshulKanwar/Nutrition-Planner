import FoodItem from "./FoodItem";

function FoodItemsList({ foods }) {
  return (
    <div className="mx-auto my-3 p-2 w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodItemsList;
