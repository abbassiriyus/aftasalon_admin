import ReactApexChart from "react-apexcharts";
import { Typography,DatePicker } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import ElineChart from "./configs/lineChart";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner.js"
import url from "../host";
function LineChart() {
  const { Title } = Typography;
  const [isLoading, setIsLoading] = useState(false);
  const[search,setSearch]=useState(new Date().getFullYear().toString());
  var [lineChart,setlineChart]=useState({
    series: [
      {
        name: "sotilgan avtomobilar",
        data: [],
      },
    ],
  })
  useEffect(() => {
    setIsLoading(true)
    axios
    .get(`${url}/api/car_history/`)
    .then((resmonth) => {
      const filteredData = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-01`;
      });
      const profit = filteredData.length;


      const filteredData2 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-02`;
      });
      const profit2 = filteredData2.length;


      const filteredData3 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-03`;
      });
      const profit3 = filteredData3.length;


      const filteredData4 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-04`;
      });
      const profit4 = filteredData4.length;


      const filteredData5 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-05`;
      });
      const profit5 = filteredData5.length


      const filteredData6 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-06`;
      });
      const profit6 = filteredData6.length;


      const filteredData7 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-07`;
      });
      const profit7 = filteredData7.length;


      const filteredData8 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-08`;
      });
      const profit8 = filteredData8.length;


      const filteredData9 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-09`;
      });
      const profit9 = filteredData9.length;


      const filteredData10 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-010`;
      });
      const profit10 =filteredData10.length;

   
      const filteredData11 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-011`;
      });
      const profit11 = filteredData11.length;


      const filteredData12 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-012`;
      });
      const profit12 = filteredData12.length;
      setTimeout(() => {
        setlineChart({
          series: [{
            name: "Foyda",
            data: [
              profit,
              profit2,
              profit3,
              profit4,
              profit5,
              profit6,
              profit7,
              profit8,
              profit9,
              profit10,
              profit11,
              profit12
            ]
          }]
        });
      }, 10);
      setIsLoading(false)
    });
  }, []);


  const handleInputChange = (date,dateString) => {
    setSearch(dateString);
    setIsLoading(true)
    axios
    .get(`${url}/api/car_history/`)
    .then((resmonth) => {
      const filteredData = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-01`;
      });
      const profit = filteredData.length;


      const filteredData2 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-02`;
      });
      const profit2 = filteredData2.length;


      const filteredData3 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-03`;
      });
      const profit3 = filteredData3.length;


      const filteredData4 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-04`;
      });
      const profit4 = filteredData4.length;


      const filteredData5 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-05`;
      });
      const profit5 = filteredData5.length


      const filteredData6 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-06`;
      });
      const profit6 = filteredData6.length;


      const filteredData7 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-07`;
      });
      const profit7 = filteredData7.length;


      const filteredData8 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-08`;
      });
      const profit8 = filteredData8.length;


      const filteredData9 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-09`;
      });
      const profit9 = filteredData9.length;


      const filteredData10 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-10`;
      });
      const profit10 =filteredData10.length;

   
      const filteredData11 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-11`;
      });
      const profit11 = filteredData11.length;
      const filteredData12 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-12`;
      });
      const profit12 = filteredData12.length;
      setTimeout(() => {
        setlineChart({
          series: [{
            name: "Foyda",
            data: [
              profit,
              profit2,
              profit3,
              profit4,
              profit5,
              profit6,
              profit7,
              profit8,
              profit9,
              profit10,
              profit11,
              profit12
            ]
          }]
        });
      }, 10);
      setIsLoading(false)
    });
  }
  return (
<>{isLoading ? <LoadingSpinner /> :<>
<DatePicker placeholder={search} onChange={handleInputChange} picker="year" />
      <div className="linechart">
        <div>
          <Title level={5}>sotilgan avtomobilar</Title>
        </div>
      </div>
      <ReactApexChart
        className="full-width"
        options={ElineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>}
</>
  );
}

export default LineChart;
