import React, { useState } from 'react';
import Chart from "react-apexcharts";

const DonutChart = () => {

  //https://apexcharts.com/react-chart-demos/pie-charts/update-donut/
  const [series, setSeries] = useState([44, 55, 13, 33]);

  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: '12px',
        colors: ["#32a0a8"]
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  };

  
  const appendData = () => {
    const arr = [...series];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(arr);
  };

  const removeData = () => {
    if (series.length === 1) return;
    const arr = [...series];
    arr.pop();
    setSeries(arr);
  };

  const randomize = () => {
    const arr = series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(arr);
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div>
      <div className="row">
        <Chart
          options={options}
          series={series}
          type="donut"
          height="100%"
          width="100%"
        />
      </div>

      <div className="actions">
        <button type="button" class="btn btn-dark" onClick={appendData}>+ ADD</button>
        &nbsp;
        <button type="button" class="btn btn-dark" onClick={removeData}>- REMOVE</button>
        &nbsp;
        <button type="button" class="btn btn-dark" onClick={randomize}>RANDOMIZE</button>
        &nbsp;
        <button type="button" class="btn btn-dark" onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default DonutChart;
