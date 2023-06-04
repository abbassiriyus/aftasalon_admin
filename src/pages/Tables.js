import { Button, Table} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import url from '../components/host';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style/style.css"



const Tables = () => {
  const [setSelectedRowKeys] = useState([]);
  const [setLoading] = useState(false);
  const [data, setdata] = useState([])
  const [data1, setdata1] = useState([])
  const [data2, setdata2] = useState([])
  const [data3, setdata3] = useState([])
  const [data4, setdata4] = useState([])
  const [data5, setdata5] = useState([])
  const [data6, setdata6] = useState([])
  const [data7, setdata7] = useState([])
  const [data8, setdata8] = useState([])
  const [page, setPage] = useState(1)
  const [ keys, setKeys ] = useState([])



  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      render: (el) => <div className='status'  >{el ? (<h1 style={{ color: "green" }}><AiOutlineCheck /></h1>) : (<h1 style={{ color: "red" }} ><AiOutlineClose className='AiOutlineClose' /></h1>)}</div>


    },
    {
      title: "Ma'lumot",
      key: "edit",
      width: "5%",
      render: (__, item) => {
        return <div><Button onClick={() => { getOneProduct(item) }} style={{ background: 'orange', color: 'white' }} type="text">Ma'lumot</Button></div>
      }
    },
    {
      title: "Edit",
      key: "edit",
      width: "5%",
      render: (key) => {
        return <div><Button onClick={()=>postoyna1(key.id)} style={{ background: 'orange', color: 'white' }} type="danger">O'zgartirish</Button></div>
      }
    },
    {
      title: "Delete",
      key: "delete",
      width: "5%",
      render: (key) => {
        return <div>
          <Button onClick={() => daleteAxiox(key.id)} type="danger">O'chirish</Button>
        </div>

      }
    },
  ];
  const getOneProduct = (item) => {
    setdata(item)
    setPage(2)
    console.log(item);
    

  }

  function getData() {
    axios.get(`${url}/api/cars_get/`).then(res => {
      setdata1(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(()=>{
    axios.get(`${url}/api/series_get/`).then(res=>{
      setdata7(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])


  useEffect(()=>{
    axios.get(`${url}/api/models/`).then(res=>{
      setdata8(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])


  function getFuel() {
    axios.get(`${url}/api/fuel_sort/`).then(res => {
      setdata2(res.data)
    })
  }
  useEffect(() => {
    getFuel()
  }, [])

  function getGear() {
    axios.get(`${url}/api/gear_box/`).then(res => {
      setdata3(res.data)
    })
  }
  useEffect(() => {
    getGear()
  }, [])

  function getGar() {
    axios.get(`${url}/api/garant/`).then(res => {
      setdata4(res.data)
    })
  }
  useEffect(() => {
    getGar()
  }, [])

  function getPosit() {
    axios.get(`${url}/api/position_get/`).then(res => {
      setdata6(res.data)
    })
  }
  useEffect(() => {
    getPosit()
  }, [])

  function getBranch() {
    axios.get(`${url}/api/branch/`).then(res => {
      setdata5(res.data)
    })
  }
  useEffect(() => {
    getBranch()
  }, [])



  function daleteAxiox(id) {
    console.log(id,"slaom");
    axios.delete(`${url}/api/cars/${id}/`, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladi")
      axios.get(`${url}/api/cars/`).then(res => {
        setdata1(res.data)
      })
    }).catch(err => {
      alert("ishlamadi")
    })
  }

  function postoyna() {
    document.querySelector(".postoyna").style = "position:fixed;right:0px;  transition: 1s;"

  }
  function postoynaa() {
    document.querySelector(".postoyna").style = "position:fixed;right:-100%;  transition: 1s;"
  }
  function postoyna1(key) {
    document.querySelector(".postoyna1").style = "position:fixed;right:0;  transition: 1s;"
    setKeys(key)
  }
  function postoynaa1() {
    document.querySelector(".postoyna1").style = "position:fixed;right:-100%;  transition: 1s;"
  }

  function getPost() {
    var formdata = new FormData()
    formdata.append("position",document.querySelector("#poz").value)
    formdata.append("fuel_sort",document.querySelector("#yoq").value)
    formdata.append("gearbox",document.querySelector("#vit").value)
    formdata.append("garant",document.querySelector("#gar").value)
    formdata.append("branch",document.querySelector("#fil").value)
    formdata.append("year",document.querySelector(".yil").value)
    formdata.append("distance",document.querySelector(".mas").value)
    formdata.append("engine",document.querySelector(".dvi").value)
    formdata.append("colour",document.querySelector(".rang").value)
    formdata.append("views",document.querySelector(".kor").value)
    formdata.append("description",document.querySelector(".tavsifi").value)
    formdata.append("time_create",document.querySelector(".vaqt").value)
    formdata.append("time_update",document.querySelector(".vaqt1").value)
    formdata.append("is_active",document.querySelector(".faol").checked)
    formdata.append("name",document.querySelector(".ism").value)
    formdata.append("initial_price",document.querySelector(".bosh").value)
    formdata.append("price",document.querySelector(".narx").value)
    formdata.append("sale",document.querySelector(".sot").value)
    formdata.append("depozit",document.querySelector(".dep").value)
    formdata.append("fuel_consumption",document.querySelector(".yoq1").value)



    axios.post(`${url}/api/cars/`, formdata, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladimoqda")
      document.querySelector(".postoyna").style = "position:fixed;right:-100%;  transition: 1s;"
      axios.get(`${url}/api/cars_get/`).then(res => {
        setdata1(res.data)
      })
    }).catch(err => {
      alert("ishlamadi")
      console.log(err);
    })
  }


  function getPut(key) {
    var putData = new FormData()
    putData.append("position",document.querySelector("#poz1").value)
    putData.append("fuel_sort",document.querySelector("#yoq1").value)
    putData.append("gearbox",document.querySelector("#vit1").value)
    putData.append("garant",document.querySelector("#gar1").value)
    putData.append("branch",document.querySelector("#fil1").value)
    putData.append("year",document.querySelector(".yil1").value)
    putData.append("distance",document.querySelector(".mas1").value)
    putData.append("engine",document.querySelector(".dvi1").value)
    putData.append("colour",document.querySelector(".rang1").value)
    putData.append("views",document.querySelector(".kor1").value)
    putData.append("description",document.querySelector(".tavsifi1").value)
    putData.append("time_create",document.querySelector(".vaqt2").value)
    putData.append("time_update",document.querySelector(".vaqt11").value)
    putData.append("name",document.querySelector(".ism1").value)
    putData.append("initial_price",document.querySelector(".bosh1").value)
    putData.append("price",document.querySelector(".narx1").value)
    putData.append("sale",document.querySelector(".sot1").value)
    putData.append("depozit",document.querySelector(".dep1").value)
    putData.append("fuel_consumption",document.querySelector(".yoq11").value)
    putData.append("is_active",document.querySelector(".faol1").checked)

    axios.put(`${url}/api/cars/${key}/`, putData, { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
      alert("ishladimoqda")
      document.querySelector(".postoyna1").style = "position:fixed;right:-100%;  transition: 1s;"
      axios.get(`${url}/api/cars_get/`).then(res => {
        setdata1(res.data)
      })
    }).catch(err => {
      alert("ishlamadi")
      console.log(err);
    })
  }

  // const start = () => {
  //   setLoading(true);
  //   // ajax request after empty completing
  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 100);
  // };






  return (
    <div>
      {page == 1 ? (<div><Button onClick={() => postoyna()} className='qoshish' type="primary">Qo'shish</Button><Table className='table1' columns={columns} dataSource={data1} /></div>) : (
        <div>
          <div className="nomi1">
            <h1 className='nomi'>{data.name}</h1>
            <Button onClick={() => (setPage(1))} type="danger">Orqaga</Button>
          </div>
          <div className="alltext">
            <div className="alltext2">
              <div className="alltext1">
                <div className="text1">
                  <div className="text">
                    <h1>Pozitsiya</h1>
                    <select className='slect'>
                      {data6.map(item=>(
                        <option id='inp1'>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Seriya</h1>
                    <select className='slect'>
                    {data7.map(item=>(
                      <option>{item.name}</option>
                    ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Model</h1>
                    <select className='slect'>
                      {data8.map(item=>(
                        <option>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i turi</h1>
                    <select className='slect'>
                    {data2.map(item=>(
                    <option>{item.name}</option>
                    ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Vites qutisi</h1>
                    <select className='slect'>
                      {data3.map(item=>(
                        <option>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Garant</h1>
                    <select className='slect'>
                      {data4.map(item=>(
                        <option>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Vaqtni yangilangan</h1>
                    <input type="text" value={data.time_update} />
                  </div>
                </div>
                <div className="text2">
                  <div className="text">
                    <h1>Filial</h1>
                    <select className='slect'>
                    {data5.map(item=>(
                      <option>{item.name}</option>
                    ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Yili</h1>
                    <input type="number"  />
                  </div>
                  <div className="text">
                    <h1>Masofa</h1>
                    <input type="number"  />
                  </div>
                  <div className="text">
                    <h1>Dvigatel</h1>
                    <input type="number"  />
                  </div>
                  <div className="text">
                    <h1>Rang</h1>
                    <input type="text" value={data.colour} />
                  </div>
                  <div className="text">
                    <h1>Ko'rishlar</h1>
                    <input type="number" value={data.views} />
                  </div>
                  <div className="text">
                    <h1>Vaqt_yaratilgan</h1>
                    <input type="text"  value={data.time_create} />
                  </div>
                </div>
                <div className="text3">
                  <div className="text">
                    <h1>Ism</h1>
                    <input type="text" value={data.name} />
                  </div>
                  <div className="text">
                    <h1>Boshlang'ich_narx</h1>
                    <input type="number" value={data.initial_price} />
                  </div>
                  <div className="text">
                    <h1>Narx</h1>
                    <input type="number" value={data.price} />
                  </div>
                  <div className="text">
                    <h1>Chegirma</h1>
                    <input type="number" value={data.sale} />
                  </div>
                  <div className="text">
                    <h1>Depozit</h1>
                    <input type="number" value={data.depozit} />
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i iste'moli</h1>
                    <input type="number" value={data.fuel_consumption} />
                  </div>
                  {/* <div className="textcheck">
                <h1>Faol</h1>
                <input type="checkbox" value={data.is_active}/>
              </div> */}
                </div>
              </div>
              <div className="textsmall">
                <h1>Tavsifi</h1>
                <textarea id="w3review" rows="19" value={data.description} cols="101"></textarea>
              </div>
            </div>
          </div>
          {/* <div className="img">
            {data.image.map(item => {
              return <div >
                <div className='text' ><img src={item.image} alt="" /></div>
              </div>
            })}
          </div> */}
        </div>
      )
      }


      <div className="postoyna">
        <AiOutlineClose onClick={() => postoynaa()} className='close' />
        <div className="alltext">
          <div className="alltext2">
            <div className="alltext1">
              <div className="text1">
                <div className="text5">
                  <h1>Pozitsiya</h1>
                  <select className='select' id="poz">
                    {data6.map(item=>{
                      return(
                    <option value={item.id}>{item.name}</option>
                    )})}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yoqilg'i turi</h1>
                    <select className='select' id='yoq'>
                      {
                        data2.map(item => {
                          return(
                            <option value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                </div>
                <div className="text5">
                  <h1>Vites qutisi</h1>
                  <select className='select' id='vit'>
                    {data3.map(item=>{
                      return(
                        <option value={item.id}>{item.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Garant</h1>
                  <select id='gar'  className='select'>
                  {data4.map(item=>{
                    return(
                      <option value={item.id} >{item.name}</option>
                    )
                  })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Vaqt_yaratilgan</h1>
                  <input className='vaqt' type="text" />
                </div>
                <div className="text5">
                  <h1>Vaqtni yangilangan</h1>
                  <input className='vaqt1' type="text" />
                </div>
              </div>
              <div className="text2">
                <div className="text5">
                  <h1>Filial</h1>
                  <select id='fil' className='select'>
                    {data5.map(item=>{
                      return(<option value={item.id}>
                        {item.name}
                      </option>)
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yili</h1>
                  <input className='yil' type="text" />
                </div>
                <div className="text5">
                  <h1>Masofa</h1>
                  <input className='mas' type="text" />
                </div>
                <div className="text5">
                  <h1>Dvigatel</h1>
                  <input className='dvi' type="text" />
                </div>
                <div className="text5">
                  <h1>Rang</h1>
                  <input className='rang' type="text" />
                </div>
                <div className="text5">
                  <h1>Ko'rishlar</h1>
                  <input className='kor' type="text" />
                </div>

              </div>
              <div className="text3">
                <div className="text5">
                  <h1>Ism</h1>
                  <input className='ism' type="text" />
                </div>
                <div className="text5">
                  <h1>Boshlang'ich_narx</h1>
                  <input className='bosh' type="text" />
                </div>
                <div className="text5">
                  <h1>Narx</h1>
                  <input className='narx' type="text" />
                </div>
                <div className="text5">
                  <h1>Sotuv</h1>
                  <input className='sot' type="text" />
                </div>
                <div className="text5">
                  <h1>Depozit</h1>
                  <input className='dep' type="text" />
                </div>
                <div className="text5">
                  <h1>Yoqilg'i iste'moli</h1>
                  <input className='yoq1' type="text" />
                </div>

              </div>
            </div>
            <div className="textsmal">
              <h1>Tavsifi</h1>
              <textarea className="tavsifi" rows="10" cols="100"></textarea>
            </div>
            <div className="df">
              <div className="df1">
                <div className="textcheck5">
                  <input type="checkbox" className='faol' />
                </div>
              </div>
              <Button typeof='button' className='postbutton' onClick={() => getPost()} type='primary' >Post</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="postoyna1">
        <AiOutlineClose onClick={() => postoynaa1()} className='close' />
        <div className="alltext">
          <div className="alltext2">
            <div className="alltext1">
              <div className="text1">
                <div className="text5">
                  <h1>Pozitsiya</h1>
                  <select className='select' id="poz1">
                    {data6.map(item=>{
                      return(
                    <option value={item.id}>{item.name}</option>
                    )})}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yoqilg'i turi</h1>
                    <select className='select' id='yoq1'>
                      {
                        data2.map(item => {
                          return(
                            <option value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                </div>
                <div className="text5">
                  <h1>Vites qutisi</h1>
                  <select className='select' id='vit1'>
                    {data3.map(item=>{
                      return(
                        <option value={item.id}>{item.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Garant</h1>
                  <select id='gar1'  className='select'>
                  {data4.map(item=>{
                    return(
                      <option value={item.id} >{item.name}</option>
                    )
                  })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Vaqt_yaratilgan</h1>
                  <input className='vaqt2' type="text" />
                </div>
                <div className="text5">
                  <h1>Vaqtni yangilangan</h1>
                  <input className='vaqt11' type="text" />
                </div>
              </div>
              <div className="text2">
                <div className="text5">
                  <h1>Filial</h1>
                  <select id='fil1' className='select'>
                    {data5.map(item=>{
                      return(<option value={item.id}>
                        {item.name}
                      </option>)
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yili</h1>
                  <input className='yil1' type="text" />
                </div>
                <div className="text5">
                  <h1>Masofa</h1>
                  <input className='mas1' type="text" />
                </div>
                <div className="text5">
                  <h1>Dvigatel</h1>
                  <input className='dvi1' type="text" />
                </div>
                <div className="text5">
                  <h1>Rang</h1>
                  <input className='rang1' type="text" />
                </div>
                <div className="text5">
                  <h1>Ko'rishlar</h1>
                  <input className='kor1' type="text" />
                </div>

              </div>
              <div className="text3">
                <div className="text5">
                  <h1>Ism</h1>
                  <input className='ism1' type="text" />
                </div>
                <div className="text5">
                  <h1>Boshlang'ich_narx</h1>
                  <input className='bosh1' type="text" />
                </div>
                <div className="text5">
                  <h1>Narx</h1>
                  <input className='narx1' type="text" />
                </div>
                <div className="text5">
                  <h1>Sotuv</h1>
                  <input className='sot1' type="text" />
                </div>
                <div className="text5">
                  <h1>Depozit</h1>
                  <input className='dep1' type="text" />
                </div>
                <div className="text5">
                  <h1>Yoqilg'i iste'moli</h1>
                  <input className='yoq11' type="text" />
                </div>

              </div>
            </div>
            <div className="textsmal">
              <h1>Tavsifi</h1>
              <textarea className="tavsifi1" rows="10" cols="100"></textarea>
            </div>
            <div className="df">
              <div className="df1">
                <div className="textcheck5">
                  <input type="checkbox" className='faol1' />
                </div>
              </div>
                  <Button 
                  className='postbutton1 primary' onClick={() => getPut(keys)} type='button' >Post</Button>
            </div>
          </div>
        </div>
      </div>




    </div >

  );
};
export default Tables;