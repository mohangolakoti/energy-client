import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CurrentTime from "../components/CurrentTime";
import { dark, light, pcc1 } from "../constants";
import { useTheme } from "../components/ThemeContext";
import axios from "axios";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://energybackend-v86d.onrender.com/api/sensordata1"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000); // Fetch data every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full">
        <div className="mx-2 my-2">
          <div className="flex justify-between mx-10 font-Audiowide dark:text-[#e4e2e2]">
            <h2 className="font-bold text-2xl ">Energy Monitoring System</h2>
            <div className="flex flex-row justify-center text-sm items-center font-semibold gap-2">
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
                <div className="flex rounded-md justify-between text-center items-center font-Montserrat font-bold pr-4 my-2 dark:text-white ">
                  <h2 className="rounded-full text-gray-400 w-64 dark:text-[#2c2c2c]">
                    PCC
                  </h2>
                  <p className="rounded-full ">Meter1</p>
                  <p className=" rounded-full">Meter2</p>
                  <p className=" rounded-full">Meter3</p>
                  <p className=" rounded-full">Meter4</p>
                </div>

                <div className="">
                  <div className="param-div">
                    <h2
                      className='parameter'
                    >
                      LineVoltage-1(R)
                    </h2>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                  </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        LineVoltage-2 (Y)
                      </h2>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        LineVoltage-3 (B)
                      </h2>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        PhaseVoltage-1
                      </h2>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        PhaseVoltage-2
                      </h2>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        PhaseVoltage-3
                      </h2>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                    </div>
    
                    <div className="param-div">
                      <h2 className='parameter'>
                        Current-1
                      </h2>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Current-2
                      </h2>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className="parameter">
                        Current-3
                      </h2>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        TotalKW
                      </h2>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        TotalKVA
                      </h2>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        PowerFactor1
                      </h2>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        PowerFactor2
                      </h2>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        PowerFactor3
                      </h2>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Average PowerFactor(inst)
                      </h2>
                      <p className='value'>
                        {data?.AvgPowerFactor}
                      </p>
                      <p className='value'>
                        {data?.AvgPowerFactor}
                      </p>
                      <p className='value'>
                        {data?.AvgPowerFactor}
                      </p>
                      <p className='value'>
                        {data?.AvgPowerFactor}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Frequency(HZ)
                      </h2>
                      <p className='value'>
                        {data?.frequency}
                      </p>
                      <p className='value'>
                        {data?.frequency}
                      </p>
                      <p className='value'>
                        {data?.frequency}
                      </p>
                      <p className='value'>
                        {data?.frequency}
                      </p>
                    </div>

                    <div className="param-div">
                    <h2 className='parameter'>
                    Net PowerFactor
                    </h2>
                    <p className='value'>
                      {data?.totalNetKVAH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAH}
                    </p>
                  </div>

                  <div className="param-div">
                    <h2 className='parameter'>
                      TotalNetKVAH
                    </h2>
                    <p className='value'>
                      {data?.totalNetKVAh}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAh}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAh}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVAh}
                    </p>
                  </div>

                  <div className="param-div">
                    <h2 className='parameter'>
                      TotalNetKVARH
                    </h2>
                    <p className='value'>
                      {data?.totalNetKVARH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVARH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVARH}
                    </p>
                    <p className='value'>
                      {data?.totalNetKVARH}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
