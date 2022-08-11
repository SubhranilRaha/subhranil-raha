/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import img from './pic.jpg'
import Typical from 'react-typical'
function Home() {

   

  return (
    <div>
        <section className="" id="home">
            <div className="">
                <div className="">
                    <div className="mt-6 mx-14 flex flex-row justify-between">
                     <div className=" flex flex-col justify-center text-vt-first text-2xl">
                        <a href="https://www.linkedin.com/in/subhranil-raha-8139981b3/" target='_blank' className="my-4 scalelarge hover:text-vt-alt">
                        <i class="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://twitter.com/SubhranilRaha" target='_blank'  className="my-4 scalelarge hover:text-vt-alt">
                        <i class="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://github.com/subrosama" target='_blank' className="my-4 scalelarge hover:text-vt-alt">
                        <i class="uil uil-github-alt"></i>
                        </a>
                    </div> 
                    
                        <img className='h-80 my-4' src={img} alt="" />
                        <source /> 
                    </div>
                    

                    <div className='text-left mx-14 my-8'>                       
                            <h2 className=' text-2xl font-dm'>
                                Hey! this is,
                            </h2>
                            <h1 className='text-4xl font-dm -translate-x-7'>
                            <span className="text-vt-first">./</span>
                                Subhranil<span className="text-vt-first">Raha</span> 
                            </h1>
                            <h3 className='py-2 text-2xl font-dm'>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        3000,
                                        "Flutter Developer",
                                        3000,
                                        "Graphics Designer",
                                        3000,
                                        "BlockChain Developert",
                                        3000,
                                        ]}
                                />
                            </h3>
                            <h3>
                                Computer Science Undergrad exploring new technologies in Web and BLockChain Development.
                            </h3>

                            <div className="flex flex-row justify-between">
                                <button className="mt-6 button">
                                <a href="#contact" className='py-2 rounder-lg'>Contact Me <i class="uil uil-message"></i></a>
                                </button>
                                    

                            <div className="mt-6 py-2 text-vt-alt hover:translate-y-2 scroll">
                            <a href="#about"><i class="uil uil-mouse-alt text-2xl "></i>
                            <span className=""> Scroll down </span><i class=""></i></a>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home