import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { Button, Table } from "antd";
import "./style/style.css";
const CallTouser = () => {
  const [data1, setdata1] = useState([]);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    // {
    //   title: "foydalanuvchi",
    //   render: (_,item)=> <div>{item.fullname}</div>
    // },
    // {
    //   title: "Email",
    //   render: (_,item)=> <div>{item.email}</div>
    // },
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

        <div>
          <Table           pagination={{ pageSize: 10 }} className="table1" columns={columns} dataSource={data1} />
        </div>

        <div>

        </div>


    </div>
  );
};
export default CallTouser;