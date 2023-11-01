import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')

  useEffect(()=>{
    
    document.body.classList.add(theme)
  },[theme])
  return (
    <header className='flex'>
      <button onClick={() => setShowModal(true)} className='menu  icon-menu'/>
      <div></div>
      <nav>
        <ul className='flex'>
          <li><a href=''>About</a></li>
          <li><a href=''>Articales</a></li>
          <li><a href=''>projects</a></li>
          <li><a href=''>Contact</a></li>
          
        </ul>
      </nav>

      <button onClick={() => {
        if(theme === 'dark'){
          localStorage.setItem('theme', 'light')
          document.body.classList.remove('dark')
          setTheme(localStorage.getItem('theme'))
        }
        else{
          localStorage.setItem('theme', 'dark')
          document.body.classList.remove('light')
          setTheme(localStorage.getItem('theme'))
        }
          
      }
      } className='mode'>
        <span style={{transition: '1s'}} className={theme === 'dark' ? 'icon-moon-o': 'icon-sun'}></span>
      </button>


      { showModal && (
        <div className='fixed '>
          
          <ul className='modal'>
            <li><button onClick={() => setShowModal(false)} className='icon-close'/></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Articales</a></li>
            <li><a href=''>projects</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      )
    }
    </header>
  )
}

export default Header
