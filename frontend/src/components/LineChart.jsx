import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData,options }) {
    const customOptions = {
      ...options,
        aspectRatio: 1,
     canvas: {
        height: 800, // Set the desired height
        width: 800,  // Set the desired width
      },
    };
    return <Line data={chartData} options={customOptions} className='lineChart'/>;
  }

export default LineChart;