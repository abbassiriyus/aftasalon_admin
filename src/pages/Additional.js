import React, { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "antd";
import url from "../components/host";
import axios from "axios";
import "./style/additional.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Additional() {
  const [fueldata, setfueldata] = useState();
  const [fueldata1, setfueldata1] = useState();
  const [fueldata2, setfueldata2] = useState();
  const [fueldata3, setfueldata3] = useState([]);
  const [fueldata4, setfueldata4] = useState([]);
  const [fueldata5, setfueldata5] = useState();
  const [fueldata6, setfueldata6] = useState();
  const [id, setId] = useState(0);
  const [key, setkey] = useState(0);
  const [key1, setkey1] = useState(0);
  const [key2, setkey2] = useState(0);
  const [key3, setkey3] = useState(0);
  const [key4, setkey4] = useState(0);
  const [key5, setkey5] = useState(0);
  const [seria, setSeria] = useState([]);
  const [SelectSerias, setSelectSerias] = useState("");
  const [SelectPosition, setSelectPosition] = useState("");
  const [blank, setBlank] = useState([]);
  const [keyBlank, setKeyBlank] = useState([]);
  // 1 - page

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      witdh: "5%",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      witdh: "5%",
      dataIndex: "name_ru",
    },

    {
      title: "O'zgartirish",
      witdh: "5%",
      render: (fueldata) => {
        return (
          <div>
            <Button
              onClick={() => postoyna11(fueldata)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => deletee(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/fuel_sort/`)
      .then((res) => {
        setfueldata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deletee(id) {
    axios
      .delete(`${url}/api/fuel_sort/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/api/fuel_sort/`)
          .then((res) => {
            setfueldata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getPost1() {
    var formdata1 = new FormData();
    formdata1.append(
      "name_uz",
      document.querySelector("#fuel_sort_post_uz").value
    );
    formdata1.append(
      "name_ru",
      document.querySelector("#fuel_sort_post_ru").value
    );
    axios
      .post(`${url}/api/fuel_sort/ `, formdata1, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postoyna10").style =
          "position: absolute;display:none;    transition: 1s;";
        axios
          .get(`${url}/api/fuel_sort/`)
          .then((res) => {
            setfueldata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  function getPut1(id) {
    var formdata2 = new FormData();
    formdata2.append(
      "name_uz",
      document.querySelector("#fuel_sort_put_uz").value
    );
    formdata2.append(
      "name_ru",
      document.querySelector("#fuel_sort_put_ru").value
    );
    axios
      .put(`${url}/api/fuel_sort/${id}/`, formdata2, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postoyna11").style =
          "position: absolute;display:none;    transition: 1s;";
        axios
          .get(`${url}/api/fuel_sort/`)
          .then((res) => {
            setfueldata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  function postoyna11(id) {
    setId(id);
    document.querySelector(".postoyna11").style =
      "position: absolute;display:block;    transition: 1s;";
  }
  function postoynaclose11() {
    document.querySelector(".postoyna11").style =
      "position: absolute;display:none;   transition: 1s;";
  }

  function postoyna10() {
    document.querySelector(".postoyna10").style =
      "position: absolute;display:block;    transition: 1s;";
  }
  function postoynaclose10() {
    document.querySelector(".postoyna10").style =
      "position: absolute;display:none;    transition: 1s;";
  }

  // 2-page

  const columns1 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      dataIndex: "name_ru",
    },

    {
      title: "O'zgartirish",
      render: (fueldata1) => {
        return (
          <div>
            <Button
              onClick={() => putoyanfuel2(fueldata1)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => deletegear(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/gear_box/`)
      .then((res) => {
        setfueldata1(res.data);
      })
      .catch((err) => {
        console.log(err, "salom");
      });
  }, []);

  function putoyanfuel() {
    document.querySelector(".putoyanfuel").style =
      "position: absolute;display:block;   transition: 1s;";
  }

  function putoyanfuel1() {
    document.querySelector(".putoyanfuel").style =
      "position: absolute;display:none;    transition: 1s;";
  }
  function putoyanfuel2(id) {
    document.querySelector(".putoyanfuel1").style =
      "position: absolute;display:block;  transition: 1s;";
    setkey(id);
  }

  function putoyanfuel3() {
    document.querySelector(".putoyanfuel1").style =
      "position: absolute;display:none;    transition: 1s;";
  }

  function getPost2() {
    var formdata3 = new FormData();
    formdata3.append(
      "name_uz",
      document.querySelector("#gearbox_post_uz").value
    );
    formdata3.append(
      "name_ru",
      document.querySelector("#gearbox_post_ru").value
    );
    axios
      .post(`${url}/api/gear_box/`, formdata3, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putoyanfuel").style =
          "position: absolute;display:none;    transition: 1s;";
        axios
          .get(`${url}/api/gear_box/`)
          .then((res) => {
            setfueldata1(res.data);
          })
          .catch((err) => {
            console.log(err, "salom");
          });
      })
      .catch((err) => {});
  }
  function getPut2(id) {
    var formdata4 = new FormData();
    formdata4.append(
      "name_uz",
      document.querySelector("#gearbox_put_uz").value
    );
    formdata4.append(
      "name_ru",
      document.querySelector("#gearbox_put_ru").value
    );
    axios
      .put(`${url}/api/gear_box/${id}/`, formdata4, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putoyanfuel1").style =
          "position: fixed;display:none;   transition: 1s;";
        axios
          .get(`${url}/api/gear_box/`)
          .then((res) => {
            setfueldata1(res.data);
          })
          .catch((err) => {
            console.log(err, "salom");
          });
      })
      .catch((err) => {});
  }

  function deletegear(id) {
    axios
      .delete(`${url}/api/gear_box/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios.get(`${url}/api/gear_box/`).then((res) => {
          setfueldata1(res.data);
        });
      })
      .catch((err) => {});
  }

  // 3- page

  const columns2 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      dataIndex: "name_ru",
    },
    {
      title: "Time",
      dataIndex: "time",
    },

    {
      title: "O'zgartirish",
      render: (fueldata2) => {
        return (
          <div>
            <Button
              onClick={() => putgarantoyna(fueldata2)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => deletegarant(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/garant/`)
      .then((res) => {
        setfueldata2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function postgarantoyna() {
    document.querySelector(".postgarantoyna").style =
      "position: absolute;display:block;   transition: 1s;";
  }

  function postgarantoyna1() {
    document.querySelector(".postgarantoyna").style =
      "position: absolute;display:none;    transition: 1s;";
  }

  function getPost3() {
    var formdata5 = new FormData();
    formdata5.append(
      "name_uz",
      document.querySelector("#garant_post_uz").value
    );
    formdata5.append(
      "name_ru",
      document.querySelector("#garant_post_ru").value
    );
    formdata5.append("time", document.querySelector("#garant_post_time").value);

    axios
      .post(`${url}/api/garant/`, formdata5, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postgarantoyna").style =
          "position: absolute;display:none;   transition: 1s;";
        axios
          .get(`${url}/api/garant/`)
          .then((res) => {
            setfueldata2(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }
  function getPut3(id) {
    var formdata6 = new FormData();
    formdata6.append("name_uz", document.querySelector("#garant_put_uz").value);
    formdata6.append("name_ru", document.querySelector("#garant_put_uz").value);
    formdata6.append("time", document.querySelector("#garant_put_time").value);

    axios
      .put(`${url}/api/garant/${id}/`, formdata6, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putgarantoyna").style =
          "position: absolute;display:none;    transition: 1s;";
        axios
          .get(`${url}/api/garant/`)
          .then((res) => {
            setfueldata2(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  function deletegarant(id) {
    axios
      .delete(`${url}/api/garant/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/api/garant/`)
          .then((res) => {
            setfueldata2(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  function putgarantoyna(id) {
    document.querySelector(".putgarantoyna").style =
      "position: absolute;display:block;  transition: 1s;";
    setkey1(id);
  }

  function putgarantoyna1() {
    document.querySelector(".putgarantoyna").style =
      "position: absolute;display:none;    transition: 1s;";
  }

  // 4 -page

  const columns3 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      dataIndex: "name_ru",
    },
    {
      title: "O'zgartirish",
      render: (fueldata3) => {
        return (
          <div>
            <Button
              onClick={() => putmodeloyna(fueldata3)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => getdeletemodel(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/models/`)
      .then((res) => {
        setfueldata3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function postmodeloyna() {
    document.querySelector(".postmodeloyna").style =
      "position: absolute;display:block;    transition: 1s;";
  }

  function postmodeloyna1() {
    document.querySelector(".postmodeloyna").style =
      "position: absolute;display:none;   transition: 1s;";
  }
  function putmodeloyna(id) {
    document.querySelector(".putmodeloyna").style =
      "position: absolute;display:block;  transition: 1s;";
    setkey2(id);
  }

  function putmodeloyna1() {
    document.querySelector(".putmodeloyna").style =
      "position: absolute; display:none;  transition: 1s;";
  }

  function getPostmodel() {
    var model = new FormData();
    model.append("name_uz", document.querySelector("#model_post_uz").value);
    model.append("name_ru", document.querySelector("#model_post_ru").value);

    axios
      .post(`${url}/api/models/`, model, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postmodeloyna").style =
          "position: absolute;display:none;   transition: 1s;";
        axios
          .get(`${url}/api/models/`)
          .then((res) => {
            setfueldata3(res.data);
          })
          .catch((err) => {});
      })
      .catch((err1) => {});
  }

  function getPutmodel(id) {
    var model = new FormData();
    model.append("name_uz", document.querySelector("#model_put_uz").value);
    model.append("name_ru", document.querySelector("#model_put_ru").value);
    axios
      .put(`${url}/api/models/${id}/`, model, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putmodeloyna").style =
          "position: absolute;display:none;   transition: 1s;";
        axios
          .get(`${url}/api/models/`)
          .then((res) => {
            setfueldata3(res.data);
          })
          .catch((err) => {
            console.log(err, "ishlamadi");
          });
      })
      .catch((err1) => {});
  }

  function getdeletemodel(id) {
    axios
      .delete(`${url}/api/models/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/api/models/`)
          .then((res) => {
            setfueldata3(res.data);
          })
          .catch((err) => {});
      })
      .catch((err1) => {});
  }

  // 5 -pages

  const columns4 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      dataIndex: "name_ru",
    },
    {
      title: "O'zgartirish",
      render: (fueldata4) => {
        return (
          <div>
            <Button
              onClick={() => putseriesoyna(fueldata4)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => getDeleteseries(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/series/`)
      .then((res) => {
        setfueldata4(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function postseriesoyna() {
    document.querySelector(".postserisoyna").style =
      "position: absolute;display:block;";
  }

  function postseriesoyna1() {
    document.querySelector(".postserisoyna").style =
      "position: absolute;display:none;";
  }

  function putseriesoyna(id) {
    document.querySelector(".putserisoyna1").style =
      "position: absolute;display:block;";
    setkey3(id);
  }

  function putseriesoyna1() {
    document.querySelector(".putserisoyna1").style =
      "position: absolute;display:none;";
  }

  function renderSelect() {
    var vall = document.querySelector(".selectFuels").value;
    axios.get(`${url}/api/models/`).then((res) => {
      // var gg = []
      res.data.map((item) => {
        if (vall == item.name) {
          localStorage.setItem("idModel", item.id);
          // gg.push(item)
          // console.log(item);
        }
      });
    });
  }

  function getpostseries() {
    var series = new FormData();
    series.append("name_uz", document.querySelector("#seria_post_uz").value);
    series.append("name_ru", document.querySelector("#seria_post_ru").value);
    series.append("model", SelectSerias);
    axios
      .post(`${url}/api/series/`, series, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postserisoyna").style =
          "position: absolute;display:none;";
        axios
          .get(`${url}/api/series/`)
          .then((res) => {
            setfueldata4(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        axios.get(`${url}/api/series/`).then((res) => {
          setSeria(res.data);
        });
      })
      .catch((err) => {});
  }
  function getputseries(id) {
    var series1 = new FormData();
    series1.append("name_uz", document.querySelector("#put_series_uz").value);
    series1.append("name_ru", document.querySelector("#put_series_ru").value);
    series1.append("model", SelectSerias);
    axios
      .put(`${url}/api/series/${id}/`, series1, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putserisoyna1").style =
          "position: absolute;display:none;";
        axios
          .get(`${url}/api/series/`)
          .then((res) => {
            setfueldata4(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  function getDeleteseries(id) {
    axios
      .delete(`${url}/api/series/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/api/series/`)
          .then((res) => {
            setfueldata4(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  }

  // 6-page

  const columns5 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "O'zbekcha nomi",
      dataIndex: "name_uz",
    },
    {
      title: "Ruscha nomi",
      dataIndex: "name_ru",
    },
    {
      title: "O'zgartirish",
      render: (fueldata5) => {
        return (
          <div>
            <Button
              onClick={() => putpozitsiyaoyna(fueldata5)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => getdeletepozition(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/api/position/`)
      .then((res) => {
        setfueldata5(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`${url}/api/series/`).then((res) => {
      setSeria(res.data);
    });
  }, []);

  function postpozitsiyaoyna() {
    document.querySelector(".postpozitsiyaoyna").style =
      "position: absolute;display:block;";
  }

  function postpozitsiyaoyna1() {
    document.querySelector(".postpozitsiyaoyna").style =
      "position: absolute;display:none;";
  }

  function putpozitsiyaoyna(id) {
    document.querySelector(".putpozitsiyaoyna").style =
      "position: absolute;display:block;";
    setkey4(id);
  }

  function putpozitsiyaoyna1() {
    document.querySelector(".putpozitsiyaoyna").style =
      "position: absolute;display:none;";
  }

  function postpozition() {
    var pozition = new FormData();
    pozition.append(
      "name_uz",
      document.querySelector("#position_post_uz").value
    );
    pozition.append(
      "name_ru",
      document.querySelector("#position_post_ru").value
    );
    pozition.append("series", SelectPosition);
    axios
      .post(`${url}/api/position/`, pozition, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postpozitsiyaoyna").style =
          "position: absolute;display:none;";
        axios.get(`${url}/api/position/`).then((res) => {
          setfueldata5(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function testSseries() {
    var vall = document.querySelector(".testSeri").value;
    axios.get(`${url}/api/series_get/`).then((res) => {
      res.data.map((item) => {
        if (vall == item.name) {
          localStorage.setItem("keysSerie", item.id);
          // JSON.stringify(localStorage.setItem('keySerie', item))
          // console.log(item.id);
        }
      });
    });
  }

  function putpozition(id) {
    var putpozition = new FormData();
    putpozition.append(
      "name_uz",
      document.querySelector("#positon_put_uz").value
    );
    putpozition.append(
      "name_ru",
      document.querySelector("#positon_put_ru").value
    );
    putpozition.append("series", document.querySelector(".putozition1").value);
    axios
      .put(`${url}/api/position/${id}/`, putpozition, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putpozitsiyaoyna").style =
          "position: absolute;display:none;";
        axios.get(`${url}/api/position/`).then((res) => {
          setfueldata5(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getdeletepozition(id) {
    axios
      .delete(`${url}/api/position/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios.get(`${url}/api/position_get/`).then((res) => {
          setfueldata5(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 7 -page

  const columns6 = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Ism",
      // dataIndex: "name_uz",
      render: (fueldata6) => {
        return (
          <div className="filial-div">
<p >UZ:{fueldata6.name_uz}</p>
<p>RU:{fueldata6.name_ru}</p>
          </div>
        );
      },
    },
    {
      title: "Davlat",
      render: (fueldata6) => {
        return (
          <div>
<p>{fueldata6.country_uz}</p>
<p>{fueldata6.country_ru}</p>
          </div>
        );
      },
    },
    {
      title: "Region",
      render: (fueldata6) => {
        return (
          <div>
<p>{fueldata6.region_uz}</p>
<p>{fueldata6.region_ru}</p>
          </div>
        );
      },
    },
    {
      title: "Shahar",
      render: (fueldata6) => {
        return (
          <div>
<p>{fueldata6.city_uz}</p>
<p>{fueldata6.city_ru}</p>
          </div>
        );
      },
    },
    {
      title: "Tuman",
      render: (fueldata6) => {
        return (
          <div>
<p>{fueldata6.district_uz}</p>
<p>{fueldata6.district_ru}</p>
          </div>
        );
      },
    },
    {
      title: "Koʻcha",
      render: (fueldata6) => {
        return (
          <div>
<p>{fueldata6.street_uz}</p>
<p>{fueldata6.street_ru}</p>
          </div>
        );
      },
    },
    {
      title: "O'zgartirish",
      render: (fueldata6) => {
        return (
          <div>
            <Button
              onClick={() => putfillialoyna(fueldata6)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => deletefilial(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];
  // 8 -page
  const columns7 = [
{
  title: "id",
  dataIndex: "id",
},
{
  title: "Title",
  dataIndex: "title",
},
{
  title: "Text",
  dataIndex: "text",
},
    {
      title: "O'zgartirish",
      render: (blank) => {
        return (
          <div>
            <Button
              onClick={() => putClickBlank(blank)}
              style={{ background: "orange", color: "white" }}
              type="button"
            >
              O'zgartirish
            </Button>
          </div>
        );
      },
    },
    {
      title: "o'chirish",
      witdh: "5%",
      render: (key) => {
        return (
          <div>
            <Button onClick={() => deletefilial(key.id)} type="danger">
              O'chirish
            </Button>
          </div>
        );
      },
    },
  ];
  function putClickBlank (item) {
    document.querySelector(".putBlank").style =
      "position:fixed;right:0;    transition: 1s;";
    setKeyBlank(item)
   }
   function putCloseBlank () {
    document.querySelector(".putBlank").style =
      "position:fixed;right:-100%;    transition: 1s;";
   }
   function postClickBlank (item) {
    document.querySelector(".postBlank").style =
      "position:fixed;right:0;    transition: 1s;";
    setKeyBlank(item)
   }
   function postCloseBlank () {
    document.querySelector(".postBlank").style =
      "position:fixed;right:-100%;    transition: 1s;";
   }
   function putBlank () {
    var blankform = new FormData();
    blankform.append("title", document.querySelector("#put_blank_title").value);
    blankform.append("text", document.querySelector("#put_blank_text").value);
    axios
    .put(`${url}/api/blank/${keyBlank.id}/`, blankform, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    })
    .then((res) => {
      document.querySelector(".putBlank").style =
        "position:fixed;right:-100%;    transition: 1s;";
      axios.get(`${url}/api/blank/`,
       {headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },}
      ).then((res) => {
        setBlank(res.data);
        console.log(res.data,'BLANK');
      });
    })
   }
   function postBlank () {
    var blankform = new FormData();
    blankform.append("title", document.querySelector("#post_blank_title").value);
    blankform.append("text", document.querySelector("#post_blank_text").value);
    axios
    .post(`${url}/api/blank/`, blankform, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    })
    .then((res) => {
      document.querySelector(".postBlank").style =
        "position:fixed;right:-100%;    transition: 1s;";
      axios.get(`${url}/api/blank/`,
       {headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },}
      ).then((res) => {
        setBlank(res.data);
      });
    })
   }
  useEffect(() => {
    axios
      .get(`${url}/api/branch/`)
      .then((res) => {
        setfueldata6(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`${url}/api/blank/`,{
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        setBlank(res.data);
      })
  }, []);

  function postfillialoyna() {
    document.querySelector(".postfillialoyna").style =
      "position:fixed;right:0;    transition: 1s;";
  }
  function postfillialoyna1() {
    document.querySelector(".postfillialoyna").style =
      "position:fixed;right:-100%;    transition: 1s;";
  }

  function postfillial() {
    var Fillial = new FormData();
    Fillial.append("name_uz", document.querySelector("#branch_post_name_uz").value);
    Fillial.append("country_uz", document.querySelector("#branch_post_country_uz").value);
    Fillial.append("region_uz", document.querySelector("#branch_post_region_uz").value);
    Fillial.append("city_uz", document.querySelector("#branch_post_city_uz").value);
    Fillial.append("district_uz", document.querySelector("#branch_post_district_uz").value);
    Fillial.append("street_uz", document.querySelector("#branch_post_street_uz").value);

    Fillial.append("name_ru", document.querySelector("#branch_post_name_ru").value);
    Fillial.append("country_ru", document.querySelector("#branch_post_country_ru").value);
    Fillial.append("region_ru", document.querySelector("#branch_post_region_ru").value);
    Fillial.append("city_ru", document.querySelector("#branch_post_city_ru").value);
    Fillial.append("district_ru", document.querySelector("#branch_post_district_ru").value);
    Fillial.append("street_ru", document.querySelector("#branch_post_street_ru").value);

    axios
      .post(`${url}/api/branch/`, Fillial, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".postfillialoyna").style =
          "position:fixed;right:-100%;    transition: 1s;";
        axios.get(`${url}/api/branch/`).then((res) => {
          setfueldata6(res.data);
        });
      })
      .catch((err) => {});
  }

  function putfillialoyna(id) {
    document.querySelector(".putfillialoyna").style =
      "position:fixed;right:0;    transition: 1s;";
    setkey5(id);
  }
  function putfillialoyna1() {
    document.querySelector(".putfillialoyna").style =
      "position:fixed;right:-100%;    transition: 1s;";
  }

  function putfillial(id) {
    var Fillial1 = new FormData();
    Fillial1.append("name_uz", document.querySelector("#branch_put_name_uz").value);
    Fillial1.append("country_uz", document.querySelector("#branch_put_country_uz").value);
    Fillial1.append("region_uz", document.querySelector("#branch_put_region_uz").value);
    Fillial1.append("city_uz", document.querySelector("#branch_put_city_uz").value);
    Fillial1.append("district_uz", document.querySelector("#branch_put_district_uz").value);
    Fillial1.append("street_uz", document.querySelector("#branch_put_street_uz").value);

    Fillial1.append("name_ru", document.querySelector("#branch_put_name_ru").value);
    Fillial1.append("country_ru", document.querySelector("#branch_put_country_ru").value);
    Fillial1.append("region_ru", document.querySelector("#branch_put_region_ru").value);
    Fillial1.append("city_ru", document.querySelector("#branch_put_city_ru").value);
    Fillial1.append("district_ru", document.querySelector("#branch_put_district_ru").value);
    Fillial1.append("street_ru", document.querySelector("#branch_put_street_ru").value);
    axios
      .put(`${url}/api/branch/${id}/`, Fillial1, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector(".putfillialoyna").style =
          "position:fixed;right:-100%;    transition: 1s;";
        axios.get(`${url}/api/branch/`).then((res) => {
          setfueldata6(res.data);
        });
      })
      .catch((err) => {});
  }

  function deletefilial(id) {
    axios
      .delete(`${url}/api/branch/${id}/`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        axios.get(`${url}/api/branch/`).then((res) => {
          setfueldata6(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="katta10">
        <div className="house">
          <button onClick={() => postoyna10()} className="post10">
            Qo'shish
          </button>
          <h1>Yoqilg'i turlari</h1>
          <Table
            className="table"
            pagination={{ pageSize: 4 }}
            columns={columns}
            dataSource={fueldata}
          />

          <div className="postoyna10">
            <div className="created">
              <AiOutlineClose
                className="close"
                onClick={() => postoynaclose10()}
              />
              <div className="div10">
                <p>Yoqilg'i turilari </p>
                <input
                  placeholder="uz"
                  id="fuel_sort_post_uz"
                  className="fuelname11"
                  type="text"
                />
                <input
                  placeholder="ru"
                  id="fuel_sort_post_ru"
                  className="fuelname11"
                  type="text"
                />
                <div className="putbutton11div">
                  <button onClick={() => getPost1()} className="putbutton11">
                    Qo'shish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="postoyna11">
            <div className="created">
              <AiOutlineClose
                className="close"
                onClick={() => postoynaclose11()}
              />
              <div className="div10">
                <p>Yoqilg'i turilari o'zgartiring</p>
                <input
                  className="fuelname10"
                  placeholder={id.name_uz}
                  type="text"
                  id="fuel_sort_put_uz"
                />
                <input
                  className="fuelname10"
                  placeholder={id.name_ru}
                  type="text"
                  id="fuel_sort_put_ru"
                />
                <div>
                  <button onClick={() => getPut1(id.id)} className="post11">
                    O'zgartirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-page */}

        <div className="house1">
          <button onClick={() => putoyanfuel()} className="post11">
            Qo'shish
          </button>
          <h1>Boshqaruv qutisi turilari </h1>
          <Table
            className="table"
            pagination={{ pageSize: 4 }}
            columns={columns1}
            dataSource={fueldata1}
          />

          <div className="putoyanfuel">
            <div className="created">
              <AiOutlineClose
                className="close"
                onClick={() => putoyanfuel1()}
              />
              <div className="div10">
                <p>Boshqaruv qutisi turilari </p>
                <input
                  placeholder="uz"
                  id="gearbox_post_uz"
                  className="gearinput"
                  type="text"
                />
                <input
                  placeholder="ru"
                  id="gearbox_post_ru"
                  className="gearinput"
                  type="text"
                />
                <div className="putbutton11div">
                  <button onClick={() => getPost2()} className="putbutton">
                    Qo'shish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="putoyanfuel1">
            <div className="created">
              <AiOutlineClose
                className="close"
                onClick={() => putoyanfuel3()}
              />
              <div className="div10">
                <p>Mashinalari turin </p>
                <input
                  className="gearinput1"
                  placeholder={key.name_uz}
                  type="text"
                  id="gearbox_put_uz"
                />
                <input
                  className="gearinput1"
                  placeholder={key.name_ru}
                  type="text"
                  id="gearbox_put_ru"
                />
                <div>
                  {" "}
                  <button onClick={() => getPut2(key.id)} className="putbutton">
                    O'zgartirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-page */}

      <div className="katta11">
        <div className="house2">
          <button onClick={() => postgarantoyna()} className="post11">
            Qo'shish
          </button>
          <h1>Garantlari </h1>
          <Table
            className="table"
            pagination={{ pageSize: 4 }}
            columns={columns2}
            dataSource={fueldata2}
          />

          <div className="postgarantoyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => postgarantoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Garant uz </p>
                <input id="garant_post_uz" className="gearinput2" type="text" />
                <p>Garant ru</p>
                <input id="garant_post_ru" className="gearinput2" type="text" />
                <p>Data</p>
                <input
                  id="garant_post_time"
                  className="gearinput3"
                  type="number"
                />
              </div>
              <div className="putbutton11div">
                <button onClick={() => getPost3()} className="putbutton11">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
          <div className="putgarantoyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => putgarantoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Garant_uz</p>
                <input
                  className="gearinput5"
                  placeholder={key1.name_uz}
                  type="text"
                  id="garant_put_uz"
                />
                <p>Garant_ru</p>
                <input
                  className="gearinput5"
                  placeholder={key1.name_ru}
                  type="text"
                  id="garant_put_ru"
                />
                <p>Soati</p>
                <input
                  className="gearinput4"
                  placeholder={key1.time}
                  type="number"
                  id="garant_put_time"
                />
              </div>
              <div className="putbutton11div">
                <button
                  className="putbutton11"
                  onClick={() => getPut3(key1.id)}
                >
                  O'zgartirish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-page */}
        <div className="house3">
          <button className="post11" onClick={() => postmodeloyna()}>
            Qo'shish
          </button>
          <h1>Modellari</h1>
          <Table
            className="table"
            pagination={{ pageSize: 4 }}
            columns={columns3}
            dataSource={fueldata3}
          />

          <div className="postmodeloyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => postmodeloyna1()}
                className="close"
              />
              <div className="div10">
                <p>Modellari </p>
                <input
                  type="text"
                  placeholder="uz"
                  id="model_post_uz"
                  className="modelinput"
                />
                <input
                  type="text"
                  placeholder="ru"
                  id="model_post_ru"
                  className="modelinput"
                />
                <div className="putbutton11div">
                  <button
                    onClick={() => getPostmodel()}
                    className="putbutton11"
                  >
                    Qo'shish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="putmodeloyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => putmodeloyna1()}
                className="close"
              />
              <div className="div10">
                <p>Modellari </p>
                <input
                  type="text"
                  placeholder={key2.name_uz}
                  className="modelinput1"
                  id="model_put_uz"
                />
                <input
                  type="text"
                  placeholder={key2.name_ru}
                  className="modelinput1"
                  id="model_put_ru"
                />
                <div className="putbutton11div">
                  <button
                    onClick={() => getPutmodel(key2.id)}
                    className="putbutton11"
                  >
                    O'zgartirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-page */}
      <div className="katta12">
        <div className="house4">
          <button className="post11" onClick={() => postseriesoyna()}>
            Qo'shish
          </button>
          <h1>Seriyalari </h1>
          <Table
            className="table"
            pagination={{ pageSize: 4 }}
            columns={columns4}
            dataSource={fueldata4}
          />

          <div className="postserisoyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => postseriesoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Seriyalari </p>
                <select
                  onChange={(e) => setSelectSerias(e.target.value)}
                  className="selectFuels"
                  onClick={() => renderSelect()}
                >
                  <option></option>
                  {fueldata3.map((item) => {
                    return (
                      <option value={item.id}>
                        (uz){item.name_uz} (ru){item.name_ru}
                      </option>
                    );
                  })}
                </select>
                <h1>&nbsp;</h1>
                <input
                  className="seriyapost"
                  placeholder="uz"
                  type="text"
                  id="seria_post_uz"
                />
                <input
                  className="seriyapost"
                  placeholder="ru"
                  type="text"
                  id="seria_post_ru"
                />
              </div>
              <div className="putbutton11div">
                <button className="putbutton11" onClick={() => getpostseries()}>
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
          <div className="putserisoyna1">
            <div className="created">
              <AiOutlineClose
                onClick={() => putseriesoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Seriyalari </p>
                <input
                  className="seriyaput"
                  placeholder={key3.name_uz}
                  type="text"
                  id="put_series_uz"
                />
                <input
                  className="seriyaput"
                  placeholder={key3.name_ru}
                  type="text"
                  id="put_series_ru"
                />
                <select
                  onChange={(e) => setSelectSerias(e.target.value)}
                  className="selectFuels"
                  onClick={() => renderSelect()}
                >
                  <option></option>
                  {fueldata3.map((item) => {
                    return (
                      <option value={item.id}>
                        (uz){item.name_uz} (ru){item.name_ru}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="putbutton11div">
                <button
                  onClick={() => getputseries(key3.id)}
                  className="putbutton11"
                >
                  O'zgartirish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6-page */}

        <div className="house5">
          <button className="post11" onClick={() => postpozitsiyaoyna()}>
            Qo'shish
          </button>
          <h1>Pozitsiyalari </h1>
          <Table
            className="table"
            style={{ width: "800px" }}
            pagination={{ pageSize: 4 }}
            columns={columns5}
            dataSource={fueldata5}
          />

          <div className="postpozitsiyaoyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => postpozitsiyaoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Pozitsiyalari </p>
                <select
                  onChange={(e) => setSelectPosition(e.target.value)}
                  onClick={() => testSseries()}
                  className="testSeri"
                >
                  <option></option>
                  {seria.map((item) => {
                    return (
                      <option value={item.model}>
                        (uz){item.name_uz} (ru){item.name_ru}
                      </option>
                    );
                  })}
                </select>
                <p>&nbsp;</p>
                <input
                  placeholder="uz"
                  className="postpozition"
                  type="text"
                  id="position_post_uz"
                />
                <input
                  placeholder="ru"
                  className="postpozition"
                  type="text"
                  id="position_post_ru"
                />
              </div>
              <div className="putbutton11div">
                <button onClick={() => postpozition()} className="putbutton11">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
          <div className="putpozitsiyaoyna">
            <div className="created">
              <AiOutlineClose
                onClick={() => putpozitsiyaoyna1()}
                className="close"
              />
              <div className="div10">
                <p>Pozitsiyalari almashtiring</p>
                <input
                  className="putozition"
                  placeholder={key4.name_uz}
                  type="text"
                  id="positon_put_uz"
                />
                <input
                  className="putozition"
                  placeholder={key4.name_ru}
                  type="text"
                  id="positon_put_ru"
                />
                <p>Seriyalari almashtiring</p>
                <select>
                  {fueldata4.map((item) => {
                    return (
                      <option value={item.id} className="putozition1">
                        {item.name_uz} {item.name_ru}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="putbutton11div">
                <button
                  onClick={() => putpozition(key4.id)}
                  className="putbutton11"
                >
                  O'zgartirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6-page */}

      <div className="house6">
        <button className="post11" onClick={() => postfillialoyna()}>
          Qo'shish
        </button>
        <h1>Fillial</h1>
        <Table
          className="table"
          style={{ width: "100%" }}
          pagination={{ pageSize: 5 }}
          columns={columns6}
          dataSource={fueldata6}
        />
      </div>
      <div className="postfillialoyna">
        <AiOutlineClose onClick={() => postfillialoyna1()} className="close1" />

        <div className="div20">
          <div>
            <div className="label">
              <label>
                <p>Name uz</p>
                <input id="branch_post_name_uz" className="nom" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Country uz</p>
                <input id="branch_post_country_uz" className="mamlakat" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Region uz</p>
                <input id="branch_post_region_uz" className="mintaqa" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>City uz</p>
                <input  id="branch_post_city_uz" className="shahar" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>District uz</p>
                <input id="branch_post_district_uz" className="tuman" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Street uz</p>
                <input id="branch_post_street_uz" className="kocha" type="text" />
              </label>
            </div>
          </div>
          <div>
            <div className="label">
              <label>
                <p>Name ru</p>
                <input id="branch_post_name_ru" className="nom" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Country ru</p>
                <input id="branch_post_country_ru" className="mamlakat" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Region ru</p>
                <input id="branch_post_region_ru" className="mintaqa" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>City ru</p>
                <input  id="branch_post_city_ru" className="shahar" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>District ru</p>
                <input id="branch_post_district_ru" className="tuman" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Street ru</p>
                <input id="branch_post_street_ru" className="kocha" type="text" />
              </label>
            </div>
          </div>
        </div>
        <button
          style={{ marginLeft: "81.5%", marginTop: "2%" }}
          className="putbutton"
          onClick={() => postfillial()}
        >
          Qo'shish
        </button>
      </div>
      <div className="putfillialoyna">
        <AiOutlineClose onClick={() => putfillialoyna1()} className="close1" />

        <div className="div20">
        <div>
            <div className="label">
              <label>
                <p>Name uz</p>
                <input id="branch_put_name_uz" className="nom" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Country uz</p>
                <input id="branch_put_country_uz" className="mamlakat" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Region uz</p>
                <input id="branch_put_region_uz" className="mintaqa" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>City uz</p>
                <input  id="branch_put_city_uz" className="shahar" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>District uz</p>
                <input id="branch_put_district_uz" className="tuman" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Street uz</p>
                <input id="branch_put_street_uz" className="kocha" type="text" />
              </label>
            </div>
          </div>
          <div>
            <div className="label">
              <label>
                <p>Name ru</p>
                <input id="branch_put_name_ru" className="nom" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Country ru</p>
                <input id="branch_put_country_ru" className="mamlakat" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Region ru</p>
                <input id="branch_put_region_ru" className="mintaqa" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>City ru</p>
                <input  id="branch_put_city_ru" className="shahar" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>District ru</p>
                <input id="branch_put_district_ru" className="tuman" type="text" />
              </label>
            </div>
            <div className="label">
              <label>
                <p>Street ru</p>
                <input id="branch_put_street_ru" className="kocha" type="text" />
              </label>
            </div>
          </div>
        </div>
        <button
          style={{ marginLeft: "81.5%", marginTop: "2%" }}
          className="putbutton"
          onClick={() => putfillial(key5.id)}
        >
          O'zgartirish
        </button>
      </div>
      <div className="house6">
        <button className="post11" onClick={() => postClickBlank()}>
          Qo'shish
        </button>
        <h1>Blank</h1>
        <Table
          className="table"
          style={{ width: "100%" }}
          pagination={{ pageSize: 5 }}
          columns={columns7}
          dataSource={blank}
        />
      </div>
      <div className="putBlank">
        <AiOutlineClose onClick={() => putCloseBlank()} className="close1" />

        <div className="div20">
          <input id="put_blank_title"placeholder="title"/>
          <input id="put_blank_text" placeholder="text" />
        </div>
        <button
          style={{ marginLeft: "81.5%", marginTop: "2%" }}
          className="putbutton"
          onClick={() => putBlank()}
        >
          Qo'shish
        </button>
      </div>
      <div className="postBlank">
        <AiOutlineClose onClick={() => postCloseBlank()} className="close1" />

        <div className="div20">
          <input id="post_blank_title"/>
          <input id="post_blank_text" />
        </div>
        <button
          style={{ marginLeft: "81.5%", marginTop: "2%" }}
          className="putbutton"
          onClick={() => postBlank()}
        >
          Qo'shish
        </button>
      </div>
    </div>
  );
}
