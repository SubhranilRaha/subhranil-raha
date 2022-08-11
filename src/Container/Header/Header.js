import React, { useState } from 'react'


function Header() {
   

    const navMenu=document.getElementById('nav-menu'); 
    const navToggle=document.getElementById('nav-toggle'); 
    const navClose=document.getElementById('nav-close');
  
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        })
    } 
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        }) 
    } 
    const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
  return (
    <header className="w-full fixed left-0 bottom-0 z-50 bg-vt-body" id='header'>
        <nav className="max-w-968px h-12 flex justify-between items-center">            
            <a href="#S" className="nav__logo pl-4 font-lob text-2xl">Subhranil
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i> Home
                            </a> 
                        </li> 
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <i class="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                            <i class="uil uil-diary-alt nav__icon"></i> Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>                       
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i class="uil uil-message nav__icon"></i> ContactMe
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close"></i>
                </div>
            </a>
                <div className="nav__btns px-2">
                    {/* Theme Change Button */}
                    <div  className='flex flex-row items-center cursor-pointer'>
                    <i class="uil uil-moon pr-4 text-2xl hover:text-vt-first change-theme" id='theme-button'></i>
                    <div className="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                    </div>
                    </div>
                </div>           
            </nav>
    </header>
  )
}



export default Header