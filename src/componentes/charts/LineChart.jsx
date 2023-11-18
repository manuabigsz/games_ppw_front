import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function LineChart(){

  //https://apexcharts.com/react-chart-demos/line-charts/dashed/
    var options = { 
      legend: {
        show: false
      },
      series: [{
      name: 'Time A',
      type: 'column',
      data: [10, 10, 50, 45]
      
    }, {
      name: 'Time B',
      type: 'area',
      data: [45, 10, 50, 10]
    }, {
      name: 'Time C',
      type: 'line',
      data: [50, 45, 10, 10]
    }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '40%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [10, 10, 50, 45]
      }
    },
    labels: ['01/02/2023', '02/02/2023', '03/02/2023', '04/02/2023'],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: true},
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
    
        }
      }
    }
  }

  return(
    <div className="row">
       
        <Chart
        options={options}
        series={options.series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  )
}