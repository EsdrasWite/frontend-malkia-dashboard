import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Axios from "../../services/caller.service";
import { useMemo } from "react";
 
const Card = ({ type }) => {

  const [error, setError] = React.useState(false);

  const [lastValue, setLastValue] = React.useState({ temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 4 });

  React.useEffect(() => {

    setInterval(() => {
      Axios.get(`/infopotfleur`)
        .then(response => {
          if (response.data.data.length > 1) setLastValue(response.data.data[response.data.data.length - 1]);
          else setLastValue(current => ({ ...current }))
        })
        .catch(error => console.log(error))

    }, 1000);

  }, [])


  console.log("CARD_1")
  //temporary

  var data;
  const diff = 20;


  const { temperatureamb, humiditeeamb, humiditeesol, niveauciterne } = lastValue;

  const niveau = useMemo(() => {
    if (niveauciterne < 3) setError(true);
    else setError(false);
    return niveauciterne;
  }, [niveauciterne])

  switch (type) {

    case "humiditeSol":
      data = {
        title: "Humidite du sol",
        isError: false,
        isMoney: false,
        link: "Pourcentage",
        toLink: "users",
        amount: !!(humiditeesol) ? (humiditeesol).toFixed(2) : 0,
        icon: (
          <AcUnit
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "temperatureAmbiante":
      data = {
        title: "Température ambiante",
        isError: false,
        isMoney: false,
        link: "En degré celcius",
        toLink: "trips",
        amount: temperatureamb ? ((temperatureamb)).toFixed(2) : 0,
        icon: (
          <Thermostat
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "humiditeAmbiante":
      data = {
        title: "Humidite ambiante",
        isError: false,
        isMoney: false,
        link: "Pourcentage",
        toLink: "questions",
        amount: humiditeeamb ? ((humiditeeamb)).toFixed(2) : 0,
        icon: (
          <SevereCold
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "niveauEau":
      data = {
        title: "Niveau citerne d'eau",
        isError: error,
        isMoney: false,
        link: "Pourcentage",
        amount: niveau ? ((niveau)).toFixed(2) : 0,
        icon: (
          <LocalDrink
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  };


  return (
    <>
      <div className="widget">
        <div className="left" >
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {data.amount}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">{data.link}</span>
          </Link>
        </div>
        <div className="right">
          <div className={data.isError ? "percentage negative" : "percentage positive"}>
            {data.isError ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
            {diff} %
          </div>
          {data.icon}
        </div>
      </div>

      {data.isError && <span className="warning">Niveau citerne d'eau inférieur au seuil</span>}
      {/* <Notification error={error} setError={setError} errorMsg={errorMsg} setErrorMsg={setErrorMsg} /> */}

    </>
  );
};

export default React.memo(Card);
