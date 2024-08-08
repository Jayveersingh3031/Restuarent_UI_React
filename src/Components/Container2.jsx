import React from 'react'
import {Card1} from './index'

function Container2() {
  return (
    <div className='pl-32'>
        <h1 className='text-3xl text-center mb-8 font-extrabold'>Our <span className='text-orange-500'>Special</span> Dishes </h1>
        <div className='flex gap-12 flex-wrap '>
          <Card1 src="../Images/cardno.1/Image/Burger.jpg" png="../Images/cardno.1/PNG/burger.png" text="Tasty Burger"/>
          <Card1 src="../Images/cardno.1/Image/Pizza.jpg" png="../Images/cardno.1/PNG/pizza.png" text="Tasty Pizza"/>
          <Card1 src="../Images/cardno.1/Image/Ice-Cream.jpg" png="../Images/cardno.1/PNG/ice-cream.png" text="Cold Ice-Cream"/>
          <Card1 src="../Images/cardno.1/Image/drink.jpg " png="../Images/cardno.1/PNG/cold-drink.png" text="Cold Drink"/>
          <Card1 src="../Images/cardno.1/Image/Cake.jpg" png="../Images/cardno.1/PNG/cake.png" text="Tasty Sweets"/>
          <Card1 src="../Images/cardno.1/Image/Breakfast.jpg" png="../Images/cardno.1/PNG/tea-cup.png" text="Healthy Breakfast"/>
        </div>
    </div>
  )
}

export default Container2