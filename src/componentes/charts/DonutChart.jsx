import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function DonutChart(){
  var options = {
    series: [10, 20, 15, 50],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    legend: {
      show: false
    },
    stroke: {
      show: true}
  }
  
  return(
    <div>
    <p className='text-2xl font-thin text-center'>Budget distribution</p>
    <div className="row">
        <Chart
        options={options}
        series={options.series}
        type="donut"
        height="100%"
        width="100%"
      />
  </div>
  </div>
  )
}