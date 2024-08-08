import React from 'react'
import {Button} from './index'


function Container1() {
  return (
    <div className='pl-32 w-full flex items-center h-screen pt-20'>
        <div className='w-2/5'>
            <h1 className='text-6xl font-semibold'>Food Made With Love</h1>
            <p className='text-2xl my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus ab? Fugiat officiis, maiores est id cupiditate quis minus ea.</p>
            <Button/>
        </div>
        <div className=' w-1/2 ml-10'>
          <img className='w-full' src="/Images/HomeBurger.jpg"/>
        </div>
    </div>
  )
}

export default Container1