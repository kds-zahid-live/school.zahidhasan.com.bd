import React from 'react';
import Hero from './Hero';
import LanguageBox from './LanguageBox';
// img
import Htmlimg from './img/hero/html.webp';
import Cssimg from './img/hero/css3d.png';
import Javascriptimg from './img/hero/javascript3d.png';
import Typescriptimg from './img/hero/typescript.png';
import Javaimg from './img/hero/java.png';
import Unrealimg from './img/hero/unreal-engine.png';
import MysqlImg from './img/hero/mysql.png';
import FlutterImg from './img/hero/flutter.png';
import Flutter2Img from './img/hero/flutter2.png';
import MongodbImg from './img/hero/mongo-db.png';
import kritaImg from './img/hero/krita.png';


function Homepage(){
    return(
        <div className='bg-white rounded-3xl text-black w-full min-h-[80vh] font-sfpro'>
            <Hero />
            <LanguageBox link="/html" alt="HTML" bg={1} imgsrc={Htmlimg} />
            <LanguageBox link="/css" alt="CSS" bg={2} imgsrc={Cssimg} />
            <LanguageBox link="/javascript" alt="Javascript" bg={1} imgsrc={Javascriptimg} />
            <LanguageBox link="/java" alt="Java" bg={2} imgsrc={Javaimg} />
            <LanguageBox link="/typescript" alt="TypeScript" bg={1} imgsrc={Typescriptimg} />
            <LanguageBox link="/mysql" alt="MySQL" bg={2} imgsrc={MysqlImg} />
            <LanguageBox link="/flutter" alt="Flutter" bg={1} imgsrc={FlutterImg} />
            <LanguageBox link="/unreal" alt="Unreal Engine" bg={2} imgsrc={Unrealimg} />
            <LanguageBox link="/mongodb" alt="Mongo DB" bg={1} imgsrc={MongodbImg} />
            <LanguageBox link="/krita" alt="Krita" bg={2} imgsrc={kritaImg} />



            
        </div>
    )
}
export default Homepage;