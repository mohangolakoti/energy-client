import React from "react";
import { home, chart, power} from "../constants"; 
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="bg-[#2c2c2c] flex md:flex-col flex-row justify-between md:w-fit dark:bg-[#2c2c2c]">
      <ul className="flex md:flex-col gap-4 flex-row text-nowrap mx-5 md:my-2 justify-between">
        <li className="w-full text-lg font-medium rounded-lg md:my-2 my-6 md:mx-[8px] ">
          <img src={power} alt="add" />
        </li>
        <hr />
        <li className="w-full text-lg font-medium cursor-pointer md:my-8 md:mx-2 ml-5 my-6">
          <Link to="/">
            <img src={home} alt="add" className="w-[30px]" />
          </Link>
        </li>
        <li className="w-full text-lg font-medium rounded-lg md:my-2 md:ml-2 ml-4  my-6">
          <Link to="/graphs">
            <img src={chart} alt="add" />
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
