import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style/style.css";
import Form from "antd/lib/form/Form";

const Tables = () => {
  const [setSelectedRowKeys] = useState([]);
  const [setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const [data5, setdata5] = useState([]);
  const [data6, setdata6] = useState([]);
  const [data7, setdata7] = useState([]);
  const [data8, setdata8] = useState([]);
  const [data9, setdata9] = useState([]);
  const [page, setPage] = useState(1);
  const [keys, setKeys] = useState([]);
  const [keys1, setKeys1] = useState([]);
  const [keys2, setKeys2] = useState([]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
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
      title: "Delete",
      key: "delete",
      width: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => daleteAxiox(key)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];
  const getOneProduct = (item) => {
    setdata(item);
    setPage(2);
    setKeys1(item.id)
    console.log(item, "lox");
    axios.get(`${url}/api/defect_get/`).then((res) => {
      var hh = [];
      for (let i = 0; i < res.data.length; i++) {
        if (item.id === res.data[i].car) {
          hh.push(res.data[i]);
        } else {
          console.log("ishlamadi");
        }
      }
      setdata9(hh);
      console.log(keys2);
    });

    setTimeout(() => {
      document.querySelector(".slect1").value = item.position.id;
      document.querySelector(".slect2").value = item.position.series.id;
      document.querySelector(".slect3").value = item.position.series.model.id;
      document.querySelector(".slect4").value = item.fuel_sort.id;
      document.querySelector(".slect5").value = item.gearbox.id;
      document.querySelector(".slect6").value = item.garant.id;
      // document.querySelector(".slect7").value = item.branch.id;
      document.querySelector(".slect8").value = item.year;
      document.querySelector(".slect9").value = item.distance;
      document.querySelector(".slect10").value = item.engine;
      document.querySelector(".slect11").value = item.colour;
      document.querySelector(".slect12").value = item.name;
      document.querySelector(".slect13").value = item.initial_price;
      document.querySelector(".slect14").value = item.price;
      document.querySelector(".slect15").value = item.sale;
      document.querySelector(".slect16").value = item.depozit;
      document.querySelector(".slect17").value = item.fuel_consumption;
      document.querySelector(".slect18").value = item.description;
      document.querySelector(".slect20").checked = item.is_active;
    }, 1000);
  };

  function getData(id) {
    axios.get(`${url}/api/cars_get/`).then((res) => {
      setdata1(res.data);
      setKeys(id);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/series_get/`)
      .then((res) => {
        setdata7(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/models/`)
      .then((res) => {
        setdata8(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getFuel() {
    axios.get(`${url}/api/fuel_sort/`).then((res) => {
      setdata2(res.data);
    });
  }
  useEffect(() => {
    getFuel();
  }, []);

  function getGear() {
    axios.get(`${url}/api/gear_box/`).then((res) => {
      setdata3(res.data);
    });
  }
  useEffect(() => {
    getGear();
  }, []);

  function getGar() {
    axios.get(`${url}/api/garant/`).then((res) => {
      setdata4(res.data);
    });
  }
  useEffect(() => {
    getGar();
  }, []);

  function getPosit() {
    axios.get(`${url}/api/position_get/`).then((res) => {
      setdata6(res.data);
    });
  }
  useEffect(() => {
    getPosit();
  }, []);

  function getBranch() {
    axios.get(`${url}/api/branch/`).then((res) => {
      setdata5(res.data);
    });
  }
  useEffect(() => {
    getBranch();
  }, []);

  function daleteAxiox(id) {
    console.log(id, "salom");
    axios
      .delete(`${url}/api/cars/${id.id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        alert("ishladi");
        axios.get(`${url}/api/cars/`).then((res) => {
          setdata1(res.data);
        });

        var daalete = new FormData();
        daalete.append("position", id.position.id);
        daalete.append("position.series", id.position.series.name);
        daalete.append("position.series.model", id.position.series.model.name);
        daalete.append("fuel_sort", id.fuel_sort.id);
        daalete.append("gearbox", id.gearbox.id);
        daalete.append("garant", id.garant.id);
        daalete.append("branch", id.branch.id);
        daalete.append("year", id.year);
        daalete.append("distance", id.distance);
        daalete.append("engine", id.engine);
        daalete.append("colour", id.colour);
        daalete.append("name", id.name);
        daalete.append("initial_price", id.initial_price);
        daalete.append("price", id.price);
        daalete.append("sale", id.sale);
        daalete.append("depozit", id.depozit);
        daalete.append("fuel_consumption", id.fuel_consumption);
        daalete.append("description", id.description);
        daalete.append("is_active", id.is_active);
        axios
          .post(`${url}/api/car_history/`, daalete, {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
          .then((res) => {});
      })
      .catch((err) => {
        alert("ishlamadi");
      });
  }

  function postoyna() {
    document.querySelector(".postoyna").style =
      "position:fixed;right:0px;  transition: 1s;";
  }
  function postoynaa() {
    document.querySelector(".postoyna").style =
      "position:fixed;right:-100%;  transition: 1s;";
  }
  function postoyna1(key) {
    document.querySelector(".postoyna1").style =
      "position:fixed;right:0;  transition: 1s;";
    setKeys(key);
  }
  function postoynaa1() {
    document.querySelector(".postoyna1").style =
      "position:fixed;right:-100%;  transition: 1s;";
  }

  function getPost() {
    var formdata = new FormData();
    formdata.append("position", document.querySelector("#poz").value);
    formdata.append("fuel_sort", document.querySelector("#yoq").value);
    formdata.append("gearbox", document.querySelector("#vit").value);
    formdata.append("garant", document.querySelector("#gar").value);
    formdata.append("branch", document.querySelector("#fil").value);
    formdata.append("year", document.querySelector(".yil").value);
    formdata.append("distance", document.querySelector(".mas").value);
    formdata.append("engine", document.querySelector(".dvi").value);
    formdata.append("colour", document.querySelector(".rang").value);
    formdata.append("views", document.querySelector(".kor").value);
    formdata.append("description", document.querySelector(".tavsifi").value);
    formdata.append("is_active", document.querySelector(".faol").checked);
    formdata.append("name", document.querySelector(".ism").value);
    formdata.append("initial_price", document.querySelector(".bosh").value);
    formdata.append("price", document.querySelector(".narx").value);
    formdata.append("sale", document.querySelector(".sot").value);
    formdata.append("depozit", document.querySelector(".dep").value);
    formdata.append("fuel_consumption", document.querySelector(".yoq1").value);

    axios
      .post(`${url}/api/cars/`, formdata, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        alert("ishladi");
        document.querySelector(".postoyna").style =
          "position:fixed;right:-100%;  transition: 1s;";
        axios.get(`${url}/api/cars_get/`).then((res) => {
          setdata1(res.data);
        });
      })
      .catch((err) => {
        alert("ishlamadi");
        console.log(err);
      });
  }




  function malumotput() {
    var malumotput = new FormData();
    malumotput.append("position", document.querySelector("#slect1").value);
    malumotput.append(
      "position.series",
      document.querySelector(".slect2").value
    );
    malumotput.append(
      "position.series.model",
      document.querySelector(".slect3").value
    );
    malumotput.append("fuel_sort", document.querySelector(".slect4").value);
    malumotput.append("gearbox", document.querySelector(".slect5").value);
    malumotput.append("garant", document.querySelector(".slect6").value);
    malumotput.append("branch", document.querySelector(".slect7").value);
    malumotput.append("year", document.querySelector(".slect8").value);
    malumotput.append("distance", document.querySelector(".slect9").value);
    malumotput.append("engine", document.querySelector(".slect10").value);
    malumotput.append("colour", document.querySelector(".slect11").value);
    malumotput.append("name", document.querySelector(".slect12").value);
    malumotput.append(
      "initial_price",
      document.querySelector(".slect13").value
    );
    malumotput.append("price", document.querySelector(".slect14").value);
    malumotput.append("sale", document.querySelector(".slect15").value);
    malumotput.append("depozit", document.querySelector(".slect16").value);
    malumotput.append(
      "fuel_consumption",
      document.querySelector(".slect17").value
    );
    malumotput.append("description", document.querySelector(".slect18").value);
    malumotput.append("is_active", document.querySelector(".slect20").checked);

    axios
      .put(`${url}/api/cars/${data.id}/`, malumotput, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        alert("ishladi");
        axios.get(`${url}/api/cars_get/`).then((res) => {
          setdata1(res.data);
        });
      })
      .catch((err) => {
        alert("ishlamadi");
      });
  }

  function malumotpostdefect(){
    var  malumotpostdefect=new FormData()
    malumotpostdefect.append("description",document.querySelector(".defectdest").value)
    malumotpostdefect.append("car",keys1)
    malumotpostdefect.append("image",keys2)
    console.log(keys2,"salom");

    axios.post(`${url}/api/defect/`,malumotpostdefect,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
    alert("ishladi")
    window.location.reload()
    }).catch(err=>{
      alert("ishlamadi")
    })
    var  malumotpostdefect1=new FormData()
    malumotpostdefect1.append("image",document.querySelector(".defectfile").files[0])

    axios.post(`${url}/api/defect_images/`,malumotpostdefect1,{ headers: { 'Authorization' : 'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
    setKeys2(res.data.id)
    }).catch(err=>{
      alert("ishlamadi")
    })
  }

  function defectpost() {
    document.querySelector(".defectoyna").style="position:fixed;top:35%;transition:1s;"
    
  }
  function defectpost1() {
    document.querySelector(".defectoyna").style="position:fixed;top:-100%;transition:1s;"
    
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
      {page == 1 ? (
        <div>
          <Button onClick={() => postoyna()} className="qoshish" type="primary">
            Qo'shish
          </Button>
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
              <Button onClick={() => malumotput()} type="primary">
                O'zgertirish
              </Button>
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
                    <h1>Pozitsiya</h1>
                    <select className="slect slect1" id="slect1">
                      {data6.map((item) => (
                        <option id="inp1" value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Seriya</h1>
                    <select className="slect slect2">
                      {data7.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Model</h1>
                    <select className="slect slect3">
                      {data8.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i turi</h1>
                    <select className="slect slect4">
                      {data2.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Boshqaruv qutisi</h1>
                    <select className="slect slect5">
                      {data3.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Garant</h1>
                    <select className="slect slect6">
                      {data4.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Vaqtni yangilangan</h1>
                    <input type="text" value={data.time_update.slice(0, 10)} />
                  </div>
                </div>
                <div className="text2">
                  <div className="text">
                    <h1>Filial</h1>
                    <select className="slect slect7" >
                      {data5.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text">
                    <h1>Yili</h1>
                    <input className="slect8" type="number" />
                  </div>
                  <div className="text">
                    <h1>Masofa</h1>
                    <input className="slect9" type="number" />
                  </div>
                  <div className="text">
                    <h1>Dvigatel</h1>
                    <input className="slect10" type="number" />
                  </div>
                  <div className="text">
                    <h1>Rang</h1>
                    <input type="text" className="slect11" />
                  </div>
                  <div className="text">
                    <h1>Ko'rishlar</h1>
                    <input type="number" value={data.views} />
                  </div>
                  <div className="text">
                    <h1>Yaratilgan vaqt</h1>
                    <input
                      type="text"
                      className="slect19"
                      value={data.time_update.slice(0, 10)}
                    />
                  </div>
                </div>
                <div className="text3">
                  <div className="text">
                    <h1>Ism</h1>
                    <input type="text" className="slect12" />
                  </div>
                  <div className="text">
                    <h1>Boshlang'ich narx</h1>
                    <input type="number" className="slect13" />
                  </div>
                  <div className="text">
                    <h1>Narx</h1>
                    <input type="number" className="slect14" />
                  </div>
                  <div className="text">
                    <h1>Chegirma</h1>
                    <input type="number" className="slect15" />
                  </div>
                  <div className="text">
                    <h1>Depozit</h1>
                    <input type="number" className="slect16" />
                  </div>
                  <div className="text">
                    <h1>Yoqilg'i iste'moli</h1>
                    <input type="number" className="slect17" />
                  </div>
                  <div className="textcheck">
                    <h1>Faol</h1>
                    <input type="checkbox" className="slect20" />
                  </div>
                </div>
              </div>
              <div className="textsmall">
                <h1>Tavsifi</h1>
                <textarea
                  id="w3review"
                  rows="19"
                  className="slect18"
                  cols="101"
                ></textarea>
              </div>
            </div>
          </div>
          <h1 className="defect">Mashinaning yoqmagan joylari</h1>
          <button className="malumotbutton" onClick={()=>defectpost()} type="primary">Qo'shish</button>
          <div className="img">
            {data9.map((item) => {
              return (
                <div className="img1">
                  <textarea  rows="15" cols="100" className="malumotinput">{item.description}</textarea>
                  {item.image.map((item2) => {
                    return (
                      <div className="image">
                        <img src={item2.image} alt="" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="postoyna">
        <AiOutlineClose onClick={() => postoynaa()} className="close" />
        <div className="alltext">
          <div className="alltext2">
            <div className="alltext1">
              <div className="text1">
                <div className="text5">
                  <h1>Ism</h1>
                  <input className="ism" type="text" />
                </div>

                <div className="text5">
                  <h1>Pozitsiya</h1>
                  <select className="select" id="poz">
                    {data6.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yoqilg'i turi</h1>
                  <select className="select" id="yoq">
                    {data2.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Boshqaruv qutisi</h1>
                  <select className="select" id="vit">
                    {data3.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Garant</h1>
                  <select id="gar" className="select">
                    {data4.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yoqilg'i iste'moli</h1>
                  <input className="yoq1" type="number" />
                </div>
              </div>
              <div className="text2">
                <div className="text5">
                  <h1>Filial</h1>
                  <select id="fil" className="select">
                    {data5.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yili</h1>
                  <input className="yil" type="number" />
                </div>
                <div className="text5">
                  <h1>Masofa</h1>
                  <input className="mas" type="number" />
                </div>
                <div className="text5">
                  <h1>Dvigatel</h1>
                  <input className="dvi" type="number" />
                </div>
                <div className="text5">
                  <h1>Rang</h1>
                  <input className="rang" type="text" />
                </div>
              </div>
              <div className="text3">
                <div className="text5">
                  <h1>Boshlang'ich narx</h1>
                  <input className="bosh" type="number" />
                </div>
                <div className="text5">
                  <h1>Narx</h1>
                  <input className="narx" type="number" />
                </div>
                <div className="text5">
                  <h1>Chegirma</h1>
                  <input className="sot" type="number" />
                </div>
                <div className="text5">
                  <h1>Depozit</h1>
                  <input className="dep" type="number" />
                </div>
                <div className="text5">
                  <h1>Ko'rishlar</h1>
                  <input className="kor" type="number" />
                </div>
              </div>shish
            </div>
            <div className="textsmal">
              <h1>Tavsifi</h1>
              <textarea className="tavsifi" rows="10" cols="100"></textarea>
            </div>
            <div className="df">
              <div className="df1">
                <div className="textcheck5">
                  <input type="checkbox" className="faol" />
                </div>
              </div>
              <Button
                typeof="button"
                className="postbutton"
                onClick={() => getPost()}
                type="primary"
              >
                Qo'shish
              </Button>
            </div>
          </div>
        </div>
      </div>

       <div className="defectoyna1">
      <div className='defectoyna'>
        <span className="defectclose" onClick={()=>defectpost1()} >X</span>
        <center><h4>Mashinaning nuqsonlarini qo'shish</h4>
        <input className="defectfile" type="file" />
        <textarea className="defectdest" ></textarea><br />
        <button onClick={()=>malumotpostdefect()} className="primary">Q'oshish</button></center>
      </div></div>



      {/* <div className="postoyna1">
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
                  className='postbutton1 primary' onClick={() => getPut(keys)} type='button' >O'zgartirish</Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Tables;
