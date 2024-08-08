import React from 'react'

function Card1({src,png,text}) {
  return (
    <div id='card1' className='h-64 w-96 bg-slate-100 relative overflow-hidden hover:cursor-pointer'>
        <img id='img' className="w-full h-full absolute -top-full" src={src}/>
        <div className='text-center p-5'>
          <img className='w-14 ml-36'src={png}/>
          <h1 className='text-3xl my-4 font-semibold'>{text}</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Deserunt, inventore ad!</p>
        </div>
    </div>
  )
}

export default Card1
