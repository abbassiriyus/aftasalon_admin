import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {SearchOutlined,} from "@ant-design/icons";
import { Button, Table,Input } from "antd";
import "./style/style.css";
const Order = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState('');
  const [timeCreate, setTimeCreate] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [select, setselect] = useState('');
  const [user, setUser] = useState('');
  const [car, setCar] = useState('');
  const [branch, setBranch] = useState('');
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "foydalanuvchi",
      render: (_,item)=> <div>{item.user.username}</div>
    },
    {
      title: "avtomobil",
      render: (_,item)=> <div>{item.car.name_uz}</div>
    },
    {
        title: "Filial",
        render: (_,item)=> <div>{item.branch.name_uz}</div>
      },
      {
        title: "yaratilgan vaqt",
        render: (_,item)=> <div>{item.time_create.slice(0,10)}</div>
      },
      {
        title: "tashrif sanasi",
        render: (_,item)=> <div>{item.visit_time.slice(0,10)}</div>
      },
      {
        title: "tashrif vaqti",
        render: (_,item)=> <div>{item.visit_time.slice(11,19)}</div>
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
    {
        title: "Qabul",
        key: "edit",
        width: "5%",
        render: (__, item) => {
            if (item.is_active===false) {
                return (
                    <div>
                      <Button
                        onClick={() => {
                            putOrder(item);
                        }}
                        style={{ background: "green", color: "white" }}
                        type="text"
                      >
                        Qabul qilish
                      </Button>
                    </div>
                  ); 
            }else{
                return (
                    <div>
                      <Button disabled
                        onClick={() => {
                            putOrder(item);
                        }}
                        style={{ background: "cadetblue", color: "white" }}
                        type="text"
                      >
                        Qabul qilingan
                      </Button>
                    </div>
                  );    
            }
        },
      },
    {
      title: "O'chirish",
      key: "O'chirish",
      width: "5%",
      render: (__, item) => {
        return (
          <div>
            <Button               onClick={() => {
                deleteOrder(item);
              }} type="danger">
            O'chirish
            </Button>
          </div>
        );
      },
    },
  ];
  const getOneProduct = (item) => {
    console.log(item,"choose");
    setId(item.id)
    setCar(item.car.name_uz)
    setUser(item.user.username)
    setBranch(item.branch.name_uz)
    setTimeCreate(item.time_create.slice(0,10))
    setVisitTime(item.visit_time)
    setPage(2);
  };
function deleteOrder (order) {
    console.log(order);
    axios.delete(`${url}/api/order/${order.id}/`,
     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
      ).then((res2) => {
        axios.get(`${url}/api/order/`,     {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res) => {
            setdata1(res.data);
          });
      });
}
function putOrder (order) {
    var formdata = new FormData();
    formdata.append("time_create",order.time_create)
    formdata.append("visit_time",order.visit_time)
    formdata.append("is_active",true)
    formdata.append("user",order.user.id)
    formdata.append("car",order.car.id)
    formdata.append("branch",order.branch.id)
    axios.put(`${url}/api/order/${order.id}/`,formdata,
     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
      ).then((res2) => {
        axios.get(`${url}/api/order/`,     {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res) => {
            setdata1(res.data);
          });
      });
}
  function getData() {
    axios.get(`${url}/api/order/`,     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res) => {
      setdata1(res.data);
      console.log(res.data,"aaaaaaa");
    });
  }
  useEffect(() => {
    getData();
    axios.get(`${url}/api/branch/`,     ).then((res) => {
    setdata2(res.data);
  })
  }, []);

  const handleInputChange = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, 'i');
    if (select.length<1) {
      axios
      .get(`${url}/api/order/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        const searchdata = res.data.filter((item) => {
          return (
            searchRegex.test(item.car.name_uz) ||
            searchRegex.test(item.car.name_ru) ||
            searchRegex.test(item.branch.name_uz) ||
            searchRegex.test(item.branch.name_ru) ||
            searchRegex.test(item.id) ||
            searchRegex.test(item.user.username)
          );
        });
        setdata1(searchdata);
      })
    }else{
      axios
      .get(`${url}/api/order/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
          const filteredData = res.data.filter((item) => item.branch.id ===parseInt(select));
          const searchdata2 = filteredData.filter((item) => {
            return (
              searchRegex.test(item.car.name_uz) ||
              searchRegex.test(item.car.name_ru) ||
              searchRegex.test(item.branch.name_uz) ||
              searchRegex.test(item.branch.name_ru) ||
              searchRegex.test(item.id) ||
              searchRegex.test(item.user.username)
            );
          });
          setdata1(searchdata2);  
      }); 
    }
  };
  const handleInputChange2 = (event) => {
    setselect(event.target.value);
    const searchRegex = new RegExp(`^${event.target.value}`, 'i');
    axios
      .get(`${url}/api/order/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        const searchdata = res.data.filter((item) => {
          return searchRegex.test(item.branch.id);
        });
        setdata1(searchdata);
      });
      if (event.target.value==56565656) {
        axios.get(`${url}/api/order/`,     {
          headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        }).then((res) => {
        setdata1(res.data);
      })
      }
  };

  return (
    <div>
          <div className="search_div">
           
            <select onChange={handleInputChange2} className="select_search">
              <option value={56565656}>Filial</option>
              {data2.map((item)=>{
                return<option value={item.id}>{item.name_uz}</option>
              })}
            </select>
          <Input
          placeholder="qidirish"
            className="header-search_orders"
            prefix={<SearchOutlined />}
            onChange={handleInputChange}
          />
          </div>
      {page === 1 ? (
        <div>
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
                    <h1>ID</h1>
                    <input value={id}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>user</h1>
                    <input value={user}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>car</h1>
                    <input value={car}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>branch</h1>
                    <input value={branch}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>visit_time</h1>
                    <input value={visitTime}  className="slect" type="text" />
                  </div>
                  <div className="text">
                    <h1>time_create</h1>
                    <input value={timeCreate}  className="slect" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default Order;