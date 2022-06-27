import React from 'react';
import Cards from './Card';
import datas from './Data';
function App ()
{
  return <h1>{
    datas.map((val)=><Cards
    key={val.id}
    img={val.imgs}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />)
  }</h1>
}
export default App;