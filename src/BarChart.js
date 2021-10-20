import React, { Component } from "react";
import Plot from "react-plotly.js";

class BarChart extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              type: "bar",
              x: ["one", "two", "three"],
              y: [29, 150, 85],
              marker: { color: "rgba(20,56,19)" },
            },
          ]}
          layout={{ width: 1000, height: 500, title: "a simple bar chart" }}
        />
      </div>
    );
  }
}

export default BarChart;
