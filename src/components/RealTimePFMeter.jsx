import React from "react";

const RealTimePFMeter = ({powerFactor, todayPF}) => {
  const getPFClass = (avgPF) => {
    if (avgPF < 0.7) {
        return 'bg-red-400'; // Class for red background
    } else if (avgPF < 0.8) {
        return 'bg-yellow-400'; // Class for yellow background
    }
    return ''; // No special class
  }

  return (
      <div className="bg-white rounded-lg shadow  text-lg font-OpenSans dark:bg-[#2c2c2c] dark:text-white text-center p-5 w-full h-full">
        <h2 className="font-bold text-xl text-center py-2 font-Montserrat">
          Power Factor
        </h2>
        <p className="font-medium mt-6">Instaneous  Power Factor </p>
        <p className={`${getPFClass(powerFactor)} bg-[#a4a4e3] mx-4 p-2 my-3 rounded-lg font-semibold`}>{powerFactor}</p>
        <p className="font-medium mt-6" >Today Power Facotor</p>
        <p className="bg-[#a4a4e3] mx-4 my-3 p-2 rounded-lg font-semibold">{todayPF}</p>
      </div>
  );
};

export default RealTimePFMeter;
