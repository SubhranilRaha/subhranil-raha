import React from 'react';


function About() {
  return (
    <section className="h-gl pb-6 bg-vt-light abtbgimg" id="about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <div className='mx-14'>
        <h2 className="pt-6 text-4xl font-dm text-vt-body">
            About Me
        </h2>
        {/* <div className="py-8 flex justify-center scalelarge">
        <img className='rounded-full h-40' src={img} alt="" />
        </div> */}
        <div className="aboutme pb-8 pt-2">
        <p className="text-vt-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam labore, ut soluta accusantium quos ab consequatur iusto suscipit tempore doloribus non sequi minima explicabo voluptatem eligendi aliquid blanditiis sunt officiis?
        </p>
        <p className="text-vt-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam labore, ut soluta accusantium quos ab consequatur iusto suscipit tempore doloribus non sequi minima explicabo voluptatem eligendi aliquid blanditiis sunt officiis?
        </p>
        </div>
        <button className="button mb-6 bg-transparent border-2">Download CV <i class="uil uil-download-alt"></i></button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,250.7C384,256,480,256,576,234.7C672,213,768,171,864,144C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default About