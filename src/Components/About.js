import React from 'react'
import Profile from './ProfileClass';
import Burger from '../Assets/burger.avif'
const About = () => {
  return (
    <>
    <div className='w-40 mx-auto mt-6'>
      <button className='bg-black text-xl text-white px-6 py-3 rounded-lg'>
        Profile
      </button>
    </div>
      <div className="w-full  flex flex-wrap justify-between items-center">
        <div className="ml-10">
          <h1 className="text-7xl font-bold">
            Welcome to <br /> The world of <br />{" "}
            <span className="bg-black text-white text-6xl px-2 rounded-lg">
              Tasty & Fresh Food
            </span>
          </h1>
          <h4 className="text-2xl text-gray-950 mt-5 italic">
            "Better you will feel if you eat a Food<span>Villa</span> healthy
            meal"
          </h4>
        </div>
        <div className="">
          <img className="w-[400px] rounded-md" src={Burger} alt="Food Image" />
        </div>
      </div>
    </>
  );
}

export default About;
