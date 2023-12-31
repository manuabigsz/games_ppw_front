import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function RadarChart(){

    var options = {
       
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      },],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      },
    
    
    }

  return(
      <div className="row">
        
          <Chart
          options={options}
          series={options.series}
          type="radar"
          height="100%"
          width="100%"
        />
    </div>

)

}