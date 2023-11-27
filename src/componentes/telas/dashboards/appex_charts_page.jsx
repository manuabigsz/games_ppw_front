import React, { Component } from "react";
import DonutChart from "../../charts/DonutChart";
import "../../../App.css";
import LineChart from "../../charts/LineChart";
import RadialChart from "../../charts/RadarChart";
import ColumnChart from "../../charts/BarsChart";
import WithAuth from "../../seg/WithAuth";
class AppexCharts extends Component {

  render() {
    return (
      <div>
        <div className='chart-container'>
          <div className='chart-item'>
            <p>Radar Chart</p>
            <RadialChart />
            <a href="https://apexcharts.com/react-chart-demos/radar-charts/radar-multiple-series/" target="_blank">Acesse na documentação</a>

          </div>
          <div className='chart-item'>
          <p>Donut Chart</p>
            <DonutChart />
            <a href="https://apexcharts.com/react-chart-demos/pie-charts/update-donut/" target="_blank">Acesse na documentação</a>
          </div>
        </div>
        <div className='chart-item-all'>
         <p>Column  Chart</p>
          <ColumnChart />
          <a href="https://apexcharts.com/react-chart-demos/column-charts/column-with-data-labels/" target="_blank">Acesse na documentação</a>
        </div>

        <div className='chart-item-all'>
          <p>Lines Chart</p>
          <LineChart />
          <a href="https://apexcharts.com/react-chart-demos/line-charts/dashed/" target="_blank">Acesse na documentação</a>

        </div>



      </div>
    );
  }
}

export default WithAuth(AppexCharts);
