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
import { Bar } from "react-chartjs-2";
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
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default App;
