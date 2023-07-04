import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography,DatePicker } from "antd";
import eChart from "./configs/eChart";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../host";
function EChart() {
  const { Title, Paragraph } = Typography;
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');
  const[search,setSearch]=useState(new Date().getFullYear().toString());
  const [chart, setChart] = useState({
    series: [{
      name: "Sales",
      data: [],
color: "#155998"
    }]
  });
  useEffect(() => {
    console.log(search,"zzzz");
    axios
    .get(`${url}/api/car_history/`)
    .then((resmonth) => {
      const filteredData = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-01`
      });
      const totalPrice = filteredData.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice = filteredData.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit = totalPrice - totalinitialprice;


      const filteredData2 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-02`
      });
      const totalPrice2 = filteredData2.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice2 = filteredData2.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit2 = totalPrice2 - totalinitialprice2;


      const filteredData3 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-03`
      });
      const totalPrice3 = filteredData3.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice3 = filteredData3.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit3 = totalPrice3 - totalinitialprice3;


      const filteredData4 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-04`
      });
      const totalPrice4 = filteredData4.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice4 = filteredData4.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit4 = totalPrice4 - totalinitialprice4;


      const filteredData5 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-05`
      });
      const totalPrice5 = filteredData5.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice5 = filteredData5.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit5 = totalPrice5 - totalinitialprice5;


      const filteredData6 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-06`
      });
      const totalPrice6 = filteredData6.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice6 = filteredData6.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit6 = totalPrice6 - totalinitialprice6;


      const filteredData7 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-07`
      });
      const totalPrice7 = filteredData7.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice7 = filteredData7.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit7 = totalPrice7 - totalinitialprice7;


      const filteredData8 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-08`
      });
      const totalPrice8 = filteredData8.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice8 = filteredData8.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit8 = totalPrice8 - totalinitialprice8;


      const filteredData9 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-09`
      });
      const totalPrice9 = filteredData9.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice9 = filteredData9.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit9 = totalPrice9 - totalinitialprice9;


      const filteredData10 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-10`
      });
      const totalPrice10 = filteredData10.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice10 = filteredData10.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit10 = totalPrice10 - totalinitialprice10;

   
      const filteredData11 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-11`
      });
      const totalPrice11 = filteredData11.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice11 = filteredData11.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit11 = totalPrice11 - totalinitialprice11;


      const filteredData12 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${search}-12`
      });
      const totalPrice12 = filteredData12.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice12 = filteredData12.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit12 = totalPrice12 - totalinitialprice12;
      
      setChart({
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
    });
    axios
    .get(`${url}/api/car_history/`)
    .then((res) => {
      const month = new Date().toISOString().slice(5, 7); 
      const filteredData = res.data.filter((item) => {
        return item.time_create.slice(5,7) === month; 
      });
      const totalPrice = filteredData.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice = filteredData.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const totalcar = filteredData.length
      const profit=totalPrice-totalinitialprice
      setData(profit);
      setData2(totalPrice)
      setData4(totalcar)
      // console.log(totalPrice, "totalprice");
      // console.log(month,"time");
      // console.log(totalcar,"car");
      // console.log(totalinitialprice, "totalinitialprice");
      // console.log(profit,"profit");
      axios
      .get(`${url}/auth/users/`,{
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res2) => {
      // console.log(res2.data,"user");
      const month2 = new Date().toISOString().slice(5,7); 
      const totalUsers = res2.data.length
      const todayUsers=res2.data.filter(item => 
        item.date_joined.slice(5,7) === month2
      )
      // console.log(totalUsers);
      // console.log(todayUsers,"today");
      
      setData3(totalUsers)
      // setData4(todayUsers.length)
      axios
      .get(`${url}/api/cars/`)
      .then((res3) => {
        setData5(res3.data.length);
      })
      })

    })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = [
    {
      Title: data3,
      user: "foydalanuvchilar",
    },
    {
      Title: `${data2}$`,
      user: "oborot",
    },
    {
      Title: `${data}$`,
      user: "foyda",
    },
    {
      Title: data4,
      user: "sotilgan avtomobilar",
    },
    {
      Title: data5,
      user: "bor moshina",
    },
  ];
  const handleInputChange = (date,dateString) => {
    setSearch(dateString);
    axios
    .get(`${url}/api/car_history/`)
    .then((resmonth) => {
      const filteredData = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-01`
      });
      const totalPrice = filteredData.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice = filteredData.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit = totalPrice - totalinitialprice;


      const filteredData2 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-02`
      });
      const totalPrice2 = filteredData2.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice2 = filteredData2.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit2 = totalPrice2 - totalinitialprice2;


      const filteredData3 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-03`
      });
      const totalPrice3 = filteredData3.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice3 = filteredData3.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit3 = totalPrice3 - totalinitialprice3;


      const filteredData4 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-04`
      });
      const totalPrice4 = filteredData4.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice4 = filteredData4.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit4 = totalPrice4 - totalinitialprice4;


      const filteredData5 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-05`
      });
      const totalPrice5 = filteredData5.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice5 = filteredData5.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit5 = totalPrice5 - totalinitialprice5;


      const filteredData6 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-06`
      });
      const totalPrice6 = filteredData6.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice6 = filteredData6.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit6 = totalPrice6 - totalinitialprice6;


      const filteredData7 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-07`
      });
      const totalPrice7 = filteredData7.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice7 = filteredData7.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit7 = totalPrice7 - totalinitialprice7;


      const filteredData8 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-08`
      });
      const totalPrice8 = filteredData8.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice8 = filteredData8.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit8 = totalPrice8 - totalinitialprice8;


      const filteredData9 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-09`
      });
      const totalPrice9 = filteredData9.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice9 = filteredData9.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit9 = totalPrice9 - totalinitialprice9;


      const filteredData10 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-10`
      });
      const totalPrice10 = filteredData10.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice10 = filteredData10.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit10 = totalPrice10 - totalinitialprice10;

   
      const filteredData11 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-11`
      });
      const totalPrice11 = filteredData11.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice11 = filteredData11.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit11 = totalPrice11 - totalinitialprice11;


      const filteredData12 = resmonth.data.filter((item) => {
        return item.time_create.slice(0, 7) === `${dateString}-12`
      });
      const totalPrice12 = filteredData12.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const totalinitialprice12 = filteredData12.reduce((acc, cur) => {
        return acc + cur.initial_price;
      }, 0);
      const profit12 = totalPrice12 - totalinitialprice12;
      
      setChart({
        series: [{
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
    });
  }
  const onChange = (dateString) => {
    alert( dateString);
  };
  return (
    <>
        <DatePicker onChange={handleInputChange} picker="year" />
    {/* <select onChange={handleInputChange}>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      <option>2027</option>
      <option>2028</option>
    </select> */}
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={chart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Bir oy davomida statistika</Title>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
