import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {SearchOutlined,} from "@ant-design/icons";
import { Button, Table,Input } from "antd";
import "./style/style.css";
const CallTouser = () => {
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
      render: (_,item)=> <div>{item.fullname}</div>
    },
    {
      title: "Email",
      render: (_,item)=> <div>{item.email}</div>
    },
    {
        title: "Telefon raqami",
        render: (_,item)=> <div>{item.phone_number}</div>
      },
      {
        title: "xabar",
        render: (_,item)=> <div>{item.message}</div>
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

function deleteOrder (order) {
    console.log(order);
    axios.delete(`${url}/api/calltouser/${order.id}/`,
     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
      ).then((res2) => {
        axios.get(`${url}/api/calltouser/`,     {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res) => {
            setdata1(res.data);
          });
      });
}
  function getData() {
    axios.get(`${url}/api/calltouser/`,     {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res) => {
      setdata1(res.data);
      console.log(res.data,"aaaaaaa");
    });
  }
  useEffect(() => {
    getData();
  }, []);



  return (
    <div>
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
export default CallTouser;