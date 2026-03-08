import React from 'react'
import { assets } from '../assets/assets'
import { Star, Code2, Users, Zap, Sparkles } from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'
import { useTheme } from '../context/ThemeContext'

const Login = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse'></div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000'></div>
      </div>

      {/* Background Image Overlay */}
      {assets.bgImage && (
        <img src={assets.bgImage} alt="" className='absolute inset-0 w-full h-full object-cover opacity-5'/>
      )}

      {/* Left Side: Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-12 lg:pl-20 relative z-10'>
        
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img src={assets.logo} alt="PingUp" className='h-10 md:h-12 object-contain'/>
          <span className='text-white font-bold text-lg hidden sm:inline'>PingUp</span>
        </div>

        {/* Main Branding Content */}
        <div className='max-w-lg'>
          {/* Trust Badge */}
          <div className='flex items-center gap-3 mb-8'>
            <div className='flex'>
              {Array(5).fill(0).map((_, i)=>(
                <Star key={i} className='size-5 text-transparent fill-amber-400'/>
              ))}
            </div>
            <div>
              <p className='text-sm font-semibold text-amber-400'>Trusted by 10k+ Developers</p>
              <p className='text-xs text-gray-400'>From startups to enterprises</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className='mb-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-4'>
              Code. Connect. Collaborate.
            </h1>
            <p className='text-xl text-gray-300 max-w-xl leading-relaxed'>
              Where developers build meaningful connections through shared passion for technology and innovation.
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <div className='flex items-start gap-3'>
              <div className='p-2 bg-indigo-500/20 rounded-lg'>
                <Code2 className='w-5 h-5 text-indigo-400'/>
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Code Snippets</p>
                <p className='text-xs text-gray-400'>Share & explore</p>
              </div>
            </div>
            
            <div className='flex items-start gap-3'>
              <div className='p-2 bg-purple-500/20 rounded-lg'>
                <Users className='w-5 h-5 text-purple-400'/>
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Tech Community</p>
                <p className='text-xs text-gray-400'>Global network</p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <div className='p-2 bg-cyan-500/20 rounded-lg'>
                <Zap className='w-5 h-5 text-cyan-400'/>
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Instant Updates</p>
                <p className='text-xs text-gray-400'>Real-time feed</p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <div className='p-2 bg-pink-500/20 rounded-lg'>
                <Sparkles className='w-5 h-5 text-pink-400'/>
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Modern Design</p>
                <p className='text-xs text-gray-400'>Dark & light modes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='text-xs text-gray-500'>
          <p>© 2026 PingUp. Built for developers, by developers.</p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className='flex-1 flex flex-col items-center justify-center p-6 sm:p-10 relative z-10'>
        <div className='w-full max-w-md'>
          {/* Welcome Message */}
          <div className='mb-8 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>Welcome Back</h2>
            <p className='text-gray-300'>Sign in to connect with the tech community</p>
          </div>

          {/* Clerk SignIn Component */}
          <div className='bg-white dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden'>
            <SignIn 
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent border-none shadow-none px-6 py-8',
                }
              }}
            />
          </div>

          {/* Bottom Text */}
          <p className='text-center text-xs text-gray-400 mt-6'>
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
