import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Axios from '../../services/caller.service';

const Chart = ({dataTable}) => {


  const data = [
    {
      name: '',
      Humidite_sol: !!(dataTable[0].humiditeesol) ? (dataTable[0].humiditeesol) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Humidite_sol: !!(dataTable[1].humiditeesol) ? (dataTable[1].humiditeesol) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Humidite_sol: !!(dataTable[2].humiditeesol) ? (dataTable[2].humiditeesol) : 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Humidite_sol: !!(dataTable[3].humiditeesol) ? (dataTable[3].humiditeesol) : 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Humidite_sol: !!(dataTable[4].humiditeesol) ? (dataTable[4].humiditeesol) : 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Humidite_sol: !!(dataTable[5].humiditeesol) ? (dataTable[5].humiditeesol) : 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Humidite_sol: !!(dataTable[6].humiditeesol) ? (dataTable[6].humiditeesol) : 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Humidite_sol: !!(dataTable[7].humiditeesol) ?  (dataTable[7].humiditeesol) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Humidite_sol: !!(dataTable[8].humiditeesol) ? (dataTable[8].humiditeesol) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Humidite_sol: !!(dataTable[9].humiditeesol) ? (dataTable[9].humiditeesol): 0,
      // pv: 98,
      // amt: 22,
    },

  ];

  // React.useEffect(() => {

  //   setInterval(() => {
  //     Axios.get(`/infopotfleur`)
  //       .then(response => {
  //         setDataTable(response.data.data.slice(-10))
  //       })
  //       .catch(error => console.log(error))

  //   }, 1000);

  // }, [])

  return (
    <ResponsiveContainer width="99%" height={300}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Humidite_sol" stackId="1" stroke="#CE1D1D" fill="#F5D2D2" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );

}

export default Chart;
