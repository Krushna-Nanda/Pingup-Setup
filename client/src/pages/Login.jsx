import React from 'react'
import { assets } from '../assets/assets'
import { Star, Zap } from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'
import TypeWriter from '../components/TypeWriter'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 relative overflow-hidden'>
      {/* Background Image - Full Coverage */}
      <img src={assets.bgImage} alt="" className='absolute top-0 left-0 w-full h-full object-cover opacity-35'/>

      {/* Left side : Branding  */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 relative z-10'>
        <img src={assets.logo} alt="Logo" className='h-12 object-contain'/>
        <div>
            <div className='flex items-center gap-3 mb-4 max-md:mt-10'> 
                <img src={assets.group_users} alt="Users" className='h-8 md:h-10'/>
                <div>
                    <div className='flex'>
                        {Array(5).fill(0).map((_, i)=>(<Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
                    </div>
                    <p className='text-gray-700 dark:text-gray-300 text-sm'>Used by 10k+ developers</p>
                </div>
            </div>
            <h1 className='text-3xl md:text-6xl md:pb-2 font-bold'>
              <span className='bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent dark:from-indigo-400 dark:to-indigo-300'>Build. Code. </span>
              <TypeWriter text="Collaborate." speed={100} className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400'/>
            </h1>
            <div className='mt-6 md:mt-8 flex items-start gap-3'>
              <Zap className='size-6 md:size-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1'/>
              <p className='text-lg md:text-2xl font-semibold bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-gray-200 dark:via-indigo-300 dark:to-purple-300 max-w-lg leading-relaxed'>
                Where tech enthusiasts connect and innovate together
              </p>
            </div>
        </div>
        <span className='md:h-10'></span>
      </div>

      {/* Right side: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10'>
            <SignIn />
      </div>
    </div>
  )
}

export default Login
