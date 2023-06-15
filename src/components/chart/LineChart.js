/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../host";
function LineChart() {
  const { Title, Paragraph } = Typography;
  var [chart,setChart]=useState(lineChart)
  useEffect(() => {
    axios
    .get(`${url}/api/car_history/`)
    .then((resmonth) => {
      const filteredData = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "01";
      });
      const profit = filteredData.length;


      const filteredData2 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "02";
      });
      const profit2 = filteredData2.length;


      const filteredData3 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "03";
      });
      const profit3 = filteredData3.length;


      const filteredData4 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "04";
      });
      const profit4 = filteredData4.length;


      const filteredData5 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "05";
      });
      const profit5 = filteredData5.length


      const filteredData6 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "06";
      });
      const profit6 = filteredData6.length;


      const filteredData7 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "07";
      });
      const profit7 = filteredData7.length;


      const filteredData8 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "08";
      });
      const profit8 = filteredData8.length;


      const filteredData9 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "08";
      });
      const profit9 = filteredData9.length;


      const filteredData10 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "08";
      });
      const profit10 =filteredData10.length;

   
      const filteredData11 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "08";
      });
      const profit11 = filteredData11.length;


      const filteredData12 = resmonth.data.filter((item) => {
        return item.time_create.slice(5, 7) === "08";
      });
      const profit12 = filteredData12.length;
      setTimeout(() => {
          setChart((lineChart.series[0].data[0] = profit,
        lineChart.series[0].data[1] = profit2,
        lineChart.series[0].data[2] = profit3,
        lineChart.series[0].data[3] = profit4,
        lineChart.series[0].data[4] = profit5,
        lineChart.series[0].data[5] = profit6,
        lineChart.series[0].data[6] = profit7,
        lineChart.series[0].data[7] = profit8,
        lineChart.series[0].data[8] = profit9,
        lineChart.series[0].data[9] = profit10,
        lineChart.series[0].data[10] = profit11,
        lineChart.series[0].data[11] = profit12
        ));
      }, 10);
    });
  }, []);
  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Active Users</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Traffic</li>
            <li>{<MinusOutlined />} Sales</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={chart.options}
        series={chart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
