import React from 'react'

function Footer() {
  return (
    <footer className="footer py-10 mt-4 pb-16 bg-slate-700">
        <div className="">
            <div className="flex flex-row">
                <div>
                <h1 className='text-white font-semibold text-2xl pl-6'>
                    Subhranil<span className='text-vt-light font-semibold text-2xl'>Raha</span><span className='text-white font-semibold text-2xl'>.</span>
                </h1>
                <span className="footersubtitle text-white">
                    FullStack developer
                </span>
                </div>
                <span className='block p-0 m-0 w-1 h-full bg-vt-first'></span>
                <div className="flex flex-col ml-3">
                <div>
                <ul className="footerlinks text-white">
                    <li>
                        <a href="#projects" className="footerlink pl-1">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="footerlink pl-1">Resume</a>
                    </li>
                    <li>
                        <a href="#contact" className="footerlink pl-6">ContactMe</a>
                    </li>
                </ul>
                </div>
                <div>
                <h1 className='text-white pl-6 pt-4'>Follow me:</h1>
                <div className="footersocials text-white pb-4 pl-6">
                    <a href="https://www.facebook.com/subhranil.raha.9/" target='_blank' className="footersocials px-1 text-2xl"><i class="uil uil-facebook-f"></i></a>
                    <a href="https://www.instagram.com/subhranil_raha/?hl=en" target='_blank' 
                    className="footersocials px-1 text-2xl"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com/SubhranilRaha" target='_blank' className="footersocials pl-2 text-2xl"><i class="uil uil-twitter-alt"></i></a>
                </div>
                </div>
                </div>
                
                
            </div>
            <p className="footercopy text-white">
                &#169; Copyright©2022 All rights reserved | Crafted by <span className='text-vt-light'>Subhranil Raha
                    </span> 
            </p>
        </div>
    </footer>
  )
}

export default Footer