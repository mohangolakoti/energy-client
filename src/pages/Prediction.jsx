import React from "react";
import Sidebar from "../components/Sidebar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import EnergyConsumptionChart from "../components/EnergyConsumptionChart";
import EnergyConsumptionChart1 from "../components/EnergyConsumptionChart1";

const Prediction = () => {
    const data = [
        { name: 'January', uv: 1400 },
        { name: 'February', uv: 1450 },
        { name: 'March', uv: 1444 },
        { name: 'April', uv: 1500 },
      ];
      const data1 = [
        { name: 'January', uv: 8740 },
        { name: 'February', uv: 9250 },
        { name: 'March', uv: 8744 },
        { name: 'April', uv: 9900 },
      ];
  return (
    <div>
      <section className="w-full h-fit flex md:flex-row flex-col">
        <Sidebar />
        <div className="p-6 bg-gray-100 min-h-screen w-full">
            <h1 className="text-2xl font-bold mb-4 font-Montserrat">Predictions</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="bg-white rounded-lg shadow  text-lg font-OpenSans dark:bg-[#2c2c2c] dark:text-white text-center p-5 w-full h-full">
                        <h2 className="font-bold text-xl text-center py-2 font-Montserrat">
                            Energy Consumption Prediction
                        </h2>
                        <p className="font-medium mt-6">Units Consumed Next Month</p>
                        <p className="bg-[#a4a4e3] mx-4 p-2 my-3 rounded-lg font-semibold">1471 Units</p>
                        <p className="font-medium mt-6" >Units Consumed Next Year</p>
                        <p className="bg-[#a4a4e3] mx-4 my-3 p-2 rounded-lg font-semibold">155559 Units</p>
                    </div>
                    <div className="bg-white rounded-lg shadow  text-lg font-OpenSans dark:bg-[#2c2c2c] dark:text-white text-center p-5 w-full h-full">
                        <h2 className="font-bold text-xl text-center py-2 font-Montserrat">
                            Energy Consumption Bill Prediction
                        </h2>
                        <p className="font-medium mt-6">Next Month Bill</p>
                        <p className="bg-[#a4a4e3] mx-4 p-2 my-3 rounded-lg font-semibold">Rs.{1471*6.7}</p>
                        <p className="font-medium mt-6" >Next Year Bill</p>
                        <p className="bg-[#a4a4e3] mx-4 my-3 p-2 rounded-lg font-semibold">Rs.{155559*6.7}</p>
                    </div>
                </div>
                <div className="xl:flex gap-4 h-full ">
                    <EnergyConsumptionChart1 />
                    <EnergyConsumptionChart/>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Prediction;
