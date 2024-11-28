import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Data = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSensorData(date);
  }, [date]);

  // Function to fetch sensor data based on the selected date
  const fetchSensorData = async (selectedDate) => {
    setLoading(true);
    try {
      const response = await fetch(`http://65.1.134.192:5000/api1/sensordatabydate/${selectedDate}`);
      const data = await response.json();
      console.log(data)
      setSensorData(data);
      setError(null); // Clear any previous error
    } catch (err) {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <section className="w-full h-fit flex md:flex-row flex-col">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold mb-4">Sensor Data Dashboard</h1>

          {/* Date Selector */}
          <div className="flex gap-4 justify-center items-center">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="date"
            >
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)} // Update state when a date is selected
            />
          </div>
        </div>

        {/* Display loading state */}
        {loading && <div className="text-blue-500 text-lg">Loading...</div>}

        {/* Display error if any */}
        {error && <div className="text-red-500 text-lg">{error}</div>}

        {/* Display sensor data in a table */}
        {sensorData.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Sensor Data for {date}
            </h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Time</th>
                  <th className="py-2 px-4 border">Total KW</th>
                  <th className="py-2 px-4 border">TotalNet KWH</th>
                  <th className="py-2 px-4 border">Total KVA</th>
                  <th className="py-2 px-4 border">Avg PF</th>
                  <th className="py-2 px-4 border">TotalNet KVAH</th>
                  <th className="py-2 px-4 border">Energy Consumption</th>
                </tr>
              </thead>
              <tbody>
                {sensorData.map((data) => (
                  <tr key={data.id}>
                    <td className="py-2 px-4 border">
                      {new Date(data.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="py-2 px-4 border">{data.Total_KW_meter_1}</td>
                    <td className="py-2 px-4 border">{data.TotalNet_KWH_meter_1}</td>
                    <td className="py-2 px-4 border">{data.Total_KVA_meter_1}</td>
                    <td className="py-2 px-4 border">{data.Avg_PF_meter_1}</td>
                    <td className="py-2 px-4 border">{data.TotalNet_KVAH_meter_1}</td>
                    <td className="py-2 px-4 border">{data.energy_consumption_meter_1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* No data message */}
        {!loading && sensorData.length === 0 && (
          <p className="text-gray-600">No data found for the selected date.</p>
        )}
      </div>
    </section>
  );
};

export default Data;
