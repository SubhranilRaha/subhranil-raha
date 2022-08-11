import React,{useState} from 'react'

import imghtml from './icons8-html-5.svg'
import imgcss from './icons8-css3.svg'
import imgjs from './icons8-javascript.svg'
import imgbtstrp from './icons8-bootstrap.svg'
import imgtailwind from './tailwind.png'
import imgreact from './icons8-react.svg'
import imgflutter from './icons8-flutter.svg'
    

const Skills=()=> {


    const  [toggle, setToggle]=useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
    const  [toggle2, setToggle2]=useState(true)
    const handleClick2 = () => {
        setToggle2(!toggle2)
    }

  return (
    
        <div className="pt-8 pb-14 mb-4 mx-14" id="skills">  
        <div className="flex flex-row justify-center text-5xl font-dm">    
                <h1 className="scaleffecty">S</h1>
                <h1 className="scaleffectx">K</h1>
                <h1 className="scaleffecty">I</h1>
                <h1 className="scaleffectx">L</h1>
                <h1 className="scaleffectx">L</h1>
                <h1 className="scaleffecty">S</h1>
        </div>    
        <span className="text-l">My Tech Stack</span>
        <div className='pt-10 text-2xl'>
        {/* Skill FrontEnd */}
        
        <div onClick={handleClick}  className="flex justify-between cursor-pointer">
            <div className="flex flex-row py-2">
            <i class="uil uil-brackets-curly text-vt-first"></i>
            <h2 className="mr-2 pl-2">FrontEnd Development</h2>
            </div>
            <i style={{ transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)' }} class="uil uil-angle-down text-3xl text-vt-first "></i>                                  
        </div>
        
        <div style={{ display: toggle ? 'block' : 'none' }}>
        <div className='flex flex-wrap'  >
        <Skill 
        img={imghtml}
        txt="HTML"
        />
        <Skill 
        img={imgcss}
        txt="CSS"
        />
        <Skill 
        img={imgjs}
        txt="JavaScript"
        />
        <Skill 
        img={imgbtstrp}
        txt="BootStrap"
        />
        <Skill 
        img={imgtailwind}
        txt="Tailwind"
        />
        <Skill 
        img={imgreact}
        txt="REACT"
        />
        </div>
        </div>
        
        <div>
        {/* Skill BackEnd */}
        <div className="flex justify-between">
            <div className="flex flex-row py-2">
            <i class="uil uil-server-network text-2xl text-vt-first"></i>
            <h2 className="mr-2 pl-2">BackEnd Development</h2>
            </div>
            <i class="uil uil-angle-down text-3xl text-vt-first"></i>             
        </div>
        {/* Skill Application */}         
        <div onClick={handleClick2} className="flex justify-between cursor-pointer">
            <div className="flex flex-row py-2">
            <i class="uil uil-mobile-vibrate text-2xl text-vt-first"></i>
            <h2 className="mr-2 pl-2">Application Development</h2>
            </div>           
            <i style={{ transform: toggle2 ? 'rotate(180deg)' : 'rotate(0deg)' }} class="uil uil-angle-down text-3xl text-vt-first"></i>             
        </div>
        <div style={{ display: toggle2 ? 'block' : 'none' }}>
            <Skill 
            img={imgflutter}
            txt="Flutter"
            />
        </div>
        {/* Skill BlockChain */}
        <div className="flex justify-between">
            <div className="flex flex-row py-2">
            <i class="uil uil-link-alt text-2xl text-vt-first"></i>
            <h2 className="mr-2 pl-2">BlockChain Development</h2>
            </div>
            <i class="uil uil-angle-down text-3xl text-vt-first"></i>             
        </div>
        {/* Skill Graphics  */}
        <div className="flex justify-between">
            <div className="flex flex-row py-2">
            <i class="uil uil-paint-tool text-2xl text-vt-first"></i>
            <h2 className="mr-2 pl-2">Graphics Designing</h2>
            </div>
            <i class="uil uil-angle-down text-3xl text-vt-first"></i>             
        </div>
        </div>
        </div>
        </div>
        
    
  )
}

function Skill(props){
    return(
        <div className='m-2 w-40 flex flex-row items-center bg-vt-body rounded-lg scalelarge'>
            <img className='h-10 w-10 mx-2 py-1' src={props.img} alt="" />
            <h3 className='text-sm font-dm' >{props.txt}</h3>
        </div>
    )
}

export default Skills
