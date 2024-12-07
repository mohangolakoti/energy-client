import GaugeChart from "react-gauge-chart";
import { useTheme } from "../components/ThemeContext";
import { useState, useEffect } from "react";

const RealTimePowerMeter = ({ power = 0, todayKw = 0, monthKw = 0 }) => {
  const { theme } = useTheme();
  const [value, setValue] = useState(0);

  const minEnergy = 0;
  const maxEnergy = 200;

  // Ensure power is a valid number and normalize it
  const normalizedPower =
    typeof power === "number" && !isNaN(power)
      ? Math.max(0, Math.min(1, (power - minEnergy) / (maxEnergy - minEnergy)))
      : 0;

  const gaugeColors = ["#00ff00", "#ff0000"];

  // Update highest peak value
  useEffect(() => {
    if (typeof power === "number" && power > value) {
      setValue(power);
    }
  }, [power, value]);

  return (
    <div
      className={`bg-white py-1 dark:text-white h-full rounded-lg w-full flex flex-col items-center shadow font-OpenSans dark:bg-[#2c2c2c]`}
    >
      <h2 className="font-bold text-xl font-Montserrat">Power</h2>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={10}
        colors={gaugeColors}
        percent={normalizedPower}
        textColor={theme === "light" ? "#000000" : "#ffffff"}
        formatTextValue={() => `${power} kW`}
        className="min-[2000px]:text-3xl xl:text-xl text-lg max-[500px]:text-base font-medium"
      />
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">
        Today Highest Peak Value
        <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">
          {Math.max(todayKw, value)} kW
        </span>
      </h2>
      <h2 className="font-OpenSans text-sm font-medium flex flex-col">
        Month Highest Peak Value
        <span className="bg-red-300 font-semibold py-1 my-1 rounded-lg text-center">
          {Math.max(monthKw, value)} kW
        </span>
      </h2>
    </div>
  );
};

export default RealTimePowerMeter;
