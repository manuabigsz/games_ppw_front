import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function ColumnChart(){

  var options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: { //mostra os valores de cada barra
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '15px',
        colors: ["#32a0a8"]
      }
    },
    
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#32a0a8',
            colorTo: '#32a0a8',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      },
      
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    
    },
    
  }
  var series = [{
    name: 'Players ativos',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }]

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