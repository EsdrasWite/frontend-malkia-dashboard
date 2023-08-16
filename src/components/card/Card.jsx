import React, { useEffect, useState } from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Axios from "../../services/caller.service";

const Card = ({ type }) => {

  const [lastValue, setLastValue] = React.useState({});

  React.useEffect(() => {

    setInterval(() => {
      Axios.get(`/infopotfleur`)
        .then(response => {
          setLastValue(response.data.data[response.data.data.length - 1])
        })
        .catch(error => console.log(error))

    }, 1000);

  }, [])


  console.log("CARD_1")
  //temporary

  var data;
  const amount = 100;
  const diff = 20;


  const { temperatureamb, humiditeeamb, humiditeesol, niveauciterne } = lastValue;

  switch (type) {

    case "humiditeSol":
      data = {
        title: "Humidite du sol",
        isMoney: false,
        link: "Pourcentage",
        toLink: "users",
        amount: !!(humiditeesol) ? ((humiditeesol) + (Math.random() * 1)).toFixed(2) : 0,
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
        isMoney: false,
        link: "En degré celcius",
        toLink: "trips",
        amount: temperatureamb ? ((temperatureamb) + (Math.random() * 1)).toFixed(2) : 0,
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
        isMoney: false,
        link: "Pourcentage",
        toLink: "questions",
        amount: humiditeeamb ? ((humiditeeamb) + (Math.random() * 1)).toFixed(2) : 0,
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
        isMoney: false,
        link: "Pourcentage",
        amount: niveauciterne ? ((niveauciterne) + (Math.random() * 1)).toFixed(2) : 0,
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
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <Link style={{ textDecoration: 'none' }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default React.memo(Card);
