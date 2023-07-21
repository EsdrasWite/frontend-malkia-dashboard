import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '',
    // uv: 40,
    // pv: 24,
    amt: 24,
  },
  {
    name: '1',
    // uv: 30,
    // pv: 13,
    amt: 22,
  },
  {
    name: '2',
    // uv: 20,
    // pv: 98,
    amt: 22,
  },
  {
    name: '3',
    // uv: 27,
    // pv: 39,
    amt: 20,
  },
  {
    name: '4',
    // uv: 18,
    // pv: 48,
    amt: 21,
  },
  {
    name: '5',
    // uv: 23,
    // pv: 38,
    amt: 25,
  },
  {
    name: '6',
    // uv: 34,
    // pv: 43,
    amt: 21,
  },
];

const Chart = ()=> {

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
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;

