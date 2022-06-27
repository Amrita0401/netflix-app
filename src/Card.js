import React from 'react'
import './App.css'
import Img from './Img';
 function Cards(props) {
  return (
    // here we have get the props from App.js file
      <div className="cards" style={{display:'inline-block',boxSizing:"border-box"}}>
        <div className="crad glow"  >
    <Img img={props.img }   />
   <div className='card-info'>
      <h3><span className='card-category' style={{alignItems:"center"}}>{props.title}</span></h3>
       <h1 className='card-title' style={{alignContent:"center"}}>{props.sname}</h1>
    <a href={props.link} style={{textAlign:"center"}} target="-blank">
        <button>Watch Now</button>
    </a>
   </div>
   </div>
    </div>
  )
}
export default Cards;