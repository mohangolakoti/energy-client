import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
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
                  <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 justify-between rounded-md p-2 text-center items-center max-[360px]:gap-1 ">
                    <h2
                      className={`bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4`}
                    >
                      LineVoltage-1(R)
                    </h2>
                    <p
                      className={`bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2`}
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className={`bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2`}
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className={`bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2`}
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className={`bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2`}
                    >
                      {data?.lineVlotageR}
                    </p>
                  </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 justify-between rounded-md p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        LineVoltage-2 (Y)
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageY}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageY}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageY}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageY}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        LineVoltage-3 (B)
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageB}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageB}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageB}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.lineVoltageB}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PhaseVoltage-1
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVolate1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVolate1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVolate1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVolate1}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PhaseVoltage-2
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage2}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PhaseVoltage-3
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.phaseVoltage3}
                      </p>
                    </div>
    
                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        Current-1
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current1}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        Current-2
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current2}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#A8E6CF] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        Current-3
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.current3}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        TotalKW
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKW}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKW}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKW}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKW}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 justify-between text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        TotalKVA
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKVA}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKVA}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKVA}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.totalKVA}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PowerFactor1
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor1}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor1}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PowerFactor2
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor2}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor2}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        PowerFactor3
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor3}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.powerFactor3}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        Average PowerFactor(inst)
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.AvgPowerFactor}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.AvgPowerFactor}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.AvgPowerFactor}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.AvgPowerFactor}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md justify-between p-2 text-center items-center max-[360px]:gap-1">
                      <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                        Frequency(HZ)
                      </h2>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.frequency}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.frequency}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.frequency}
                      </p>
                      <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                        {data?.frequency}
                      </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 text-center justify-between items-center max-[360px]:gap-1">
                    <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                    Net PowerFactor
                    </h2>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAH}
                    </p>
                  </div>

                  <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 text-center justify-between items-center max-[360px]:gap-1">
                    <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                      TotalNetKVAH
                    </h2>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAh}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAh}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAh}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVAh}
                    </p>
                  </div>

                  <div className="flex md:gap-10 gap-8 max-[620px]:gap-6 rounded-md p-2 text-center justify-between items-center max-[360px]:gap-1">
                    <h2 className="bg-[#FF8B94] border md:w-64 w-56 font-medium py-2 rounded-full 2xl:py-4">
                      TotalNetKVARH
                    </h2>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVARH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVARH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
                      {data?.totalNetKVARH}
                    </p>
                    <p className="bg-white px-4 py-1 border border- rounded-full min-[2000px]:px-6 2xl:py-2 max-[450px]:px-2">
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
