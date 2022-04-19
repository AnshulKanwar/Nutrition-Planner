import { IoNutrition } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pt-10 pb-20">
      <div className="flex justify-between px-8 md:px-12 lg:px-20 items-center">
        <div className="flex items-center gap-x-4 text-fuchsia-500">
          <IoNutrition className="text-3xl" />
          <h1 className="text-3xl font-bold">Nutrition Planner</h1>
        </div>
        {user && (
          <button className="flex items-center gap-x-2 font-bold hover:text-fuchsia-500">
            <BiUser className="text-xl" />
            <span>{user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
