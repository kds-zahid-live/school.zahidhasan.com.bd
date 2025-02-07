import React from 'react';
import logofav from '../logo-fav.svg'; 
import './LanguageBox.css';

function Hero(){
    return(
        <div className='flex flex-col justify-center items-center '>
            {/* hero ------------ */}
            {/* sm:bg-red-700 md:bg-green-700 lg:bg-blue-700  */}
            <div className='bg-white min-h-screen font-sfpro'>
                <div className="font-sf-pro-rounded flex justify-center items-center pt-12 pb-12" >
                    <img className="Animate-logo w-[257px] sm:w-[357px] md:w-[377px] lg:w-[407px] mr-2.5 z-[9999]" src={logofav} alt="Zj"/>
                    <div className="relative text-white text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] leading-[155px] font-extrabold font-sfpro">
                        <span className="absolute top-0 left-0 w-full h-full text-white animate-rotate-shadow">
                            School
                        </span>
                        School
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='fontHeading text-2xl sm:text-4xl md:text-6xl lg:text-8xl my-5 font-bold'>Welcome to Zj School</h1>
                    <p className='fontSubHeading text-1xl sm:text-2xl md:text-3xl lg:text-4xl'>Learn Html, CSS, JavaScript, PHP, Python,,,.</p>
                </div>
            </div>            
        </div>
    )
}
export default Hero;