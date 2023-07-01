import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Avatar,
  Radio,
} from "antd";

import BgProfile from "../assets/images/bg-profile.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import axios from "axios";
import url from "../components/host";
import './style/Profil.css'
function Profile() {
  const [data3, setData3] = useState([]);
  const [users, setUsers] = useState([]);
 const [keydata, setKey] = useState([]);







  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];



  useEffect(() => {
    var local = JSON.parse(localStorage.getItem("data2"))
    axios.get(`${url}/auth/users/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if (local.phone == res.data[i].phone) {
          setData3(res.data[i])
        }
      }
    })

    axios.get(`${url}/auth/users/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      setUsers(res.data)
      console.log(res.data, 'dfyuiutyrttu7rytsryyuui');
    })
  }, [])




  function modalOpen(key) {
    document.querySelector('.putAdmin').style = 'right: 10px;'
    localStorage.setItem('idUser', key)
    setKey(key)
    alert(key.id)
  }

  function modalClose() {
    document.querySelector('.putAdmin').style = 'right: -100%;'
  }

  function postModal() {
    alert(keydata.id)
    var key = keydata.id
    var local = JSON.parse(localStorage.getItem("data2"))
    var data = new FormData();
    data.append('birthday', document.querySelector('.birthday').value)
    data.append('email', document.querySelector('.email').value)
    data.append('image', document.querySelector('.image').files[0])
    data.append('passport_number', document.querySelector('.passport_number').value)
    data.append('passport_series', document.querySelector('.passport_series').value)
    data.append('username', document.querySelector('.username').value)
    data.append('phone',  local.phone)
    data.append('is_staff',  keydata.is_staff)
    data.append('is_superuser',  keydata.is_superuser)
    axios.put(`${url}/auth/users/${key}/`, data, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      document.querySelector('.putAdmin').style = 'right: -100%;'
    }).catch(err => {
    })
  }



  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>
      <div className="putAdmin">
        <div>
          <h4>Edit Profile</h4>
          <span onClick={() => modalClose()}>X</span>
          <p>
            birthday
          </p>
          <input placeholder={keydata.birthday} className="birthday" type="date" />
          <p>
            email
          </p>
          <input placeholder={keydata.email} className="email" type="email" />
          <p>
            image
          </p>
          <input className="image" type="file" />
        </div>
        <div>
          <h4>&nbsp;</h4>
          <p>
            passport_number
          </p>
          <input placeholder={keydata.passport_number} className="passport_number" type="number" />
          <p>
            passport_series
          </p>
          <input placeholder={keydata.passport_series} className="passport_series" type="text" />
          <p>
            username
          </p>
          <input placeholder={keydata.username} className="username" type="text" />
          <button className="successBtn" onClick={() => postModal()}>Edit</button>
        </div>
      </div>



      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                {
                    [data3].map((item) => {
                      return (
                       <img className="profile_img" src={item.image}alt={item.image}/>
                      )
                    })
                  }

                <div className="avatar-info">
                  {
                    [data3].map((item) => {
                      return (
                        <h4 className="font-semibold m-0">{item.username}</h4>
                      )
                    })
                  }
                  <p>CEO / Co-Founder</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a" onClick={() => modalOpen(data3)}>
                  Edit Profile
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Users</h6>}
            className="header-solid h-full"
            id="card-userAnt"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              split={false}
              className="conversations-list" />
            {users.map((item) => {
              return (

                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size={48} src={item.avatar} />
                    }
                    title={item.username}
                    description={item.phone}
                  />
                </List.Item>
              )
            })}

          </Card>

        </Col>
      </Row>

    </>
  );
}

export default Profile;
