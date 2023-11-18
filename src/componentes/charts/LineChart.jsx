import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function LineChart(){
    var options = { 
      legend: {
        show: false
      },
      series: [{
      name: 'TEAM A',
      type: 'column',
      data: [10, 10, 50, 45]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [45, 10, 50, 10]
    }, {
      name: 'TEAM C',
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
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003'],
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
        <p className='text-2xl font-thin text-center'>Cross analysis</p>
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