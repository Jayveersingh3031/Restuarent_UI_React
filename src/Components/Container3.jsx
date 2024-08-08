import React from 'react'
import {Card2} from './index'

function Container3() {
  return (
    <div className='pt-10 px-32'>
        <h1 className='text-3xl text-center mb-10 font-extrabold'>Most <span className='text-orange-500'>Popular</span> Foods</h1>
        <div className='flex flex-wrap gap-12'>
            <Card2 src="../Images/Cardno.2/Burger.jpg" text="Tasty Burger"/>
            <Card2 src="../Images/Cardno.2/Cold-drink.jpg" text="Cold Drinks"/>
            <Card2 src="../Images/Cardno.2/dosa.jpg" text="Healthy Dosa"/>
            <Card2 src="../Images/Cardno.2/Ice-Cream.jpg" text="Cold Ice-Cream"/>
            <Card2 src="../Images/Cardno.2/Pizza.jpg" text="Tasty Pizza"/>
            <Card2 src="../Images/Cardno.2/Sweet.jpg" text="Tasty Sweet"/>
        </div>
    </div>
  )
}

export default Container3