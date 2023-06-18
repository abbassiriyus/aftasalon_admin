import { Button, Table,Input } from "antd";
import {SearchOutlined,} from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style/style.css";
const CarHistory = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [page, setPage] = useState(1);
  const [position, setPosition] = useState('');
  const [series, setSeries] = useState('');
  const [model, setModel] = useState('');
  const [fuelSort, setFuelSort] = useState('');
  const [gearbox, setGearbox] = useState('');
  const [garant, setGarant] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [distance, setDistance] = useState('');
  const [engine, setEngine] = useState('');
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "is_active",
      render: (el) => (
        <div className="status">
          {el ? (
            <h1 style={{ color: "green" }}>
              <AiOutlineCheck />
            </h1>
          ) : (
            <h1 style={{ color: "red" }}>
              <AiOutlineClose className="AiOutlineClose" />
            </h1>
          )}
        </div>
      ),
    },
    {
      title: "Ma'lumot",
      key: "edit",
      width: "5%",
      render: (__, item) => {
        return (
          <div>
            <Button
              onClick={() => {
                getOneProduct(item);
              }}
              style={{ background: "orange", color: "white" }}
              type="text"
            >
              Ma'lumot
            </Button>
          </div>
        );
      },
    },
    // {
    //   title: "O'chirish",
    //   key: "O'chirish",
    //   width: "5%",
    //   render: (__, item) => {
    //     return (
    //       <div>
    //         <Button               onClick={() => {
    //             deletecar(item);
    //           }} type="danger">
    //         O'chirish
    //         </Button>
    //       </div>
    //     );
    //   },
    // },
  ];
  const getOneProduct = (item) => {
    setdata(item);
    setYear(item.year)
    setDistance(item.distance)
    setEngine(item.engine)
    setPage(2);
        axios.get(`${url}/api/position_get/${item.position}/`).then((res) => {
            setPosition(res.data.name)
            setSeries(res.data.series.name)
            setModel(res.data.series.model.name)
            axios.get(`${url}/api/fuel_sort/${item.fuel_sort}/`).then((res2) => {   
                setFuelSort(res2.data.name)
                axios.get(`${url}/api/gear_box/${item.gearbox}/`).then((res3) => {   
                    setGearbox(res3.data.name)
                    axios.get(`${url}/api/garant/${item.garant}/`).then((res4) => {   
                        setGarant(res4.data.time)
                        axios.get(`${url}/api/branch/${item.branch}/`).then((res5) => {   
                            setBranch(res5.data.name)
                          });
                      });
                  });
              });
          });
  };
const handleInputChange = (event) => {
  const searchRegex = new RegExp(`^${event.target.value}`, 'i');
  axios.get(`${url}/api/car_history/`).then((res) => {
    axios.get(`${url}/api/position_get/`).then((res2) => {
      const database=[]
      for (let i = 0; i < res.data.length; i++) {  
        for (let b = 0; b < res2.data.length; b++) {
          if (res.data[i].position===res2.data[b].id) {
            res.data[i].positionName=res2.data[b].name
            res.data[i].seriesName=res2.data[b].series.name
            res.data[i].modelName=res2.data[b].series.model.name
            database.push(res.data[i]);
          }
          const searchdata = database.filter((item) => {
            return (
              searchRegex.test(item.name) ||
              searchRegex.test(item.positionName)||
              searchRegex.test(item.seriesName)||
              searchRegex.test(item.modelName)||
              searchRegex.test(item.price)||
              searchRegex.test(item.id)||
              searchRegex.test(item.price)
            );
          });
          setdata1(searchdata);
        }
      }
    })

  });
}
  function getData() {
    axios.get(`${url}/api/car_history/`).then((res) => {
      setdata1(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {page == 1 ? (
        <div>
                   <Input
            className="header-search"
            prefix={<SearchOutlined />}
            onChange={handleInputChange}
          />
          <Table className="table1" columns={columns} dataSource={data1} />
        </div>
      ) : (
        <div>
          <div className="nomi1">
            <h1 className="nomi">{data.name}</h1>
            <div
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button onClick={() => setPage(1)} type="danger">
                Orqaga
              </Button>
            </div>
          </div>
          <div className="alltext">
            <div className="alltext2">
              <div className="alltext1">
                <div className="text1">
                  <div className="text">
                    <h1>Pozitsiya</h1>
                    <input value={position}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Seriya</h1>
                    <input value={series}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Model</h1>
                    <input value={model}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i turi</h1>
                    <input value={fuelSort}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Boshqaruv qutisi</h1>
                    <input value={gearbox}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Garant</h1>
                    <input value={garant+"yill"}  className="slect" type="text" />
                  </div>
                </div>
                <div className="text2">
                  <div className="text">
                    <h1>Filial</h1>
                    <input value={branch}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Yili</h1>
                    <input value={year}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Masofa</h1>
                    <input value={distance+"km"}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>Dvigatel</h1>
                    <input value={engine}  className="slect" type="text" />
                  </div>
                  {/* <div className="text">
                    <h1>Rang</h1>
                    <input type="text" className="slect11" />
                  </div> */}
                  <div className="text">
                    <h1>Ko'rishlar</h1>
                    <input type="number" value={data.views} />
                  </div>
                  <div className="text">
                    <h1>Yaratilgan vaqt</h1>
                    <input
                      type="text"
                      className="slect19"
                      value={data.time_update.slice(0, 10)}
                    />
                  </div>
                </div>
                <div className="text3">
                  <div className="text">
                    <h1>Ism</h1>
                    <input value={data.name} type="text" className="slect" />
                  </div>
                  <div className="text">
                    <h1>olingan narx</h1>
                    <input value={data.initial_price} type="text" className="slect" />
                  </div>
                  <div className="text">
                    <h1> sotilgan Narx</h1>
                    <input value={data.price} type="text" className="slect" />
                  </div>
                  <div className="text">
                    <h1>Chegirma</h1>
                    <input value={data.sale} type="text" className="slect" />
                  </div>
                  <div className="text">
                    <h1>Depozit</h1>
                    <input value={data.depozit} type="text" className="slect" />
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i iste'moli</h1>
                    <input value={data.fuel_consumption} type="text" className="slect" />
                  </div>
                </div>
              </div>
              <div className="textsmall">
                <h1>Tavsifi</h1>
                <textarea
                value={data.description}
                  id="w3review"
                  rows="1"
                  className="slect18"
                  cols="101"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default CarHistory;