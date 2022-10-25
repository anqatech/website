import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>
                    75% of fleet managers rely on fleet management software
                </h2>
                <p className='text-3xl py-6 text-gray-500 text-left'>
                    Managing a fleet of vehicles can be challenging, no matter the fleet size. 
                    That's why over 75% of fleet managers rely on fleet management software or 
                    vehicle telmatics to help support day-to-day operations
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-2xl font-bold text-indigo-600'>Fleet Tracking</p>
                    <p className='text-gray-400 mt-2 px-2 text-left'>
                        To ensure driver safety, fleet managers need to know exactly where 
                        individual vehicles are at any given time
                    </p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-2xl font-bold text-indigo-600'>Total Cost Reduction</p>
                    <p className='text-gray-400 mt-2 px-2 text-left'>
                        Whether it's fuel management or lowering operating costs, fleet managers 
                        are expected to identify and weed out any unnecessary expenses
                    </p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-2xl font-bold text-indigo-600'>Vehicle Utilization Forecast</p>
                    <p className='text-gray-400 mt-2 px-2 text-left'>
                        Correctly understanding and forecasting fleet vehicle utilization is paramount 
                        for optimal resource allocation across geography
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
