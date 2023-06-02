import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table, Button } from 'antd';
import url from '../components/host';
import axios from 'axios';
import "./style/additional.css"
import { AiOutlineClose } from "react-icons/ai";

export default function Additional() {
  const [fueldata, setfueldata] = useState()
  const [fueldata1, setfueldata1] = useState()
  const [fueldata2, setfueldata2] = useState()
  const [id, setId] = useState(0)
  const [key, setkey] = useState(0)


  // 1 - page

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      witdh: "5%",
      dataIndex: 'name',
    },

    {
      title: 'Edit',
      witdh: "5%",
      render: (fueldata) => {
        return <div>
          <Button onClick={() => postoyna11(fueldata)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={() => deletee(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(() => {
    axios.get(`${url}/api/fuel_sort/`).then(res => {
      setfueldata(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  function deletee(id) {
    axios.delete(`${url}/api/fuel_sort/${id}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("O'chirildi")
      window.location.reload()
    }).catch(err => {
      alert("ochirilmadi")
      console.log(err);
    })
  }

  function getPost1() {
    var formdata1 = new FormData()
    formdata1.append("name", document.querySelector(".fuelname11").value)

    axios.post(`${url}/api/fuel_sort/ `, formdata1, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".postoyna10").style = "position: fixed;top: -100%;    transition: 1s;"
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  function getPut1(id) {
    var formdata2 = new FormData()
    formdata2.append("name", document.querySelector(".fuelname10").value)

    axios.put(`${url}/api/fuel_sort/${id}/`, formdata2, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".postoyna11").style = "position: fixed;top: -100%;    transition: 1s;"
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  function postoyna11(id) {
    setId(id)
    document.querySelector(".postoyna11").style = "position: fixed;top: 10%;    transition: 1s;"
  }
  function postoynaclose11() {
    document.querySelector(".postoyna11").style = "position: fixed;top: -100%;    transition: 1s;"
  }

  function postoyna10() {
    document.querySelector(".postoyna10").style = "position: fixed;top: 10%;    transition: 1s;"
  }
  function postoynaclose10() {
    document.querySelector(".postoyna10").style = "position: fixed;top: -100%;    transition: 1s;"
  }


  // 2-page

  const columns1 = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },

    {
      title: 'Edit',
      render: (fueldata1) => {
        return <div>
          <Button onClick={() => putoyanfuel2(fueldata1)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={() => deletegear(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(() => {
    axios.get(`${url}/api/gear_box/`).then(res => {
      setfueldata1(res.data)
    }).catch(err => {
      console.log(err, "salom");
    })
  }, [])

  function putoyanfuel() {
    document.querySelector(".putoyanfuel").style = "position: fixed;top: 10%;    transition: 1s;"
  }

  function putoyanfuel1() {
    document.querySelector(".putoyanfuel").style = "position: fixed;top: -100%;    transition: 1s;"
  }
  function putoyanfuel2(id) {
    document.querySelector(".putoyanfuel1").style = "position: fixed;top: 10%;    transition: 1s;"
    setkey(id)
  }

  function putoyanfuel3() {
    document.querySelector(".putoyanfuel1").style = "position: fixed;top: -100%;    transition: 1s;"
  }

  function getPost2() {
    var formdata3 = new FormData()
    formdata3.append("name", document.querySelector(".gearinput").value)

    axios.post(`${url}/api/gear_box/`, formdata3, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".putoyanfuel").style = "position: fixed;top: -100%;    transition: 1s;"
      window.location.reload()
    }).catch(err => {
      alert("ishlamadi")
    })
  }
  function getPut2(id) {
    var formdata4 = new FormData()
    formdata4.append("name", document.querySelector(".gearinput1").value)

    axios.put(`${url}/api/gear_box/${id}/`, formdata4, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".putoyanfuel1").style = "position: fixed;top: -100%;    transition: 1s;"
      window.location.reload()
    }).catch(err => {
      alert("ishlamadi")
    })
  }


  function deletegear(id) {
    axios.delete(`${url}/api/gear_box/${id}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      window.location.reload()
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  // 3- page

  const columns2 = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Time',
      dataIndex: 'time',
    },

    {
      title: 'Edit',
      render: () => {
        return <div>
          <Button style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={()=>deletegarant(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(() => {
    axios.get(`${url}/api/garant/`).then(res => {
      setfueldata2(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  function postgarantoyna() {
    document.querySelector(".postgarantoyna").style = "position: fixed;bottom: 20%;    transition: 1s;"
  }

  function postgarantoyna1() {
    document.querySelector(".postgarantoyna").style = "position: fixed;bottoms: -100%;    transition: 1s;"
  }

  function getPost3(){
    var formdata5=new FormData()
    formdata5.append("name",document.querySelector(".gearinput2").value)
    formdata5.append("time",document.querySelector(".gearinput3").value)

    axios.post(`${url}/api/garant/`,formdata5,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      window.location.reload()
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function deletegarant(id){
  axios.delete(`${url}/api/garant/${id}/`,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
    alert("ishladi")
    window.location.reload()
  }).catch(err=>{
    alert(err=>{
      alert("ishlamadi")
    })
  })
  }

  return (
    <div>
      <div className="katta10">
        <div className="house">
          <button onClick={() => postoyna10()} className='post10'>Post</button>
          <h1>Yoqilg'i turini kiriting</h1>
          <Table className='table' columns={columns} dataSource={fueldata} />


          <div className="postoyna10">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => postoynaclose10()} />
              <div className="div10"> <p>Yoqilg'i turini kiriting</p>
                <input className='fuelname11' type="text" />
                <button onClick={() => getPost1()} className='post11'>Post</button></div>
            </div>
          </div>
          <div className="postoyna11">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => postoynaclose11()} />
              <div className="div10"> <p>Yoqilg'i turini o'zgartiring</p>
                <input className='fuelname10' placeholder={id.name} type="text" />
                <button onClick={() => getPut1(id.id)} className='post11'>Put</button></div>
            </div>
          </div>
        </div>


        {/* 2-page */}

        <div className="house1">
          <button onClick={() => putoyanfuel()} className='post11'>Post</button>
          <h1>Mashina turuni kiriting</h1>
          <Table className='table' columns={columns1} dataSource={fueldata1} />





          <div className="putoyanfuel">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => putoyanfuel1()} />
              <div className="div10"><p>Mashinani turin kiriting</p>
                <input className='gearinput' type="text" />
                <button onClick={() => getPost2()} className='putbutton'>Post</button></div>
            </div>
          </div>
          <div className="putoyanfuel1">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => putoyanfuel3()} />
              <div className="div10"><p>Mashinani turin kiriting</p>
                <input className='gearinput1' placeholder={key.name} type="text" />
                <button onClick={() => getPut2(key.id)} className='putbutton'>Edit</button></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-page */}

      <div className="katta11">
        <div className="house2">
          <button onClick={()=>postgarantoyna()} className='post11'>Post</button>
          <h1>Garantni kiriting</h1>
          <Table className='table' columns={columns2} dataSource={fueldata2} />
        </div>



        <div className="postgarantoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>postgarantoyna1()} className='close' />
            <div className="div10"><p>Garant kiriting</p>
              <input className='gearinput2' type="text" />
              <p>Soati</p>
              <input className='gearinput3' type="text" />
              </div>
              <div className="putbutton11div"><button onClick={()=>getPost3()} className='putbutton11'>Post</button></div>
          </div>
        </div>


      </div>

    </div>
  )
}
