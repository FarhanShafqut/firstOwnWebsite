'use client'
import Image from 'next/image'
import Button from './(components)/Button/page'
import Navbar from './(components)/navbar/page'
import MainCard from './(components)/mainCard/page'
import Carousel from './(components)/carousle/page'
import MoveCard from './(components)/MoveCard/pages'
import SliderPage from './(components)/MoveCard/pages'



export default function Home() {
  return (
    <div >
      <div className='max-w-full py-0 bg-grad  px-4 sm:py-0 bg-gradient-to-r from-blue-800 to-blue-600' >
        <Navbar/>
        <div className='max-w-[1220px] mx-auto' >
        <div className='max-w-2xl grid ' >
                      <h1 className='text-6xl font-semibold text-slate-50 leading-[70px] md:mt-28   '>Creative <br/> Digital Agency</h1>
                      <h1 className='text-sm my-3  text-slate-50 ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Ea eligendi nulla perferendis</h1>
                      <span className=' mt-3  mb-28' ><Button  txt='Learn More' /> </span>
                      </div>    
        </div>
        <div></div>
      </div>
      <span className='text-center space-y-5 ' >
        <h6 className=' mt-20 text-blue-600' >OUR SERVICES</h6>
        <h1 className='font-semibold text-2xl ' >We Are Providing Digital services</h1>
        </span>
        <div className='max-w-full py-0 px-4 sm:py-0 mt-14  '> 
        <div className='max-w-[1240px] grid grid-cols-1 sm:grid-cols-3  mx-auto  space-x-4 ' >
        <MainCard hid={'hidden'}/>
        <MainCard  source={'/webs.jpg'} txt={'Web Development'}/>
        <MainCard  source={'/webs.jpg'} txt={'GraphicDesign'}/>
        <MainCard  source={'/webs.jpg'} txt={'Digital Marketing'}/>
        </div>
        <Carousel source={'/bnda design .jpg'}/>
        </div>
        <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-300 bg-opacity-40   '> 
        <div className='max-w-[1240px] grid grid-cols-1  mx-auto   ' >
        <MoveCard card={<MainCard  source={'/webs.jpg'} txt={'Web Development'}/>}
        card2={ <MainCard  source={'/webs.jpg'} txt={'GraphicDesign'}/>}
        card3={<MainCard  source={'/webs.jpg'} txt={'Digital Marketing'}/>}/>
        </div>
        </div>
      
    </div>
  )
}
