import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [24, 12, 36, 28, 30, 37, 53, 43, 28],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: [24, 12, 36, 28, 30, 37, 53, 43, 28],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: [24, 12, 36, 28, 30, 37, 53, 43, 28],
    },
  ],
};
const MultiLineChart = () => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>MultiLine Chart</h2>
      <Chart type="bar" data={data} />
    </div>
  );
};

export default MultiLineChart;
