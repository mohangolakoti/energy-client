import React from "react";
import Sidebar from "../components/sidebar";
import CurrentTime from "../components/CurrentTime";
import { dark, light, pcc1 } from "../constants";
import { useTheme } from "../components/ThemeContext";

const Dashboard = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex">
      <Sidebar />
      <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full">
        <div className="mx-2 my-2">
          <div className="flex justify-between mx-10 font-Audiowide dark:text-[#e4e2e2]">
            <h2 className="font-bold text-2xl ">Energy Monitoring System</h2>
            <div className="flex flex-row justify-center items-center font-semibold gap-2">
            <img
                className="w-[30px] h-[30px] cursor-pointer 2xl:w-[42px] 2xl:h-[42px]"
                src={theme === "light" ? dark : light}
                alt="add"
                onClick={toggleTheme}
            />
              <CurrentTime />
            </div>
          </div>
          <div>
            <section className="flex justify-center items-center">
              <div className="w-fit my-10 bg-gray-400 xl:px-10 py-5 rounded-lg dark:bg-[#2c2c2c] md:px-7 px-2">
                <h1 className="text-center py-2 text-2xl underline font-bold text-[#2c2c2c] dark:text-white">
                  
                </h1>
                <div className="flex rounded-md justify-between text-center items-center font-Montserrat font-bold pr-4 my-2 dark:text-white ">
                  <h2 className="rounded-full text-gray-400 w-64 dark:text-[#2c2c2c]">
                    PCC
                  </h2>
                  <p className="rounded-full ">
                    Meter1
                  </p>
                  <p className=" rounded-full">
                    Meter2
                  </p>
                  <p className=" rounded-full">
                    Meter3
                  </p>
                  <p className=" rounded-full">
                    Meter4
                  </p>
                </div>
                {pcc1.map((item) => (
                  <div className="">
                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 text-center items-center max-[360px]:gap-1 ">
                      <h2 className="bg-[#A8E6CF] md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4 ">
                        {item.title}
                      </h2>
                      <p className="bg-white px-4 py-1 rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2 ">
                        100.00
                      </p>
                      <p className="bg-white px-4 py-1 rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2 ">
                        100.00
                      </p>
                      <p className="bg-white px-4 py-1 rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2 ">
                        100.00
                      </p>
                      <p className="bg-white px-4 py-1 rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2 ">
                        100.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
