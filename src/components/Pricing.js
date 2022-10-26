import React from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your fleet management.</h3>
          <p className='text-3xl px-10'>
            Centralise data from all of your operations onto a single consolidated platform and get a 
            clear view of performance
          </p>
        </div>

        <div className='grid md:grid-cols-2 place-items-center'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative w-3/4'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-4xl font-bold py-2 flex'>$699<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-2 text-[#5fcba9] text-center'>AI Fleet Manager</p>
            <div className='text-xl'>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Routing & Dispatch</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Driver Coaching</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Equipment Tracking</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Preventative Maintenance</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Streamlined Administration</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Pre-built Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-white'  />Utilization Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-white'  />Fuel Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-white'  />Safety Scorecards</p>
                <button className='w-full py-4 my-4'>Book A Call</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative w-3/4'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-4xl font-bold py-2 flex'>$999<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-2 text-[#5fcba9] text-center'>In-house Fleet Manager</p>
            <div className='text-xl'>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Routing & Dispatch</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Driver Coaching</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Equipment Tracking</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Preventative Maintenance</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Streamlined Administration</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Pre-built Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Utilization Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Fuel Report</p>
                <p className='flex py-1'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Safety Scorecards</p>
                <button className='w-full py-4 my-4'>Book A Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
