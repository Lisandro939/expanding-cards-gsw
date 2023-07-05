'use client'

import Section from '@/components/Section'
import React, {useState} from 'react'

export default function Page() {

  const opened = {
    width: 'h-full w-full rounded-lg',
    text: 'text-black font-bold absolute bottom-0 left-0 text-4xl mb-4 ml-4 transition-all duration-200 whitespace-nowrap w-fit h-fit bg-white bg-opacity-25 rounded-full',
    closed: false
  }

  const closed = {
    width: 'w-full h-20 md:h-full md:w-[80px] rounded-3xl',
    text: 'text-transparent ',
    closed: true
  }

  const [first, setFirst] = useState(opened)
  const [second, setSecond] = useState(closed)
  const [third, setThird] = useState(closed)
  const [fourth, setFourth] = useState(closed)
  const [fifth, setFifth] = useState(closed)

  const setSelectedPosition = (position) => {
    if (position === 'first') {
      setFirst(opened)
      setSecond(closed)
      setThird(closed)
      setFourth(closed)
      setFifth(closed)
    } else if (position === 'second') {
      setFirst(closed)
      setSecond(opened)
      setThird(closed)
      setFourth(closed)
      setFifth(closed)
    } else if (position === 'third') {
      setFirst(closed)
      setSecond(closed)
      setThird(opened)
      setFourth(closed)
      setFifth(closed)
    } else if (position === 'fourth') {
      setFirst(closed)
      setSecond(closed)
      setThird(closed)
      setFourth(opened)
      setFifth(closed)
    } else if (position === 'fifth') {
      setFirst(closed)
      setSecond(closed)
      setThird(closed)
      setFourth(closed)
      setFifth(opened)
    }
  }

  return (
    <div className='flex flex-col items-center pt-2 h-screen overflow-x-hidden'>
      <h1 className='text-xs md:text-3xl'>
        STARTING LINEUP GOLDEN STATE WARRIORS 2023-2024
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-2 md:px-20 h-full w-screen'>
        <Section 
        position={'first'} 
        style={first}
        alt='Stephen Curry' 
        src='/images/Stephen-Curry.jpg' 
        setSelectedPosition={setSelectedPosition}
        closed={first.closed}
        />
        <Section 
        position={'second'} 
        style={second}
        alt='Klay Thompson' 
        src='/images/Klay-Thompson.jpg' 
        setSelectedPosition={setSelectedPosition}
        closed={second.closed}
        />
        <Section 
        position={'third'} 
        style={third}
        alt='Andrew Wiggins' 
        src='/images/Andrew-Wiggins.jpg'
        setSelectedPosition={setSelectedPosition}
        closed={third.closed}
        />
        <Section 
        position={'fourth'} 
        style={fourth}
        alt='Draymond Green' 
        src='/images/Draymond-Green.jpg' 
        setSelectedPosition={setSelectedPosition}
        closed={fourth.closed}
        />
        <Section 
        position={'fifth'} 
        style={fifth}
        alt='Kevon Looney' 
        src='/images/Kevon-Looney.jpg' 
        setSelectedPosition={setSelectedPosition}
        closed={fifth.closed}
        />
      </div>
    </div>
    
  )
}
