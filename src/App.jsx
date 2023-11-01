import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import {useEffect, useState, useRef} from 'react';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  // const prevScrollPos = useRef(0);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    // 👇️ Button is displayed after scrolling for 300 pixels
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    })
  }, []);

  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <div className='divider' />
      <Main/>
      <div className='divider' />
      <Contact/>
      <div className='divider' />
      <Footer/>

      <button  
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{opacity: isVisible ? 1 : 0}} className='scroll2Top icon-keyboard_arrow_up'>
      </button>
    </div>
  )
}

export default App
