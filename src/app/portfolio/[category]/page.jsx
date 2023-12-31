import React from 'react'
import Image from 'next/image';
import Button from '@/components/button/Button';
import {Collection} from "./data"
import {notFound} from "next/navigation"

const getData = (cat)=>{
  const catData = Collection[cat];
  if(catData) return catData
  else return notFound();
}

const Category = ({params}) => {

  const data = getData(params.category)
  // console.log(params);
  return (
    <div>
      <h1 className='text-center md:text-left font-bold text-2xl text-green-400 mb-6'>{params.category}</h1>
      {data.map((item)=>(
              <div key={item.id} className='flex gap-5 items-center flex-col-reverse md:flex-row md:odd:flex-row-reverse md:pb-10'>
              <div className={`left basis-1/2 ${(item.id)%2 !== 0? "mr-auto": ""}`}>
                <h1 className='text-xl md:text-3xl font-bold mb-5 text-center md:text-left'>{item.title}</h1>
                <p className='mb-5'>{item.desc}</p>
                <div className='mb-6'>
                <Button url="/" text="See More"/>
                </div>
              </div>
              <div className={`right h-[380px] w-[300px] md:h-[400px] md:w-[550px] relative ${(item.id)%2 == 0? "mr-auto": ""}`}>
                <Image src={item.image} alt='' fill={true} className='object-cover rounded-md'/>
              </div>
            </div>
      ))}

    </div>
  )
}

export default Category;