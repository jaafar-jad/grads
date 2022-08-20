import React from 'react'


import './Card-style.css';

const card=props => {
  return (
<div className='card text-center shadow'>
    <div className='overflow'>
        <img src={props.imgsrc} alt='jaf' className='card-img-top'/>
    </div>
    <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>lorem ipsun dolor sit amet consecteture ipisn elit</p>
       <button> <a href='#' className='btn btn-0utline-success'>Details</a></button>
    </div>
</div>
  )
}

export default card;