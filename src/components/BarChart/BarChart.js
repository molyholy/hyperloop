import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "bottom"
            }
          }
        },
        chart: {
          toolbar: {
            show: false
          },
          fontFamily: "IBM Plex Sans, sans-serif"
        },
        colors: ["#0062FF"],
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0
        },

        xaxis: {
          categories: props.categories,
          axisTicks: { show: false }
        },
        yaxis: {
          labels: {
            show: false
          }
        },

        tooltip: {
          enabled: false
        },
        grid: {
          show: false
        }
      },
      series: [
        {
          data: props.data
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
        />
      </div>
    );
  }
}

export default BarChart;
