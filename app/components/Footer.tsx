import React from 'react'

export default function Footer() {
  return (
    <footer className='flex px-20 justify-end'>
      <div className='flex flex-col items-end justify-between h-24'>
        <p className='text-slate-600'>Credits: photos from <span className='underline'>Unsplash.com</span>, icons from <span className='underline'>Icons8, </span>graphics from <span className='underline'>craftwork.design</span>.</p>
        <p className='font-medium'>Made with ✨❤️ at nFactorial in 2022.</p>
      </div>
    </footer>
  )
}
