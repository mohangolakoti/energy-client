/* import GaugeChart from "react-gauge-chart";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";

const RealTimeKvahMeter = ({ kvah }) => {
  const { theme, toggleTheme } = useTheme();
  const [value, setValue] = useState(0)
  const minEnergy = 0;
  const maxEnergy = 20000;

  const normalizedPower = (kvah - minEnergy) / (maxEnergy - minEnergy);
  const gaugeColors =
    ["#00ff00", "#ff0000"]

  const valueHandler = ()=>{
    if(kvah > value){
      setValue(kvah)
    }
  }
  valueHandler()

  return (
    <div
      className={`bg-white py-1 dark:text-white h-full rounded-lg w-full flex flex-col items-center shadow font-OpenSans dark:bg-[#2c2c2c]`}
    > 
    <h2 className="font-bold text-xl font-Montserrat ">Kvah</h2>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={10}
        colors={gaugeColors}
        percent={normalizedPower}
        textColor={theme === 'light' ? "#000000" : "#ffffff"}
        formatTextValue={() => `${kvah} kVAh`}
        className="min-[2000px]:text-3xl xl:text-xl text-lg max-[500px]:text-base font-medium "
        /* needleColor={theme === 'light' ? '#000' : '#fff'} 
      />
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">Today Highest Peak Value  <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">{value} kVAh</span></h2>
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">Month Highest Peak Value  <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">0 kVAh</span></h2>
    </div>
  );
};

export default RealTimeKvahMeter;
 */

import React from "react";

const RealTimeKvahMeter = ({kvah}) => {
  return (
      <div className="bg-white rounded-lg shadow  text-lg font-OpenSans dark:bg-[#2c2c2c] dark:text-white text-center p-5 w-full h-full">
        <h2 className="font-bold text-xl text-center py-2 font-Montserrat">
          kVAh
        </h2>
        <p className="font-medium mt-6">Instaneous  kVAh </p>
        <p className="bg-[#a4a4e3] mx-4 p-2 my-3 rounded-lg font-semibold">{kvah}</p>
        <p className="font-medium mt-6" >Today kVAh</p>
        <p className="bg-[#a4a4e3] mx-4 my-3 p-2 rounded-lg font-semibold">0</p>
      </div>
  );
};

export default RealTimeKvahMeter;
