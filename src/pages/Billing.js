
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
  const [ description, setDescription] = useState({})

  //  { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }
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


  // function putData() {
  //   var data2 = new FormData()
  //   data2.append('username', docu)
  // }


  const columns = [
    {

      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'username',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Delete',
      render: (data) => (
        <Button onClick={() => deleteData(data.id)} type="danger" className='delte'>Delete</Button>
      ),
    },
    {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => comment(data2.id)}>Izoh qoldirish</Button>
      ),
    }, {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => commentPrewiev(data2.id)}>Izoh lar</Button>
      ),
    },
  ];



  const columns2 = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'username',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Delete',
      render: (data2) => (
        <Button onClick={() => deleteData(data2.id)} type="danger" className='delte'>Delete</Button>
      ),
    },
    {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => comment(data2.id)} >Izoh qoldirish</Button>
      ),
    }, {
      title: 'Izoh qoldirish',
      render: (data2) => (
        <Button type="arrow" className='Izoh' onClick={() => commentPrewiev(data2.id)} >Izohlar</Button>
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
      res.data.map(item => {
        if (item.user == key) {
          setDescription(item)
        }
      })
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



  // <Button onClick={() => postoyna11(fueldata)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>


  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Admins',
      children:
        <Table columns={columns} pagination={{ pageSize: 10 }} dataSource={data} />
      ,
    },
    {
      key: '2',
      label: 'Users',
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
    datte.append('description', document.querySelector('.description').value)
    datte.append('branch', document.querySelector('.branch').value)
    axios.post(`${url}/api/comment/`, datte, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      window.location.reload()
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
        <p>{description.description}</p>
        {/* {
          description.map(item => {
            return (
              <div>
                <p>{item.description}</p>
              </div>
            )
          })
        } */}
      </div>
      <div className='ModalComment'>
        <span onClick={() => commentClose()}>X</span>
        <center><h4>Izoh qoldirish</h4></center>
        <select className='branch'>
          {
            data3.map(item => {
              return <option value={item.id}>{item.name}</option>
            })
          }
        </select>
        <textarea className='description'></textarea><br />
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
      <button className='Btn1' style={{ transition: '.4s' }} onClick={() => ModalPost()} >Admin Qo'shish</button>
      {/* {
        data.map(item => {
          if (item.is_staff) {
            return <h1>truee</h1>
          } else {
            return <h1>falsee</h1>
          }
        })
      } */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  )
}