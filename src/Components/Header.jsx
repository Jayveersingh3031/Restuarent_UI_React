import React from "react"

function Header() {
  return (
    <div className='shadow p-8 flex justify-between w-screen fixed z-50 bg-white'>
      <div className="flex text-3xl">
        <h1 className='ml-2 font-extrabold'>Food</h1>
      </div>
      <div className="flex space-x-4 text-2xl" >
        <a href=""><h1>Home</h1></a>
        <a href=""><h1>Speciality</h1></a>
        <a href=""><h1>Popular</h1></a>
        <a href=""><h1>Gallery</h1></a>
        <a href=""> <h1>Review</h1></a>
        <a href=""><h1>Order</h1></a>
      </div>
    </div>
  )
}
export default Header