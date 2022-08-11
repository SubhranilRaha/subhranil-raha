import './App.css';

// import Navbar from './Container/Navbar/Navbar';
// import Profile from './Container/Home/Profile';

import Header from './Container/Header/Header';
import Home from './Container/Home/Home';
import About from './Container/AboutMe/About'
import Skills from './Container/Skills/Skills'
import Qualification from './Container/Qualification/Qualification';
import Contact from './Container/ContactMe/Contact';
import Footer from './Container/Footer/Footer';
import SU from './Container/ScrollUp/SU';

function App() {
  
  const sections=document.querySelectorAll('section[id]')

  function scrollActive(){
      const scrollY=window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight=current.offsetHeight
          const sectionTop =current.offsetTop - 50;
          const sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*=' + sectionId + ']' ).classList.add('active-link')
          }
          else{
              document.querySelector('.nav__menu a[href*=' + sectionId + ']' ).classList.remove('active-link')
          }
      })
  }
  window.addEventListener('scroll',scrollActive)

  function scrollHeader(){
    const nav=document.getElementById('header')
    if(this.scrollY >=80 ) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');

  }
  window.addEventListener('scroll',scrollHeader)
  
  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');;
  }
  window.addEventListener('scroll',scrollUp)
 
  return (
    <div className="App" >
     <Header />
     <Home />
     <About />
     <Skills />
     <Qualification />
     <Contact />
     <Footer />
     <SU />
     
      </div>
  );
}

export default App;
