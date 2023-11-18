import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function RadarChart(){

    var options = {
        chart:{
            toolbar: {
                show: false
              },
        },
        legend: {
            show: false
        },
        series: [
        {
            name: "Radar Series 1",
            data: [10, 33, 12, 87]
        },
        {
            name: "Radar Series 2",
            data: [87, 12, 33, 10]
        }
        ],
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