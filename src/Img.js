import React from 'react'
 function Img(props) {
  return (
    <div>
<img src={props.img} alt="mypic" className='card-img'/>
    </div>
  )
}
export default Img;