import React, { Component } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "راس۳۰۸",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: " 500کاب",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "هوبارد",
          data: [15, 30, 73, 54, 49, 62, 69, 321, 148],
        },
        {
          name: "آربراکرز پلاس",
          data: [176, 385, 101, 198, 87, 125, 91, 174, 94],
        },
        {
          name: "آرین",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      options: {
        chart: {
          type: "line",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "1389",
            "1390",
            "1391",
            "1392",
            "1393",
            "1394",
            "1395",
            "1396",
            "1397",
            "1398",
            "1399",
            "1400",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div
        id="chart"
        style={{ margin: "auto", padding: "0", width: "100%", height: "100%" }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}
