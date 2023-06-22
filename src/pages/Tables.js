import { Button, Table,Input } from "antd";
import {SearchOutlined,} from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../components/host";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style/style.css";
import Form from "antd/lib/form/Form";
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";

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
  const [datadefect, setdatadefect] = useState([]);
  const [datadeimg, setdataimg] = useState([]);
  const [images, setImages] = useState([]);
  const [editimages, setEditImages] = useState([]);
  const[search,setSearch]=useState('');
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name_uz",
      dataIndex: "name_uz",
    },
    {
      title: "Name_ru",
      dataIndex: "name_ru",
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
      title: "sotildi",
      key: "sell",
      width: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => daleteAxiox(key)} type="success">
              sotildi
            </Button>
          </div>
        );
      },
    },
    {
      title: "O'chirish",
      key: "O'chirish",
      width: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => daleteAxiox2(key)} type="danger">
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
      document.querySelector(".slect7").value = item.branch.id;
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
    axios.get(`${url}/api/cars/`).then((res) => {
      setdata1(res.data);

      // setKeys(id);
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
    axios.get(`${url}/api/position/`).then((res) => {
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
        axios.get(`${url}/api/cars/`).then((res) => {
          setdata1(res.data);
        });

        var daalete = new FormData();
        daalete.append("position", id.position);
        // daalete.append("position.series", id.position.series.name);
        // daalete.append("position.series.model", id.position.series.model.name);
        daalete.append("fuel_sort", id.fuel_sort);
        daalete.append("gearbox", id.gearbox);
        daalete.append("garant", id.garant);
        daalete.append("branch", id.branch);
        daalete.append("year", id.year);
        daalete.append("distance", id.distance);
        daalete.append("engine", id.engine);
        daalete.append("colour_uz", id.colour_uz);
        daalete.append("colour_ru", id.colour_ru);
        daalete.append("name_uz", id.name_uz);
        daalete.append("name_ru", id.name_ru);
        daalete.append("initial_price", id.initial_price);
        daalete.append("price", id.price);
        daalete.append("sale", id.sale);
        daalete.append("depozit", id.depozit);
        daalete.append("fuel_consumption", id.fuel_consumption);
        daalete.append("description_uz", id.description_uz);
        daalete.append("description_ru", id.description_ru);
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
      });
  }
  function daleteAxiox2(id) {
    axios
      .delete(`${url}/api/cars/${id.id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios.get(`${url}/api/cars/`).then((res) => {
          setdata1(res.data);
        });
      })
      .catch((err) => {
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
    formdata.append("colour_uz", document.querySelector(".rang").value);
    formdata.append("colour_ru", document.querySelector("#color_car_ru").value);
    formdata.append("description_uz", document.querySelector(".tavsifi").value);
    formdata.append("description_ru", document.querySelector("#description_car_ru").value);
    formdata.append("is_active", document.querySelector(".faol").checked);
    formdata.append("name_uz", document.querySelector(".ism").value);
    formdata.append("name_ru", document.querySelector("#name_ru_car").value);
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
        console.log(res.data,"danniy");
        var formdata2 = new FormData();
        // eslint-disable-next-line no-lone-blocks
        {datadefect.map((item)=>{
          formdata2.append("car", res.data.id);
          formdata2.append("image1", item.image1);
          formdata2.append("image2", item.image2);
          formdata2.append("description_uz", item.description_uz);
          formdata2.append("description_ru", item.description_ru);
          axios
          .post(`${url}/api/defect/`, formdata2, {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          })
          .then((res3)=>{

          })
        })}
        var formdata3 = new FormData();
        // eslint-disable-next-line no-lone-blocks
        {datadeimg.map((item2)=>{
          formdata3.append("car", res.data.id);
          formdata3.append("image", item2.image);
          axios
          .post(`${url}/api/images/`, formdata3, {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res33)=>{
                        document.querySelector(".postoyna").style =
            "position:fixed;right:-100%;  transition: 1s;";
          axios.get(`${url}/api/cars/`).then((res2) => {
            setdata1(res2.data);
          });
          })
        })}


      })
      .catch((err) => {
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
        axios.get(`${url}/api/cars_get/`).then((res) => {
          setdata1(res.data);
        });
      })
      .catch((err) => {
      });
  }

function malumotDefectbtn () {
  axios
  .get(`${url}/api/defect_get/`, {
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  }).then((res)=>{
    const filter=res.data.filter(item=>item.car===data.id)
    console.log(filter);
    console.log(data.id,"id");
    setEditImages(filter)
  })
  document.querySelector(".defectoyna_edit").style="position:fixed;top:35%;transition:1s;" 
}
function malumotDefectbtn_close () {
  document.querySelector(".defectoyna_edit").style="position:fixed;top:-100%;transition:1s;" 
}


function deletEditImage (id) {
  axios
  .delete(`${url}/api/defect/${id}/`, {
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  }).then((res)=>{
    axios
    .get(`${url}/api/defect_get/`, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((res)=>{
      const filter=res.data.filter(item=>item.car===data.id)
      setEditImages(filter)
    })
  })
}
function putEditImage (id) {
  var formdata = new FormData();
  formdata.append("car",data.id)
  formdata.append("image1",document.querySelector("#rasm_1_edit").files[0],)
  formdata.append("image2",document.querySelector("#rasm_2_edit").files[0],)
  formdata.append("description",document.querySelector("#text_defect_edit").value)
  axios
  .put(`${url}/api/defect/${id}/`,formdata, {
    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
  }).then((res)=>{
    axios
    .get(`${url}/api/defect/`, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((res)=>{
      const filter=res.data.filter(item=>item.car===data.id)
      setEditImages(filter)
      document.querySelector("#rasm_1_edit").value=""
      document.querySelector("#rasm_2_edit").value=""
      document.querySelector("#text_defect_edit").value=""
    })
  })
}
function postDataforcardefect_edit() {
  if (document.querySelector("#rasm_1_edit").value<1&&document.querySelector("#rasm_2_edit").value<1&&document.querySelector("#text_defect_edit").value<1) {
    alert("not enough infa")
  }else{
    var formdata = new FormData();
    formdata.append("car",data.id)
    formdata.append("image1",document.querySelector("#rasm_1_edit").files[0],)
    formdata.append("image2",document.querySelector("#rasm_2_edit").files[0],)
    formdata.append("description",document.querySelector("#text_defect_edit").value)
    axios
    .post(`${url}/api/defect/`,formdata, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((res)=>{
      axios
      .get(`${url}/api/defect/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res)=>{
        const filter=res.data.filter(item=>item.car===data.id)
        setEditImages(filter)
        document.querySelector("#rasm_1_edit").value=""
        document.querySelector("#rasm_2_edit").value=""
        document.querySelector("#text_defect_edit").value=""
      })
    })

  }
    }


    function malumotImagebtn () {
      axios
      .get(`${url}/api/images/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res)=>{
        const filter=res.data.filter(item=>item.car===data.id)
        console.log(filter);
        console.log(data.id,"id");
        setImages(filter)
      })
      document.querySelector(".defecto_edit_img").style="position:fixed;top:35%;transition:1s;" 
    }
    function malumotImagebtn_close () {
      document.querySelector(".defecto_edit_img").style="position:fixed;top:-100%;transition:1s;" 
    }


    function deletimage (id) {
      axios
      .delete(`${url}/api/images/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res)=>{
        axios
        .get(`${url}/api/images/`, {
          headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        }).then((res)=>{
          const filter=res.data.filter(item=>item.car===data.id)
          setImages(filter)
        })
      })
    }
    function putimage (id) {
      var formdata = new FormData();
      formdata.append("car",data.id)
      formdata.append("image",document.querySelector("#rasm_imgd").files[0],)
      axios
      .put(`${url}/api/images/${id}/`,formdata, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((res)=>{
        axios
        .get(`${url}/api/images/`, {
          headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        }).then((res)=>{
          const filter=res.data.filter(item=>item.car===data.id)
          setImages(filter)
          document.querySelector("#rasm_imgd").value=""
        })
      })
    }
    function postimageeDdit() {
      if (document.querySelector("#rasm_imgd").value<1) {
        alert("not enough infa")
      }else{
        var formdata = new FormData();
        formdata.append("car",data.id)
        formdata.append("image",document.querySelector("#rasm_imgd").files[0],)
        axios
        .post(`${url}/api/images/`,formdata, {
          headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        }).then((res)=>{
          axios
          .get(`${url}/api/images/`, {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
          }).then((res)=>{
            const filter=res.data.filter(item=>item.car===data.id)
            setImages(filter)
            document.querySelector("#rasm_imgd").value=""

          })
        })
    
      }
        }


  function defectpost() {
    document.querySelector(".defectoyna").style="position:fixed;top:35%;transition:1s;"
  }
  function defectpost1() {
    document.querySelector(".defectoyna").style="position:fixed;top:-100%;transition:1s;"
    
  }
  function imgpost() {
    document.querySelector(".postimagesoyna").style="position:fixed;top:34%;transition:1s;" 
  }
  function imgpost1() {
    document.querySelector(".postimagesoyna").style="position:fixed;top:-100%;transition:1s";
    
  }
  function postDataforcardefect() {
if (document.querySelector("#rasm_1").value<1&&document.querySelector("#rasm_2").value<1&&document.querySelector("#text_defect").value<1) {
  alert("not enough infa")
}else{
  var datafordefect=
  {   
      image1: document.querySelector("#rasm_1").files[0],
      image2: document.querySelector("#rasm_2").files[0],
      description_uz: document.querySelector("#text_defect_uz").value,
      description_ru: document.querySelector("#text_defect_ru").value
  }
  setdatadefect([...datadefect,datafordefect])
  document.querySelector("#rasm_1").value=""
  document.querySelector("#rasm_2").value=""
  document.querySelector("#text_defect_uz").value=""
  document.querySelector("#text_defect_ru").value=""
}
  }
  function postDataforcarimg() {
    if (document.querySelector("#rasm_img").value<1) {
      alert("not enough infa")
    }else{
      var dataforimg=
      {   
          image: document.querySelector("#rasm_img").files[0],
      }
      setdataimg([...datadeimg,dataforimg])
      document.querySelector("#rasm_img").value=""
    }
      }
      const handleInputChange = (event) => {
        setSearch(event.target.value);
        const searchRegex = new RegExp(`^${event.target.value}`, 'i');
        axios.get(`${url}/api/cars/`).then((res) => {
          const searchdata = res.data.filter((item) => {
            return (
              searchRegex.test(item.name_uz) ||
              searchRegex.test(item.name_ru) ||
              // searchRegex.test(item.position.name)||
              // searchRegex.test(item.position.series.name)||
              // searchRegex.test(item.position.series.model.name)||
              searchRegex.test(item.price)||
              searchRegex.test(item.id)||
              searchRegex.test(item.year)
            );
          });
          
          setdata1(searchdata);
        });
      }
  return (
    <div>
      {page === 1 ? (
        <div>
          <div className="search_div">
          <Button onClick={() => postoyna()} className="qoshish" type="primary">
            Qo'shish
          </Button>
          <Input
            className="header-search"
            prefix={<SearchOutlined />}
            onChange={handleInputChange}
          />
          </div>
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
                        <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>
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
                        <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>
                      ))}
                    </select>
                  </div>
                  {/* <div className="text">
                    <h1>Vaqtni yangilangan</h1>
                    <input type="text" value={data.time_update.slice(0, 10)} />
                  </div> */}
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
                  rows="1"
                  className="slect18"
                  cols="101"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="zb">
          <h1 className="defect">Mashinaning nuqsonlari </h1>
          <button className="malumotbutton" onClick={()=>malumotDefectbtn()} type="primary">Qo'shiddsh</button>
          <h1 className="defect">Mashinaning rasmlari </h1>
          <button className="malumotbutton" onClick={()=>malumotImagebtn()} type="primary">Qo'shiddsh</button>
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
                  <input placeholder="uz" className="ism" type="text" />
                  <input placeholder="ru" id="name_ru_car" className="ism" type="text" />
                </div>

                <div className="text5">
                  <h1>Pozitsiya</h1>
                  <select className="select" id="poz">
                    {data6.map((item) => {
                      return <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Yoqilg'i turi</h1>
                  <select className="select" id="yoq">
                    {data2.map((item) => {
                      return <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Boshqaruv qutisi</h1>
                  <select className="select" id="vit">
                    {data3.map((item) => {
                      return <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>;
                    })}
                  </select>
                </div>
                <div className="text5">
                  <h1>Garant</h1>
                  <select id="gar" className="select">
                    {data4.map((item) => {
                      return <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>;
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
                      return <option value={item.id}>(uz){item.name_uz}(ru){item.name_ru}</option>;
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
                  <h1>Rang_uz</h1>
                  <input className="rang" type="text" />
                </div>
                <div className="text5">
                  <h1>Rang_ru</h1>
                  <input id="color_car_ru" className="rang" type="text" />
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
                  <h6>Mashinaning nuqsonlari </h6>
          <button className="malumotbutton" onClick={()=>defectpost()} type="primary">Qo'shish</button>
                </div>
                <div className="text5">
                  <h6>Mashinaning rasmlari </h6>
          <button className="malumotbutton" onClick={()=>imgpost()} type="primary">Qo'shish</button>
                </div>
              </div>

            </div>
            <div className="textsmal">
              <h1>Tavsifi_uz</h1>
              <textarea className="tavsifi" rows="1" cols="1"></textarea>
              <h1>Tavsifi_ru</h1>
              <textarea id="description_car_ru" className="tavsifi" rows="1" cols="1"></textarea>
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
        <div className="defectoyna1">
      <div className='defectoyna'>
        <span className="defectclose" onClick={()=>defectpost1()} >X</span>
        <center><h4>Mashinaning nuqsonlarini qo'shish</h4>
        <div className="defect_div">
        <input className="input_defect" id="rasm_1" type="file"/>
        <input className="input_defect" id="rasm_2" type="file"/>
        <textarea id="text_defect_uz" className="defectdest" ></textarea><br />
        <textarea id="text_defect_ru" className="defectdest" ></textarea><br />
        <button className="btn_defect" onClick={()=>postDataforcardefect()}>qoshish</button>
        </div>

     </center>
     <div className="main_div_defect">
        {datadefect.map((item,index)=>{
          if (datadefect.length>=1) {
            return<div className="tablediv_defect">
            <div className="div_img_defect">
            <img className="img_defect" src={URL.createObjectURL(item.image1)} alt={item.image1.name} />
            <img className="img_defect" src={URL.createObjectURL(item.image2)} alt={item.image2.name} />
            </div>
            <p className="p_defect">{item.description_uz}</p>
            <p className="p_defect">{item.description_ru}</p>
            </div>
          }else{
            return<p>pustoy</p>
          }

        })}
      </div>
      </div>
      
      </div>
      <div className="postimagesoyna">
      <div className='defectoynaw'>
        <span className="defectclose" onClick={()=>imgpost1()} >X</span>
        <center><h4>Mashinaning rasmlari qo'shish</h4>
        <div className="defect_div">
        <input className="input_defect" id="rasm_img" type="file"/>
        <button className="btn_defect" onClick={()=>postDataforcarimg()}>qoshish</button>
        </div>

     </center>
     <div className="main_div_defect">
        {datadeimg.map((item)=>{
          if (datadeimg.length>=1) {
            return<div className="tablediv_defect">
            <div className="div_img_defect">
            <img className="img_defect" src={URL.createObjectURL(item.image)} alt={item.image.name} />
            </div>
            </div>
          }else{
            return<p>pustoy</p>
          }

        })}
      </div>
      </div>
      
      </div>
      </div>
       <div className="defectoyna_ediddt">
      <div className='defectoyna_edit'>
        <span className="defectclose" onClick={()=>malumotDefectbtn_close()} >X</span>
        <center><h4>Mashinaning nuqsonlarini qo'shish</h4>
        <div className="defect_div">
        <input className="input_defect" id="rasm_1_edit" type="file"/>
        <input className="input_defect" id="rasm_2_edit" type="file"/>
        <textarea id="text_defect_edit" className="defectdest_edit" ></textarea><br />
        <button className="btn_defect" onClick={()=>postDataforcardefect_edit()}>qoshish</button>
        </div>

     </center>
     <div className="main_div_defect">
        {editimages.map((item,index)=>{
          if (editimages.length>=1) {
            return<div className="tablediv_defect">
            <div className="div_img_defect">
            <img className="img_defect" src={item.image1} alt={item.image1} />
            <img className="img_defect" src={item.image2} alt={item.image2} />
            </div>
            <p className="p_defect">{item.description}</p>
            <div className="edit_window"><AiOutlineEdit onClick={()=>putEditImage(item.id)}  className="editicon"/><AiFillDelete onClick={()=>deletEditImage(item.id)} className="editicon"/></div>
            </div>
          }else{
            return<p>pustoy</p>
          }

        })}
      </div>
      </div>
      </div>
      <div className="postimagesoyna_edidit">
      <div className='defecto_edit_img'>
        <span className="defectclose" onClick={()=>malumotImagebtn_close()} >X</span>
        <center><h4>Mashinaning rasmlari qo'shish</h4>
        <div className="defect_div">
        <input className="input_defect_edit" id="rasm_imgd" type="file"/>
        <button className="btn_defect" onClick={()=>postimageeDdit()}>qoshish</button>
        </div>

     </center>
     <div className="main_div_defect">
        {images.map((item)=>{
          if (images.length>=1) {
            return<div className="tablediv_defect">
            <div className="div_img_defect">
            <img className="img_img" src={ item.image} alt={item.image} />
            </div>
            <div className="edit_window"><AiOutlineEdit onClick={()=>putimage(item.id)}  className="editicon"/><AiFillDelete onClick={()=>deletimage(item.id)} className="editicon"/></div>
            </div>
          }else{
            return<p>pustoy</p>
          }

        })}
      </div>
      </div>
      
      </div>
    </div>
  );
};
export default Tables;
