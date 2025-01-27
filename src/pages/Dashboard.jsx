import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentTime from "../components/CurrentTime";
import { useTheme } from "../components/ThemeContext";
import { dark, light } from "../constants";
import { Link } from "react-router-dom";
import EnergyUnits from "../components/EnergyUnits";
import RealTimeKvaMeter from "../components/RealTimeKvaMeter";
import Sidebar from "../components/Sidebar";
import RealTimePowerMeter from "../components/RealTimePowerMeter";
import RealTimePFMeter from "../components/RealTimePFMeter";
import RealTimeKvahMeter from "../components/RealTimeKvahMeter";
import {API_URL} from '../data/api';
import { API_URL2 } from "../data/api";

const Home = () => {
  const [data, setData] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const [todayConsumption, setTodayConsumption] = useState(null);
  const [monthlyEnergy, setMonthlyEnergy] = useState(null)
  const [powerFactor,setPowerFactor] = useState(null);
  const [MonthPowerFactor,setMonthPowerFactor] = useState(null);
  const [highestValue, setHighestValue] = useState({
    kvaToday:null,
    kvaMonth:null,
    kwToday:null,
    kwMonth:null
  });

  const notify = () => toast.error("Energy limit exceeded!");

  useEffect(() => {
    // Fetch previous day's energy (initial energy)
    const fetchPreviousDayEnergy = async () => {
      try {
        const response = await axios.get(`${API_URL2}/sensordata`);
        const response1 = await axios.get(`${API_URL2}/monthly-energy`);
        const response2 = await axios.get(`${API_URL2}/highest-kva`);

        setMonthlyEnergy(response1.data.totalEnergyConsumption.toFixed(3))
        setHighestValue({
          kvaToday: response2.data.highestKvaToday,
          kvaMonth: response2.data.highestKvaMonth,
          kwToday: response2.data.highestKwToday,
          kwMonth: response2.data.highestKwMonth
        })
        setPowerFactor(response.data.PowerFactor.toFixed(3));
        setMonthPowerFactor(response.data.MonthPowerFactor.toFixed(3));
        setTodayConsumption(response.data.KVAHConsumption.toFixed(3));

      } catch (error) {
        console.error("Error fetching previous day energy:", error);
      }
    };

    fetchPreviousDayEnergy();
  }, []);

  useEffect(() => {
    // Fetch current energy values every minute
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        const newData = response.data;
        setData(newData);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Fetch data every 1 minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const getPFClass = (avgPF) => {
    if (avgPF < 0.7) {
        return 'bg-red-300'; // Class for red background
    } else if (avgPF < 0.8) {
        return 'bg-yellow-300'; // Class for yellow background
    }
    return ''; // No special class
  }
  
  return (
    <div className='h-[100vh] flex md:flex-row flex-col'>
    <Sidebar/>
    <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full text-[#1F2937] px-3 h-screen overflow-auto 2xl:px-5">

      <header className="justify-between flex items-center py-2">
        <h1 className="md:text-2xl 2xl:text-5xl text-xl p-4 flex md:gap-3 font-Audiowide font-bold dark:text-[#e4e2e2]">
        Green Fusion IoT Solution
        </h1>
        <span className="flex flex-row justify-center items-center">
          <img
            className="w-[30px] h-[30px] cursor-pointer 2xl:w-[42px] 2xl:h-[42px]"
            src={theme === "light" ? dark : light}
            alt="add"
            onClick={toggleTheme}
          />
          <p className="md:text-sm 2xl:text-2xl text-xs text-center px-4 text-gray-500 font-Audiowide font-medium dark:text-[#eae8e8]">
            <CurrentTime />
          </p>
        </span>
      </header>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 mt- 2xl:mt-6">
        <div className="w-full flex flex-col justify-around bg-[#a4a4e3] rounded-lg min-[2000px]:text-4xl xl:text-xl text-lg max-[500px]:text-base font-medium shadow font-OpenSans py-4 px-3 2xl:px-7 max-[500px]:px-0">
          <div className="param-div font-bold font-Montserrat text-lg">
            <h2 className=" value bg-transparent">
              PCC
            </h2>
            <p className="  value bg-transparent pr-2 leading-5">
              Power<p className="text-sm">(kW)</p>
            </p>
            <p className="  value bg-transparent pr-2 leading-5">
              Energy<p className="text-sm">(kWh)</p>
            </p>
            <p className="  value bg-transparent pr-2">
              kVA
            </p>
            <p className="  value bg-transparent leading-5 pr-1">
              Power<p>Factor</p>
            </p>
            <p className="  value bg-transparent pr-5">
              kVAh
            </p>
          </div>
          <div className="param-div">
            <Link to='/SingleMeter/1'><h2 className="pccs">
              PCC1
            </h2></Link>
            <p className="value">
              {data?.Total_KW_meter_1.toFixed(2)}
            </p>
            <p className="value">
              {data?.TotalNet_KWH_meter_1.toFixed(1)}
            </p>
            <p className="value">
              {data?.Total_KVA_meter_1.toFixed(2)}
            </p>
            <p className="value">
              {data?.Avg_PF_meter_1.toFixed(2)}
            </p>
            <p className="value">
              {data?.TotalNet_KVAH_meter_1.toFixed(1)}
            </p>
          </div>
          
          <div className="param-div">
            <Link to='/pcc2'><h2 className="pccs">
              PCC2
            </h2></Link>
            <p className="value">
                0
            </p>
            <p className="value">
                0
            </p>
            <p className="value">
                0
            </p>
            <p className="value">
              0
            </p>
            <p className="value">
              0
            </p>
          </div>
          <div className="param-div">
            <Link to='/pcc3'><h2 className="pccs">
              PCC3
            </h2></Link>
            <p className="value">
            0
            </p>
            <p className="value">
            0
            </p>
            <p className="value">
            0
            </p>
            <p className="value">
              0
            </p>
            <p className="value">
              0
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <EnergyUnits energy={todayConsumption} monthlyEnergy={monthlyEnergy}  />
          <div className="flex flex-col gap-4">
            <RealTimeKvaMeter kva={data?.Total_KVA_meter_1} todayKva={highestValue.kvaToday} monthKva = {highestValue.kvaMonth} />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row gap-4 flex-col h-[44%] mt-4 ">
        <RealTimePowerMeter power={data?.Total_KW_meter_1.toFixed(2)} todayKw={highestValue.kwToday} monthKw = {highestValue.kwMonth} />
        <RealTimePFMeter powerFactor={data?.Avg_PF_meter_1.toFixed(3)} todayPF={powerFactor} monthPF={MonthPowerFactor} />
        <RealTimeKvahMeter kvah={data?.TotalNet_KVAH_meter_1.toFixed(1)} kwh={data?.TotalNet_KWH_meter_1.toFixed(3)} />
      </div>
    </section>
    </div>
  );
};

export default Home;