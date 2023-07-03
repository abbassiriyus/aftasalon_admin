
import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import url from '../components/host';
import './style/Billing.css'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Tabs } from 'antd';

export default function Billing() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [superadmin, setSuperadmin] = useState(false);
  const [ description, setDescription] = useState([])

  useEffect(() => {
    axios.get(`${url}/auth/users/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      var tt = []
      console.log(res.data);
      var dd = []
      res.data.map(item => {
        if (item.is_staff == true) {
          tt.push(item)
        } else {
          dd.push(item)
        }
      })
      setData(tt)
      setData2(dd)
      console.log(tt);





      axios.get(`${url}/api/branch/`).then(res => {
        setData3(res.data)
        // console.log(res.data, 'branch');
      })
    })
  }, [])
  useEffect(() => {
    if (sessionStorage.getItem("superadmin") === "true") {
      setSuperadmin(true);
    } else {
      setSuperadmin(false);
    }
  }, []);
  const columns = [
    {

      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Ism',
      dataIndex: 'username',
    },
    {
      title: 'Telefon raqami',
      dataIndex: 'phone',
    },

    {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => comment(data2.id)}>Izoh qoldirish</Button>
      ),
    },
     {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => commentPrewiev(data2.id)}>Izohlar</Button>
      ),
    },
    {
      title: 'ochirish',
      render: (data) => (
        <Button onClick={() => deleteData(data.id)} type="danger" className='delte'>O'chirish</Button>
      ),
    },
  ];



  const columns2 = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Ism',
      dataIndex: 'username',
    },
    {
      title: 'Telefon raqami',
      dataIndex: 'phone',
    },

    {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => comment(data2.id)} >Izoh qoldirish</Button>
      ),
    },
     {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => commentPrewiev(data2.id)} >Izohlar</Button>
      ),
    },
    {
      title: 'ochirish',
      render: (data2) => (
        <Button onClick={() => deleteData(data2.id)} type="danger" className='delte'>O'chirish</Button>
      ),
    },
  ];

  function commentPrewiev(key) {
    // console.log(key);
    // axios.get(`${url}/auth/users/${key}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
    //   axios.get(`${url}/api/comment/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res2 => {
    //     for (let i = 0; i < res.data.length; i++) {
    //       for (let j = 0; j < res2.data.length; j++) {
    //         if (res.data[i].id == res2.data[j].user) {
    //           res.data[i].description = res2.data[j].description
    //           console.log(res2.data,"ishladi");
    //         }
    //       }
    //     }
    //     setData5(res2.data)
    //     console.log(res.data,"salom");
    //     console.log(res2.data,"salom1");
    //   })
    // })
    axios.get(`${url}/api/comment/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
    var  data24=[]
      res.data.map(item => {
        if (item.user === key) {
          data24.push(item)
          console.log(item);
        }
      })
      setDescription(data24)
    })
    console.log(key);
    document.querySelector('.PrewComents').style = 'top: 250px'

  }


  function commentPrewievClose() {
    document.querySelector('.PrewComents').style = 'top: -100%'
  }

  function ModalPost() {
    document.querySelector('.ModalPost').style = 'top: 200px'
  }


  function ModalPostClose() {
    document.querySelector('.ModalPost').style = 'top: -100%'
  }

  function PostUser() {
    var dataPost = new FormData()
    dataPost.append('username', document.querySelector('.username').value)
    dataPost.append('phone', document.querySelector('.phone').value)
    dataPost.append('password', document.querySelector('.password').value)
    dataPost.append('is_staff', true)
    axios.post(`${url}/auth/register/`, dataPost, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      window.location.reload()
    }).catch(err => {
    })
  }
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Adminlar',
      children:
        <Table columns={columns} pagination={{ pageSize: 10 }} dataSource={data} />
      ,
    },
    {
      key: '2',
      label: 'Foydalanuvchilar',
      children:
        <Table columns={columns2} pagination={{ pageSize: 10 }} dataSource={data2} />
      ,
    }
  ];

  function deleteData(key) {
    axios.delete(`${url}/auth/users/${key}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      window.location.reload()
    }).catch(err => {
    })
  }
  function comment(key) {
    console.log(key);
    localStorage.setItem('username', key)
    document.querySelector('.ModalComment').style = 'top: 300px'
  }

  function commentPost() {
    var datte = new FormData()
    // datte.append('userid', 3)
    // datte.append('description', 'description')
    // datte.append('branch', 'branch')
    datte.append('user', localStorage.getItem('username'))
    datte.append('description_uz', document.querySelector('.description_uz').value)
    datte.append('branch', document.querySelector(".branch").value)
    axios.post(`${url}/api/comment/`, datte, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      document.querySelector('.ModalComment').style = 'top: -100%'
    }).catch(err => {
    })
  }

  function commentClose() {
    document.querySelector('.ModalComment').style = 'top: -100%'
  }

  return (
    <div>
      <div className='PrewComents'>
        <span onClick={() => commentPrewievClose()}>X</span>
        {description.map((item)=>{
          return<div>
        <p>{item.description_uz}</p>

          </div>
        })}
      </div>
      <div className='ModalComment'>
        <span onClick={() => commentClose()}>X</span>
        <center><h4>Izoh qoldirish</h4></center>
        <select className='branch'>
          {
            data3.map(item => {
              return <option value={item.id}>{item.name_uz}({item.name_ru})</option>
            })
          }
        </select>
        <textarea className='description_uz'></textarea><br />
        <button onClick={() => commentPost()}>Izoh qoldirish</button>
      </div>
      <div className='ModalPost'>
        <AiOutlineClose className='iconClose' onClick={() => ModalPostClose()} />
        <h3>Ism</h3>
        <input type='text' className='username' />
        <h3>Nomer</h3>
        <input type='number' className='phone' />
        <h3>Parol</h3>
        <input type='password' className='password' />
        <button className='Btn2' onClick={() => PostUser()}>Admin Qo'shish</button>
      </div>
    {superadmin&&(<button className='Btn1' style={{ transition: '.4s' }} onClick={() => ModalPost()} >Admin Qo'shish</button>)}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  )
}