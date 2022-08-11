import React from 'react'

const Contact = () => {
  return (
    <section className='m-14 mb-14' id="contact">
        <h1 className='text-4xl font-dm '>Contact Me</h1>
        <h2 className='text-lg font-pop mb-10'>Get in touch</h2>
        <Disp icon={<i class="uil uil-phone"></i>} head='CALL ME' sub='9163544240'></Disp>
        <Disp icon={<i class="uil uil-envelope"></i>} head='EMAIL' sub='subhranilu@gmail.com'></Disp>
        <Disp icon={<i class="uil uil-map-marker"></i>} head='LOCATION' sub='Kolkata-West Bengal-India'></Disp>
        <form action="" className='form'>
            <div className="inputs">
            <div className='content'>
                <div className='flex flex-row justify-start pl-2'>
                <label htmlFor="" className='label' >Name :</label>
                </div>
                <input type="text" className='input'/>
            </div>
            <div className='content'>
            <div className='flex flex-row justify-start pl-2'>
                <label htmlFor="" className='label' >Email :</label>
            </div>
                <input type="text" className='input'/>
            </div >
            <div className='content'>
            <div className='flex flex-row justify-start pl-2'>
                <label htmlFor="" className='label' >Project :</label>
            </div>
                <input type="text" className='input'/>
            </div>
            <div className='content'>
            <div className='flex flex-row justify-start pl-2'>
                <label htmlFor="" className='label' >Message :</label>
            </div>
                <textarea name="" id="" cols="0" rows="7" className='input'></textarea>
            </div>
            <div className='mt-10'>
                <a href="#ab" className=' button py-3'>
                    Send Message
                    <i class="uil uil-message"></i>
                </a>
            </div>
            </div>
        </form>
    </section>
  )
}


const Disp = (props) => {
  return (
    <div className='flex flex-row mb-4'>
        <h1 className='text-3xl text-vt-first pr-4'>{props.icon}</h1>
        <div className='flex flex-col'>
            <div className="flex justify-start">
            <h1 className='text-xl font-pop font-semibold '>{props.head}</h1>
            </div>
            <div className="flex justify-start">
            <h2 className='text-sm text-vt-txtLight'>{props.sub}</h2>
            </div>           
        </div>
    </div>
  )
}



export default Contact