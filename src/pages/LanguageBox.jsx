import React from "react";
import { Link } from "react-router-dom";
import './LanguageBox.css';

function LanguageBox(props){
    const bgcolor = props.bg===1?"#E7E9EB":props.bg===2?"white":"transparent";
    return(
        <div>
            <div className='flex flex-col justify-center items-center w-full p-24' style={{ backgroundColor: bgcolor }} >        
                <img className="h-[200px]" src={props.imgsrc} alt={props.alt}/>
                <h2 className='fontg text-8xl'>{props.alt}</h2>
                <Link to={props.link} >
                    <button className="fontBtn text-white bg-red-500 p-[15px] w-[300px] rounded-[25px] mt-[25px]">Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default LanguageBox;
