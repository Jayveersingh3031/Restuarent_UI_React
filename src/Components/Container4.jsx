import React from 'react'
import {Carddiv} from './index'
function Container4() {
  return (
    <div className='px-32 pt-10'>
        <h1 className='text-center text-3xl font-extrabold'>How it <span className='text-orange-500'> Works</span></h1>
        <div className='flex justify-between pt-10 px-10'>
          <Carddiv src="../Images/DivPNG/food.png" text1="Choose Your" text2="Favorite Food"/>
          <Carddiv src="../Images/DivPNG/delivery.png" text1="Free And" text2="Fast Delivery"/>
          <Carddiv src="../Images/DivPNG/pay.png" text1="Easy Payment" text2="Mode"/>
          <Carddiv src="../Images/DivPNG/eating.png" text1="And Finally, Enjoy" text2="Your Food"/>
        </div>
    </div>
  )
}

export default Container4