import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = ({dataTable})=> {
  const data = [
    {
      name: '',
      Niveau_Citerne_Eau: !!(dataTable[0].niveauciterne) ? (dataTable[0].niveauciterne)+(Math.random()*2) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Niveau_Citerne_Eau: !!(dataTable[1].niveauciterne) ? (dataTable[1].niveauciterne)+(Math.random()*2) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Niveau_Citerne_Eau: !!(dataTable[2].niveauciterne) ? (dataTable[2].niveauciterne)+(Math.random()*2) : 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Niveau_Citerne_Eau: !!(dataTable[3].niveauciterne) ? (dataTable[3].niveauciterne)+(Math.random()*2) : 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Niveau_Citerne_Eau: !!(dataTable[4].niveauciterne) ? (dataTable[4].niveauciterne)+(Math.random()*2) : 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Niveau_Citerne_Eau: !!(dataTable[5].niveauciterne) ? (dataTable[5].niveauciterne)+(Math.random()*2) : 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Niveau_Citerne_Eau: !!(dataTable[6].niveauciterne) ? (dataTable[6].niveauciterne)+(Math.random()*2) : 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Niveau_Citerne_Eau: !!(dataTable[7].niveauciterne) ?  (dataTable[7].niveauciterne)+(Math.random()*2) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Niveau_Citerne_Eau: !!(dataTable[8].niveauciterne) ? (dataTable[8].niveauciterne)+(Math.random()*2) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Niveau_Citerne_Eau: !!(dataTable[9].niveauciterne) ? (dataTable[9].niveauciterne)+(Math.random()*2) : 0,
      // pv: 98,
      // amt: 22,
    },
  
  ];
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
          <Area type="monotone" dataKey="Niveau_Citerne_Eau" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;

