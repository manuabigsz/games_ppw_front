import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function BarsChart(){

  var options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
    },
    xaxis: {
      categories: [2019, 2020, 2021, 2022]
    },
    legend: {
      show: false
    },                            
    fill: {
      colors : ['#FF0000'],
    }
  }
  var series = [
    {
      data: [10, 33, 12, 87],
    },
  ]

  return(
   <>
   
        <Chart
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
        />
   </>
       
   
  )
}