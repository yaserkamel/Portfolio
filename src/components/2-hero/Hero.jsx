import Lottie from 'lottie-react'
import developerAnimation from '../../../public/animation/developer.json'
import './Hero.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
  const lottieRef = useRef()
  return (
    <section className='hero flex'>
      <div className='left-section '>

        <div className='parent-avatar flex'>
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{  transform: 'scale(1)' }}
            transition={{ damping: 6, type:'spring', stiffness:100 }}
            src='photo.jpg'
            className='avatar'
            alt=''/>
          <div className='icon-verified'></div>
        </div>

        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className='title'>
          Software Engineer | React Js Developer
        </motion.h1>
        <p className='sub-title'> 
          I am Yaser Kamel, a Frontend Web Developer with more than 2 year experience in building and maintaining web applications using modern web technologies, including
          HTML, CSS, jQuery, JavaScript, Bootstrap, React.js and modern libraries and frameworks. Proficient in creating responsive & user-friendly web applications.
        </p>

        <div className='all-icons flex'>
          <div className='icon icon-twitter'></div>
          <div className='icon icon-instagram'></div>
          <div className='icon icon-github'></div>
          <div className='icon icon-linkedin'></div>
        </div>

      </div>
      <div className='right-section animation'>
        <Lottie
          lottieRef={lottieRef}
          // @ts-ignore
          onLoadedImages={() => {lottieRef.current.setSpeed(0.5)}} 
          animationData={developerAnimation}
        />
      </div>
    </section>
  )
}

export default Hero
