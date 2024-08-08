import React from 'react'

function Carddiv({src,text1,text2}) {
  return (
    <div className='text-2xl text-center font-semibold '>
      <div className='bg-red-500 w-52 h-52 rounded-full mb-5'>
        <img className="w-full" src={src} />
      </div>
      <h1 className='px-5'>{text1}</h1>
      <h1 className='px-5'>{text2}</h1>
    </div>
    
  )
}

export default Carddiv