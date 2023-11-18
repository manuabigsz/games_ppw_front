import React, { Component } from "react";
import BarsChart from "../../charts/BarsChart";
import DonutChart from "../../charts/DonutChart";
import "../../../App.css";
import LineChart from "../../charts/LineChart";
import RadialChart from "../../charts/RadialBar";

class AppexCharts extends Component {

  render() {
    return (
      <div>
        <div className='chart-container'>
          <div className='chart-item'>
            <RadialChart />


          </div>
          <div className='chart-item'>
            <DonutChart />
          </div>
        </div>
        <div className='chart-item-all'>
          <BarsChart />

        </div>

        <div className='chart-item-all'>
          <LineChart />
        </div>



      </div>
    );
  }
}

export default AppexCharts;
