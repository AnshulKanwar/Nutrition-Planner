import { IoNutrition } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="flex justify-between px-8 md:px-12 lg:px-20 items-center">
        <div className="flex items-center gap-x-4 text-fuchsia-500">
          <IoNutrition className="text-3xl" />
          <h1 className="text-3xl font-bold">Nutrition Planner</h1>
        </div>
        <button className="flex items-center gap-x-2 font-bold hover:text-fuchsia-500">
            <BiUser className="text-xl"/>
            <span>Anshul</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
