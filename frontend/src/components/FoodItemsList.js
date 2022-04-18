import FoodItem from "./FoodItem";

function FoodItemsList({ foods, handleQuantity }) {
  return (
    <div className="my-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} handleQuantity={handleQuantity}/>
        ))}
      </div>
    </div>
  );
}

export default FoodItemsList;
