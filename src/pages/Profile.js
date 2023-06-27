import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
import axios from "axios";
import url from "../components/host";
import './style/Profil.css'
function Profile() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const [data3, setData3] = useState([]);
  const [users, setUsers] = useState([]);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

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

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  useEffect(() => {
    var local = JSON.parse(localStorage.getItem("data2"))
    // console.log(local.phone, 'phneeeeeeee');
    axios.get(`${url}/auth/users/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i], 'asdasd');
        if (local.phone == res.data[i].phone) {
          setData3(res.data[i])
          // console.log(res.data[i], 'dataaaaaaaa');
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
  }

  function modalClose() {
    document.querySelector('.putAdmin').style = 'right: -100%;'
  }

  function postModal() {
    // document.querySelector('.putAdmin').style = 'right: -100%;'
    var key = localStorage.getItem('idUser')
    var local = JSON.parse(localStorage.getItem("data2"))
    var data = new FormData();
    data.append('birthday', document.querySelector('.birthday').value)
    data.append('email', document.querySelector('.email').value)
    data.append('image', document.querySelector('.image').files[0])
    data.append('passport_number', document.querySelector('.passport_number').value)
    data.append('passport_series', document.querySelector('.passport_series').value)
    data.append('username', document.querySelector('.username').value)
    data.append('phone',  local.phone)
    data.append('password',  local.password)
    axios.put(`${url}/auth/users/${key}/`, data, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      window.location.reload()
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
          <input className="birthday" type="date" />
          <p>
            email
          </p>
          <input className="email" type="email" />
          <p>
            image
          </p>
          <input className="image" type="file" />
        </div>
        <div>
          <h4>&nbsp;</h4>
          {/* <span>&nbsp;</span>   */}
          <p>
            passport_number
          </p>
          <input className="passport_number" type="number" />
          <p>
            passport_series
          </p>
          <input className="passport_series" type="number" />
          <p>
            username
          </p>
          <input className="username" type="text" />
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
                {/* <Avatar size={74} shape="square" src={profilavatar} /> */}
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
                <Radio.Button value="a" onClick={() => modalOpen(data3.id)}>
                  {/* <BiSolidEditAlt /> */}
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
