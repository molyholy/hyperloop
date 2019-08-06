import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   options: {
    //     plotOptions: {
    //       bar: {
    //         horizontal: true,
    //         distributed: true
    //       }
    //     },
    //     colors: ["#0062FF"],
    //     tooltip: {
    //       enabled: false
    //     },
    //     dataLabels: {
    //       enabled: true,
    //       offsetX: 0,

    //       textAnchor: "start",
    //       formatter: function(val, opt) {
    //         return "dfd";
    //       },
    //       style: {
    //         fontSize: "16px",
    //         fontFamily: "IBM Plex Sans"
    //       }
    //     },
    //     chart: {
    //       toolbar: {
    //         show: false
    //       },
    //       fontFamily: "IBM Plex Sans, sans-serif"
    //     },

    //     xaxis: {
    //       categories: props.categories,
    //       axisTicks: {
    //         show: false
    //       }
    //     },
    //     yaxis: {
    //       labels: {
    //         show: false
    //       }
    //     },
    //     grid: {
    //       show: false
    //     }
    //   },
    //   series: [
    //     {
    //       data: props.data
    //     }
    //   ]
    // };
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
