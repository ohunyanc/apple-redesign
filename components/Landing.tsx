import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-green-700 to-violet-700 bg-clip-text text-transparent'>
                    Powered
                </span>
                <span className="block">By Intellect</span>
                <span className="block">Driven By Values</span>
            </h1>

            <div className='space-x-4'>
              <Button title='Buy Now'/>
              <a className='link'>Learn More</a>
            </div>
        </div>

        <div className='relative invisible h-[450px] w-[450px] transition-all duration-500 md:visible lg:h-[500px] lg:w-[450px]'>
          <Image src='/iphone.png' layout='fill' objectFit='contain' priority={true}/>
        </div>
    </section>
  )
}

export default Landing