'use client'

import Image from 'next/image'
import React from 'react'

export default function Section({position, style, src, alt, setSelectedPosition, closed}) {

  return (
    <div 
    onClick={() => setSelectedPosition(position)} 
    className={'h-full relative cursor-pointer transition-all duration-1000 ' + style.width}>
      {
        closed ? 
          <div className='transition-all duration-1000 text-3xl absolute flex items-center justify-center w-full h-full z-10 backdrop-blur-sm rounded-3xl	'>
            {
              position === 'first' ? <p>PG</p>
              : position === 'second' ? <p>SG</p>
              : position === 'third' ? <p>SF</p>
              : position === 'fourth' ? <p>PF</p>
              : <p>C</p>
            }
          </div>
        : <></>
      }
      <div className="absolute inset-0 overflow-hidden flex justify-end items-end">
        <Image 
        alt='' 
        src={src} 
        className='object-cover h-full transition-all duration-500 rounded-3xl'
        width={1280} 
        height={720} />
      </div>
      <h1 className={style.text + ' px-2 py-2 font-bold absolute bottom-0 left-0 text-sm md:text-4xl mb-4 ml-4 transition-all duration-200 whitespace-nowrap'}>
            {alt}
        </h1>
    </div>
  )
}
