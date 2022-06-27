import React from 'react'
import datas from './data'
import Cards from './Cards'
function Netflix() {
  return (
    <div>
    <Cards
      key={datas[1].id}
      img={datas[1].imgs}
      title={datas[1].title}
      sname={datas[1].sname}
      link={datas[1].link}
    />
    </div>
  )
}
export default Netflix;