import React from 'react'
import Button from './Button'

function Card2({src,text}) {
  return (
    <div className='bg-slate-200 w-96 p-7 text-center'>
        <img className='h-60 w-80' src={src} />
        <h1 className='text-3xl my-3 font-semibold'>{text}</h1>
        <div className='flex ml-20 mb-5 w-8 h-8'>
            <img  src="../Images/Cardno.2/star.png"/>
            <img  src="../Images/Cardno.2/star.png"/>
            <img  src="../Images/Cardno.2/star.png"/>
            <img  src="../Images/Cardno.2/star.png"/>
            <img  src="../Images/Cardno.2/Notstar.png"/>
        </div>
        <div className='ml-24'>
          <Button/>
        </div>
    </div>
  )
} 

export default Card2