import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style/style.css";
const CarHistory = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState('');
  const [timeCreate, setTimeCreate] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [isActive, setIsactive] = useState('');
  const [user, setUser] = useState('');
  const [car, setCar] = useState('');
  const [branch, setBranch] = useState('');
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "user",
      render: (_,item)=> <div>{item.user.username}</div>
    },
    {
      title: "car",
      render: (_,item)=> <div>{item.car.name}</div>
    },
    {
        title: "branch",
        render: (_,item)=> <div>{item.branch.name}</div>
      },
      {
        title: "time_create",
        render: (_,item)=> <div>{item.time_create.slice(0,10)}</div>
      },
      {
        title: "visit_time",
        dataIndex: "visit_time",
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
    setCar(item.car.name)
    setUser(item.user.username)
    setBranch(item.branch.name)
    setTimeCreate(item.time_create.slice(0,10))
    setVisitTime(item.visit_time)
    setPage(2);
  };
function deleteOrder (order) {
    console.log(order);
    axios.delete(`${url}/api/order_get/${order.id}/`,
     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
      ).then((res2) => {
        axios.get(`${url}/api/order_get/`,     {
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
        axios.get(`${url}/api/order_get/`,     {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res) => {
            setdata1(res.data);
          });
      });
}
  function getData() {
    axios.get(`${url}/api/order_get/`,     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res) => {
      setdata1(res.data);
      console.log(res.data,'DATA');
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <div className="fff">dddfddf</div>
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
export default CarHistory;