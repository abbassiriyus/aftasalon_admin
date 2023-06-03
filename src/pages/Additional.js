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
  const [fueldata3, setfueldata3] = useState([])
  const [fueldata4, setfueldata4] = useState([])
  const [fueldata5, setfueldata5] = useState()
  const [fueldata6, setfueldata6] = useState()
  const [id, setId] = useState(0)
  const [key, setkey] = useState(0)
  const [key1, setkey1] = useState(0)
  const [key2, setkey2] = useState(0)
  const [key3, setkey3] = useState(0)
  const [key4, setkey4] = useState(0)
  const [key5, setkey5] = useState(0)


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
      axios.get(`${url}/api/fuel_sort/`).then(res => {
        setfueldata(res.data)
      }).catch(err => {
        console.log(err);
      })
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
      document.querySelector(".postoyna10").style = "position: absolute;display:none;    transition: 1s;"
      axios.get(`${url}/api/fuel_sort/`).then(res => {
        setfueldata(res.data)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  function getPut1(id) {
    var formdata2 = new FormData()
    formdata2.append("name", document.querySelector(".fuelname10").value)

    axios.put(`${url}/api/fuel_sort/${id}/`, formdata2, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".postoyna11").style = "position: absolute;display:none;    transition: 1s;"
      axios.get(`${url}/api/fuel_sort/`).then(res => {
        setfueldata(res.data)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  function postoyna11(id) {
    setId(id)
    document.querySelector(".postoyna11").style = "position: absolute;display:block;    transition: 1s;"
  }
  function postoynaclose11() {
    document.querySelector(".postoyna11").style = "position: absolute;display:none;   transition: 1s;"
  }

  function postoyna10() {
    document.querySelector(".postoyna10").style = "position: absolute;display:block;    transition: 1s;"
  }
  function postoynaclose10() {
    document.querySelector(".postoyna10").style = "position: absolute;display:none;    transition: 1s;"
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
    document.querySelector(".putoyanfuel").style = "position: absolute;display:block;   transition: 1s;"
  }

  function putoyanfuel1() {
    document.querySelector(".putoyanfuel").style = "position: absolute;display:none;    transition: 1s;"
  }
  function putoyanfuel2(id) {
    document.querySelector(".putoyanfuel1").style = "position: absolute;display:block;  transition: 1s;"
    setkey(id)
  }

  function putoyanfuel3() {
    document.querySelector(".putoyanfuel1").style = "position: absolute;display:none;    transition: 1s;"
  }

  function getPost2() {
    var formdata3 = new FormData()
    formdata3.append("name", document.querySelector(".gearinput").value)

    axios.post(`${url}/api/gear_box/`, formdata3, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".putoyanfuel").style = "position: absolute;display:none;    transition: 1s;"
      axios.get(`${url}/api/gear_box/`).then(res => {
        setfueldata1(res.data)
      }).catch(err => {
        console.log(err, "salom");
      })
    }).catch(err => {
      alert("ishlamadi")
    })
  }
  function getPut2(id) {
    var formdata4 = new FormData()
    formdata4.append("name", document.querySelector(".gearinput1").value)

    axios.put(`${url}/api/gear_box/${id}/`, formdata4, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      document.querySelector(".putoyanfuel1").style = "position: fixed;display:none;   transition: 1s;"
      axios.get(`${url}/api/gear_box/`).then(res => {
        setfueldata1(res.data)
      }).catch(err => {
        console.log(err, "salom");
      })
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
      render: (fueldata2) => {
        return <div>
          <Button onClick={()=>putgarantoyna(fueldata2)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
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
    document.querySelector(".postgarantoyna").style = "position: absolute;display:block;   transition: 1s;"

  }

  function postgarantoyna1() {
    document.querySelector(".postgarantoyna").style = "position: absolute;display:none;    transition: 1s;"
  }

  function getPost3(){
    var formdata5=new FormData()
    formdata5.append("name",document.querySelector(".gearinput2").value)
    formdata5.append("time",document.querySelector(".gearinput3").value)

    axios.post(`${url}/api/garant/`,formdata5,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".postgarantoyna").style = "position: absolute;display:none;   transition: 1s;"
      axios.get(`${url}/api/garant/`).then(res => {
        setfueldata2(res.data)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }
  function getPut3(id){
    var formdata6=new FormData()
    formdata6.append("name",document.querySelector(".gearinput5").value)
    formdata6.append("time",document.querySelector(".gearinput4").value)

    axios.put(`${url}/api/garant/${id}/`,formdata6,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".putgarantoyna").style = "position: absolute;display:none;    transition: 1s;"
      axios.get(`${url}/api/garant/`).then(res => {
        setfueldata2(res.data)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function deletegarant(id){
  axios.delete(`${url}/api/garant/${id}/`,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
    alert("ishladi")
    axios.get(`${url}/api/garant/`).then(res => {
      setfueldata2(res.data)
    }).catch(err => {
      console.log(err);
    })
  }).catch(err=>{
    alert(err=>{
      alert("ishlamadi")
    })
  })
  }

  function putgarantoyna(id) {
    document.querySelector(".putgarantoyna").style = "position: absolute;display:block;  transition: 1s;"
    setkey1(id)
  }

  function putgarantoyna1() {
    document.querySelector(".putgarantoyna").style = "position: absolute;display:none;    transition: 1s;"
  }


  // 4 -page

  const columns3 = [
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
      render: (fueldata3) => {
        return <div>
          <Button onClick={()=>putmodeloyna(fueldata3)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={()=>getdeletemodel(key.id)}  type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(()=>{
    axios.get(`${url}/api/models/`).then(res=>{
      setfueldata3(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])


  function postmodeloyna() {
    document.querySelector(".postmodeloyna").style = "position: absolute;display:block;    transition: 1s;"

  }

  function postmodeloyna1() {
    document.querySelector(".postmodeloyna").style = "position: absolute;display:none;   transition: 1s;"
  }
  function putmodeloyna(id) {
    document.querySelector(".putmodeloyna").style = "position: absolute;display:block;  transition: 1s;"
    setkey2(id)
  }

  function putmodeloyna1() {
    document.querySelector(".putmodeloyna").style = "position: absolute; display:none;  transition: 1s;"
  }


  function getPostmodel(){
    var model = new FormData()
    model.append("name",document.querySelector(".modelinput").value)

    axios.post(`${url}/api/models/`,model, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".postmodeloyna").style = "position: absolute;display:none;   transition: 1s;"
      axios.get(`${url}/api/models/`).then(res=>{
        setfueldata3(res.data)
      }).catch(err=>{
      console.log(err,"ishlamadi");
      })
    }).catch(err1=>{
      alert("ishlamadi")
    })
  }

  function getPutmodel(id){
    var model = new FormData()
    model.append("name",document.querySelector(".modelinput1").value)

    axios.put(`${url}/api/models/${id}/`,model, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".putmodeloyna").style = "position: absolute;display:none;   transition: 1s;"
      axios.get(`${url}/api/models/`).then(res=>{
        setfueldata3(res.data)
      }).catch(err=>{
      console.log(err,"ishlamadi");
      })
    }).catch(err1=>{
      alert("ishlamadi")
    })
  }

  function getdeletemodel(id){
    axios.delete(`${url}/api/models/${id}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      axios.get(`${url}/api/models/`).then(res=>{
        setfueldata3(res.data)
      }).catch(err=>{
      console.log(err,"ishlamadi");
      })
    }).catch(err1=>{
      alert("ishlamadi")
    })
  }

  // 5 -pages

  const columns4 = [
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
      render: (fueldata4) => {
        return <div>
          <Button onClick={()=>putseriesoyna(fueldata4)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={()=>getDeleteseries(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(()=>{
    axios.get(`${url}/api/series/`).then(res=>{
      setfueldata4(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])

  function postseriesoyna() {
    document.querySelector(".postserisoyna").style = "position: absolute;display:block;"

  }

  function postseriesoyna1() {
    document.querySelector(".postserisoyna").style = "position: absolute;display:none;"
  }


  function putseriesoyna(id) {
    document.querySelector(".putserisoyna1").style = "position: absolute;display:block;"
    setkey3(id)

  }

  function putseriesoyna1() {
    document.querySelector(".putserisoyna1").style = "position: absolute;display:none;"
  }

  function getpostseries(){
    var series =new FormData()
    series.append("name",document.querySelector(".seriyapost").value)

    axios.post(`${url}/api/series/`,series, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".postserisoyna").style = "position: absolute;display:none;"
      axios.get(`${url}/api/series/`).then(res=>{
        setfueldata4(res.data)
      }).catch(err=>{
        console.log(err);
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }
  function getputseries(id){
    var series1 =new FormData()
    series1.append("name",document.querySelector(".seriyaput").value)

    axios.put(`${url}/api/series/${id}/`,series1, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      document.querySelector(".putserisoyna1").style = "position: absolute;display:none;"
      axios.get(`${url}/api/series/`).then(res=>{
        setfueldata4(res.data)
      }).catch(err=>{
        console.log(err);
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function getDeleteseries(id){
    axios.delete(`${url}/api/series/${id}/`,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res=>{
      alert("ishladi")
      axios.get(`${url}/api/series/`).then(res=>{
        setfueldata4(res.data)
      }).catch(err=>{
        console.log(err);
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  // 6-page

  const columns5 = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Series',
      render: (item)=>item.series?(item.series.name):("-"),
    },
    {
      title: 'Model',
      render: (item)=>item.series?(item.series.model.name):("-")
    },

    {
      title: 'Edit',
      render: (fueldata5) => {
        return <div>
          <Button onClick={()=>putpozitsiyaoyna(fueldata5)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={()=>getdeletepozition(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(()=>{
    axios.get(`${url}/api/position/`).then(res=>{
      setfueldata5(res.data)

    }).catch(err=>{
      console.log(err);
    })
  },[])


  function postpozitsiyaoyna() {
    document.querySelector(".postpozitsiyaoyna").style = "position: absolute;display:block;"

  }

  function postpozitsiyaoyna1() {
    document.querySelector(".postpozitsiyaoyna").style = "position: absolute;display:none;"
  }

  function putpozitsiyaoyna(id) {
    document.querySelector(".putpozitsiyaoyna").style = "position: absolute;display:block;"
    setkey4(id)
  }

  function putpozitsiyaoyna1() {
    document.querySelector(".putpozitsiyaoyna").style = "position: absolute;display:none;"
  }

  function postpozition(){
    var pozition= new FormData()
    pozition.append("name",document.querySelector(".postpozition").value)

    axios.post(`${url}/api/position/`,pozition,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
      alert("ishladi")
      document.querySelector(".postpozitsiyaoyna").style = "position: absolute;display:none;"
      axios.get(`${url}/api/position/`).then(res=>{
        setfueldata5(res.data)
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  function putpozition(id){
    var putpozition =new FormData()
    putpozition.append("name",document.querySelector(".putozition").value)
    putpozition.append("series.name",document.querySelector(".putozition1").value)
    putpozition.append("series.model.name",document.querySelector(".putozition1").value)
    axios.put(`${url}/api/position/${id}/`,putpozition,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
      alert("ishladi")
      document.querySelector(".putpozitsiyaoyna").style = "position: absolute;display:none;"
      axios.get(`${url}/api/position/`).then(res=>{
        setfueldata5(res.data)
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  function getdeletepozition(id){
    axios.delete(`${url}/api/position/${id}/`, { headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
      alert("ishladi")
      axios.get(`${url}/api/position/`).then(res=>{
        setfueldata5(res.data)
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  // 7 -page

  const columns6 = [
    {
      title: 'Id',
      dataIndex:'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Country',
      dataIndex:'country',
    },
    {
      title: 'Region',
      dataIndex:'region',
    },
    {
      title: 'City',
      dataIndex:'city',
    },
    {
      title: 'District',
      dataIndex:'district',
    },
    {
      title: 'Street',
      dataIndex:'street',
    },
    {
      title: 'Edit',
      render: (fueldata6) => {
        return <div>
          <Button onClick={()=>putfillialoyna(fueldata6)} style={{ background: 'orange', color: 'white' }} type="button">O'zgartirish</Button>
        </div>
      }
    },
    {
      title: 'Delet',
      witdh: "5%",
      render: (key) => {
        return <div>
          <Button onClick={()=>deletefilial(key.id)} type="danger">O'chirish</Button>
        </div>
      },
    }
  ];

  useEffect(()=>{
  axios.get(`${url}/api/branch/`).then(res=>{
    setfueldata6(res.data)
  }).catch(err=>{
    console.log(err);
  })
  },[])

  function postfillialoyna(){
    document.querySelector(".postfillialoyna").style="position:fixed;right:0;    transition: 1s;"
  }
  function postfillialoyna1(){
    document.querySelector(".postfillialoyna").style="position:fixed;right:-100%;    transition: 1s;"
  }

  function postfillial(){
    var Fillial=new FormData()
    Fillial.append("name",document.querySelector(".nom").value)
    Fillial.append("country",document.querySelector(".mamlakat").value)
    Fillial.append("region",document.querySelector(".mintaqa").value)
    Fillial.append("city",document.querySelector(".shahar").value)
    Fillial.append("district",document.querySelector(".tuman").value)
    Fillial.append("street",document.querySelector(".kocha").value)

    axios.post(`${url}/api/branch/`,Fillial,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
      alert('ishladi')
      document.querySelector(".postfillialoyna").style="position:fixed;right:-100%;    transition: 1s;"
      axios.get(`${url}/api/branch/`).then(res=>{
        setfueldata6(res.data)
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function putfillialoyna(id){
    document.querySelector(".putfillialoyna").style="position:fixed;right:0;    transition: 1s;"
    setkey5(id)
  }
  function putfillialoyna1(){
    document.querySelector(".putfillialoyna").style="position:fixed;right:-100%;    transition: 1s;"
  }

  function putfillial(id){
    var Fillial1=new FormData()
    Fillial1.append("name",document.querySelector(".nom1").value)
    Fillial1.append("country",document.querySelector(".mamlakat1").value)
    Fillial1.append("region",document.querySelector(".mintaqa1").value)
    Fillial1.append("city",document.querySelector(".shahar1").value)
    Fillial1.append("district",document.querySelector(".tuman1").value)
    Fillial1.append("street",document.querySelector(".kocha1").value)

    axios.put(`${url}/api/branch/${id}/`,Fillial1,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
      alert('ishladi')
      document.querySelector(".putfillialoyna").style="position:fixed;right:-100%;    transition: 1s;"
      axios.get(`${url}/api/branch/`).then(res=>{
        setfueldata6(res.data)
      })
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function deletefilial(id){
    axios.delete(`${url}/api/branch/${id}/`,{ headers: { 'Authorization' : 'Bearer ' +sessionStorage.getItem("token")}}).then(res=>{
      alert("ishladi")
      axios.get(`${url}/api/branch/`).then(res=>{
        setfueldata6(res.data)
      })
    }).catch(err=>{
      console.log(err);
    })
  }
  

  return (
    <div>
      <div className="katta10">
        <div className="house">
          <button onClick={() => postoyna10()} className='post10'>Qo'shish</button>
          <h1>Yoqilg'i turini kiriting</h1>
          <Table className='table'  pagination={{ pageSize: 4 }} columns={columns} dataSource={fueldata} />


          <div className="postoyna10">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => postoynaclose10()} />
              <div className="div10"> <p>Yoqilg'i turini kiriting</p>
                <input className='fuelname11' type="text" />
                <button onClick={() => getPost1()} className='post11'>Qo'shish</button></div>
            </div>
          </div>
          <div className="postoyna11">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => postoynaclose11()} />
              <div className="div10"> <p>Yoqilg'i turini o'zgartiring</p>
                <input className='fuelname10' placeholder={id.name} type="text" />
                <button onClick={() => getPut1(id.id)} className='post11'>O'zgartirish</button></div>
            </div>
          </div>
        </div>


        {/* 2-page */}

        <div className="house1">
          <button onClick={() => putoyanfuel()} className='post11'>Qo'shish</button>
          <h1>Mashina turuni kiriting</h1>
          <Table className='table'  pagination={{ pageSize: 4 }} columns={columns1} dataSource={fueldata1} />





          <div className="putoyanfuel">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => putoyanfuel1()} />
              <div className="div10"><p>Mashinani turin kiriting</p>
                <input className='gearinput' type="text" />
                <button onClick={() => getPost2()} className='putbutton'>Qo'shish</button></div>
            </div>
          </div>
          <div className="putoyanfuel1">
            <div className="created">
              <AiOutlineClose className='close' onClick={() => putoyanfuel3()} />
              <div className="div10"><p>Mashinani turin kiriting</p>
                <input className='gearinput1' placeholder={key.name} type="text" />
                <button onClick={() => getPut2(key.id)} className='putbutton'>O'zgartirish</button></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-page */}

      <div className="katta11">
        <div className="house2">
          <button onClick={()=>postgarantoyna()} className='post11'>Qo'shish</button>
          <h1>Garantni kiriting</h1>
          <Table className='table'  pagination={{ pageSize: 4 }} columns={columns2} dataSource={fueldata2} />
        



        <div className="postgarantoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>postgarantoyna1()} className='close' />
            <div className="div10"><p>Garant kiriting</p>
              <input className='gearinput2' type="text" />
              <p>Soati</p>
              <input className='gearinput3' type="number" />
              </div>
              <div className="putbutton11div"><button onClick={()=>getPost3()} className='putbutton11'>Qo'shish</button></div>
          </div>
        </div>
        <div className="putgarantoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>putgarantoyna1()} className='close' />
            <div className="div10"><p>Garant kiriting</p>
              <input className='gearinput5' placeholder={key1.name} type="text" />
              <p>Soati</p>
              <input className='gearinput4' placeholder={key1.time} type="number" />
              </div>
              <div className="putbutton11div"><button className='putbutton11' onClick={()=>getPut3(key1.id)}  >O'zgartirish</button></div>
          </div>
        </div></div>

        {/* 4-page */}

        <div className="house3">
          <button className='post11' onClick={()=>postmodeloyna()} >Qo'shish</button>
          <h1>Modelni qo'shing</h1>
          <Table className='table' pagination={{ pageSize: 4 }} columns={columns3} dataSource={fueldata3} />
        

        <div className="postmodeloyna">
          <div className="created">
          <AiOutlineClose onClick={()=>postmodeloyna1()} className='close' />
          <div className="div10">
            <p>Modelni kiriting</p>
            <input type="text" className='modelinput' />
            <div className="putbutton11div">
              <button onClick={()=>getPostmodel()} className='putbutton11'>Qo'shish</button>
            </div>
          </div>
          </div>
        </div>
        <div className="putmodeloyna">
          <div className="created">
          <AiOutlineClose onClick={()=>putmodeloyna1()} className='close' />
          <div className="div10">
            <p>Modelni kiriting</p>
            <input type="text" placeholder={key2.name} className='modelinput1' />
            <div className="putbutton11div">
              <button onClick={()=>getPutmodel(key2.id)} className='putbutton11'>O'zgartirish</button>
            </div>
          </div> 
          </div>
        </div>
</div>

      </div>

      {/* 5-page */}
       <div className="katta12">
        <div className="house4">
        <button className='post11' onClick={()=>postseriesoyna()} >Qo'shish</button>
          <h1>Seriyani kiriting</h1>
          <Table className='table' pagination={{ pageSize: 4 }} columns={columns4} dataSource={fueldata4} />
       
          <div className="postserisoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>postseriesoyna1()} className='close' />
            <div className="div10"><p>Seriyani kiriting</p>
              <input className='seriyapost' type="text" />
              </div>
              <div className="putbutton11div"><button className='putbutton11' onClick={()=>getpostseries()} >Qo'shish</button></div>
          </div>
        </div>
        <div className="putserisoyna1">
          <div className="created">
            <AiOutlineClose onClick={()=>putseriesoyna1()} className='close' />
            <div className="div10"><p>Seriyani kiriting</p>
              <input className='seriyaput' placeholder={key3.name} type="text" />
              </div>
              <div className="putbutton11div"><button onClick={()=>getputseries(key3.id)} className='putbutton11'   >O'zgartirish</button></div>
          </div>
        </div>

        </div>

        {/* 6-page */}

        <div className="house5">  
        <button className='post11' onClick={()=>postpozitsiyaoyna()} >Qo'shish</button>
          <h1>Pozitsiyani kiriting</h1>
          <Table className='table' style={{width:'800px',}} pagination={{ pageSize: 4 }} columns={columns5} dataSource={fueldata5} />
       
          <div className="postpozitsiyaoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>postpozitsiyaoyna1()}  className='close' />
            <div className="div10"><p>Pozitsiyani kiriting</p>
              <input className='postpozition' type="text" />
              </div>
              <div className="putbutton11div"><button onClick={()=>postpozition()} className='putbutton11'  >Qo'shish</button></div>
          </div>
        </div>
        <div className="putpozitsiyaoyna">
          <div className="created">
            <AiOutlineClose onClick={()=>putpozitsiyaoyna1()} className='close' />
            <div className="div10"><p>Pozitsiyani almashtiring</p>
              <input className='putozition' placeholder={key4.name} type="text" />
              <p>Seriyani almashtiring</p>
               <select>
                  {fueldata4.map(item=>{
                 return   <option className='putozition1'>{item.name}</option>
                  })}  
               </select>
               <p>Modelni almashtiring</p>
              <select>
                <p>Modelni o'gartiring</p>
                {fueldata3.map(item=>{
                  return <option className='putozition2' >{item.name}</option>
                })}
              </select>
              </div>
              <div className="putbutton11div"><button onClick={()=>putpozition(key4.id)} className='putbutton11' >O'zgartirish</button></div>
          </div>
        </div>

        </div>


       </div>

       {/* 6-page */}

       <div className="house6">
        <button className='post11' onClick={()=>postfillialoyna()} >Qo'shish</button>
          <h1>Fillial</h1>
          <Table className='table' style={{ width:'100%' }} pagination={{ pageSize: 5 }} columns={columns6} dataSource={fueldata6} />
       


        </div>
        <div className="postfillialoyna">
            <AiOutlineClose onClick={()=>postfillialoyna1()} className='close1' />

            <div className="div20">
              <div className='label'>
                <label>
                  <p>Nomi</p>
                  <input className='nom' type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Mamlakat</p>
                  <input className='mamlakat' type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Mintaqa</p>
                  <input className='mintaqa' type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Shahar</p>
                  <input className='shahar' type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Tuman</p>
                  <input className='tuman' type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Ko'cha</p>
                  <input className='kocha' type="text" />
                </label>
              </div>
            </div>
            <button style={{ marginLeft:'81.5%',marginTop:'2%' }} className='putbutton' onClick={()=>postfillial()} >Qo'shish</button>
        </div>
        <div className="putfillialoyna">
            <AiOutlineClose onClick={()=>putfillialoyna1()} className='close1' />

            <div className="div20">
              <div className='label'>
                <label>
                  <p>Nomi</p>
                  <input className='nom1' placeholder={key5.name} type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Mamlakat</p>
                  <input className='mamlakat1' placeholder={key5.country} type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Mintaqa</p>
                  <input className='mintaqa1' placeholder={key5.region} type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Shahar</p>
                  <input className='shahar1'placeholder={key5.city} type="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Tuman</p>
                  <input className='tuman1' placeholder={key5.district}ype="text" />
                </label>
              </div>
              <div className='label'>
                <label>
                  <p>Ko'cha</p>
                  <input className='kocha1'placeholder={key5.street} type="text" />
                </label>
              </div>
            </div>
            <button style={{ marginLeft:'81.5%',marginTop:'2%' }} className='putbutton' onClick={()=>putfillial(key5.id)} >O'zgartirish</button>
        </div>
    </div>
  )
}
