import React from 'react'
import {Card3} from './index'

function Container5() {
  return (
    <div className='px-32'>
      <h1 className='pt-10 text-center text-3xl font-extrabold mb-5'>Our <span className='text-orange-500'>Food</span> Gallery</h1>
      <div className='flex gap-12 flex-wrap'>
        <Card3 src="../Images/Cardno.3/burger.jpg"/>
        <Card3 src="../Images/Cardno.3/cupcake.jpg"/>
        <Card3 src="../Images/Cardno.3/ice-cream.jpg"/>
        <Card3 src="../Images/Cardno.3/momos.jpg"/>
        <Card3 src="../Images/Cardno.3/pizza.jpg"/>
        <Card3 src="../Images/Cardno.3/samosa.jpg"/>
        <Card3 src="../Images/Cardno.3/snacks.jpg"/>
        <Card3 src="../Images/Cardno.3/sandwich.jpg"/>
        <Card3 src="../Images/Cardno.3/sweet.jpg"/>
       
      </div>
    </div>
  )
}

export default Container5