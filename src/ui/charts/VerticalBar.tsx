import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sales Trends",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let gradient = ctx.createLinearGradient.(0, 0, 0, 400);
// gradient.

export const data = {
  labels,
  datasets: [
    {
      label: "Sales Trends",
      data: [
        7000, 21000, 3500, 27500, 9000, 43000, 9500, 23000, 32000, 4000, 30000,
        26500,
      ],
      fillColor:
        "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0) 100%)",
      borderRadius: 20,
      lineWidth: 30,
    },
  ],
};

const VerticalBar = () => {
  return <Bar options={options} data={data} />;
};

export default VerticalBar;
