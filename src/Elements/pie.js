import React from "react";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  ArcElement,
  RadialLinearScale,
  Title,
  Filler,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  ArcElement,
  Title,
  RadialLinearScale,

  Filler
);
function App() {
  const data = {
    labels: ["one", "two", "three"],
    datasets: [
      {
        data: [3, 6, 7],
        backgroundColor: ["aqua", "orangered", "purple"],
      },
    ],
  };
  const options = {};

  return (
    <div>
      <div>
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
}

export default App;
