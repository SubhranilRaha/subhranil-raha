import React from 'react'

const Qualification = () => {
  return (
    <div className='m-14' id='qualifications'>
        <h1 className="text-4xl font-dm">Qualification</h1>
        <span className='text-lg font-pop'>My personal journey</span>
        <div className='flex flex-row justify-center mt-8 mb-8 text-vt-txtLight font-pop text-lg '>
            <div className='flex flex-row mr-4 mb-4 hover:text-vt-alt cursor-pointer'>
            <i class="uil uil-suitcase"></i>
            <h1 className='pr-14'>Development</h1>
            </div>
            <div className='flex flex-row ml-4 hover:text-vt-alt cursor-pointer'>
            <i class="uil uil-graduation-cap pl-10"></i>
            <h1 >Education</h1>
            </div>
        </div>
        <div className='grid grid-cols-3'>
        <Qual className=''
        sub='Flutte Development'
        uni='Angela Yu Bootcamp'
        date='2020 - 2021'
        ></Qual>
        <Line className=''></Line>
        <Empty className=''></Empty>
        <Empty className=''></Empty> 
        <Line className=''></Line>
        <Edu className=''
        sub='School'
        uni='Adamas International School'
        date='2005 - 2020'
        ></Edu>
        <Qual 
        sub='Web Development'
        uni='Angela Yu Bootcamp'
        date='2021 - 2022'
        ></Qual>
        <Line className=''></Line>
        <Empty></Empty>        
        <Empty></Empty>
        <Line className=''></Line>
        <Edu 
        sub='College(CSE)'
        uni='Heritage Institute of Technology'
        date='2020 - 2024'
        ></Edu>
        <Qual 
        sub='BlockChain Development'
        uni='CodeDamn Course'
        date='2022 - 2023'
        ></Qual>
        <div className='flex flex-col items-center' >
        <span className='inline-block h-3 w-3 bg-vt-first rounded-full'></span>
        </div>
          
        </div>
    </div>

  )
}

function Qual(props){
    return(
            <div>
            <h1 className='flex justify-center text-xl font-dm'>{props.sub}</h1>
            <h2 className='flex justify-center mb-2'>{props.uni}</h2>
            <div className='flex flex-row justify-center'>
            <i class="uil uil-calendar-alt mr-1 text-vt-txt"></i>
            <h2 class="text-vt-txtLight">{props.date}</h2>
            </div>
            </div>                  
    )
}
function Edu(props){
    return(          
            <div>
            <h1 className='flex justify-center text-xl font-dm'>{props.sub}</h1>
            <h2 className='flex justify-center mb-2'>{props.uni}</h2>
            <div className='flex flex-row justify-center'>
            <i class="uil uil-calendar-alt mr-1 text-vt-txt"></i>
            <h2 class="text-vt-txtLight">{props.date}</h2>
            </div>
            </div>                  
    )
}
function Empty(){
    return(
        <div>           
        </div>
    )
}
function Line(){
    return(
        <div className='flex flex-col items-center'>   
            <span className='inline-block h-3 w-3 bg-vt-first rounded-full'></span>    
            <span className='block p-0 m-0 w-px h-full bg-vt-first '></span> 
        </div>
    )
}


export default Qualification