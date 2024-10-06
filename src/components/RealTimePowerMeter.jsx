import GaugeChart from "react-gauge-chart";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";

const RealTimePowerMeter = ({ power }) => {
  const { theme, toggleTheme } = useTheme();
  const [value, setValue] = useState(0)
  const minEnergy = 0;
  const maxEnergy = 200;

  const normalizedPower = (power - minEnergy) / (maxEnergy - minEnergy);
  const gaugeColors =
    ["#00ff00", "#ff0000"]

  const valueHandler = ()=>{
    if(power > value){
      setValue(power)
    }
  }
  valueHandler()

  return (
    <div
      className={`bg-white py-1 dark:text-white h-full rounded-lg w-full flex flex-col items-center shadow font-OpenSans dark:bg-[#2c2c2c]`}
    > 
    <h2 className="font-bold text-xl font-Montserrat ">Power</h2>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={10}
        colors={gaugeColors}
        percent={normalizedPower}
        textColor={theme === 'light' ? "#000000" : "#ffffff"}
        formatTextValue={() => `${power} kW`}
        className="min-[2000px]:text-3xl xl:text-xl text-lg max-[500px]:text-base font-medium "
        /* needleColor={theme === 'light' ? '#000' : '#fff'} */
      />
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">Today Highest Peak Value  <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">{value} kW</span></h2>
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">Month Highest Peak Value  <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">0 kW</span></h2>
    </div>
  );
};

export default RealTimePowerMeter;
