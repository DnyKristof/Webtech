import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Price chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Price",
            },
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0, 
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;