import React from 'react'
import Background from '../assets/images/library.avif'


const Home = () => {
  return (
    <div style ={{backgroundImage: `url(${Background})`}}
    className=' flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className="flex place-items-center h-screen">
        <h3 className="p-5 bg-black bg-opacity-75 font-serif text-2xl font-bold text-white ">I like big books and I cannot lie</h3>
      </div>
    </div>
  )
}

export default Home