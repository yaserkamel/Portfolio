import { useState } from 'react'
import './Main.css'
import { myProjects } from './myProjects'
import { AnimatePresence, motion } from 'framer-motion'

const Main = () => {
  const [currentActive, setCurrentActive] = useState('all')
  const [arr, setArr] = useState(JSON.parse(JSON.stringify(myProjects)))
  const handleClick = (e)=>{
    setCurrentActive(e.target.value)

    if(e.target.value === 'all'){
      setArr(JSON.parse(JSON.stringify(myProjects)))
    }else {
      const newArr = myProjects.filter(item => item.category === e.target.value)
      setArr(newArr)
      
    }
  }
  return (
    <main id='projects' className='flex'>
      
      <section className='  flex left-section'>
        <button value='all' onClick={(e)=> handleClick(e)} className={currentActive === 'all' ? 'active' : null}>all project</button>
        <button value='HTML' onClick={(e)=> handleClick(e)} className={currentActive === 'HTML' ? 'active' : null}>HTML & CSS</button>
        <button value='js' onClick={(e)=> handleClick(e)} className={currentActive === 'js' ? 'active' : null}>JavaScript</button>
        <button value='react' onClick={(e)=> handleClick(e)} className={currentActive === 'react' ? 'active' : null}>ReactJs</button>
      </section>
      <section className=' flex right-section'>
      <AnimatePresence>
        {
          arr.map((item, index)=>{
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: 'spring', damping: 8, stiffness: 50}}
                key={index} className='card'>
                <img src={item.imgPath } alt=''/> 

                <div style={{width: '266px'}} className='box'>
                  <h1 className='title'>{item.projectTile} </h1>
                  <p className='sub-title'>{item.description}</p>
                  <div className='flex icons'>
                    <div style={{gap: '11px'}} className='flex '>

                      <div className="tooltip">
                        <span className="tooltiptext">Demo</span>
                        <a href={item.demo}>
                          <div className='icon-link'></div>
                        </a>
                      </div>
                      <div className="tooltip">
                        <span className="tooltiptext">Github</span>
                        <a href={item.git}>
                          <div className='icon-github'></div>
                        </a>
                      </div>
                    </div>
                    {
                      // <a href='#' className='link flex'>
                      //   more
                      //   <span  className='icon-arrow_forward'></span>
                      // </a>
                    }
                  </div>
                </div>
              </motion.article>
            )
          })
        }
        </AnimatePresence>
      </section>
    </main>
  )
}

export default Main
