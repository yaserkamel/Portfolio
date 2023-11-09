
import './Footer.css'
const Footer = () => {
  return (
    <footer className='flex'>
      {
      //   <ul className='flex'>
      //   <li><a href='#'>Home</a></li>
      //   <li><a href='#about'>About</a></li>
      //   <li><a href='#projects'>projects</a></li>
      //   <li><a href='#contact'>Contact</a></li>
      // </ul>
    }
      <p>Developed By Yaser Kamel</p>
      <p>Copyright &copy; 2023 </p>
      <div className='all-icons flex'>
        <a href='https://www.linkedin.com/in/yaser-kamel'>
          <div className='icon icon-linkedin'></div>
        </a>

        <a href='https://github.com/yaserkamel'>
          <div className='icon icon-github'></div>
        </a>
        <a href='https://instagram.com/yaserkamell?igshid=NzZlODBkYWE4Ng=='>
        <div className='icon icon-instagram'></div>
      </a>
      </div>
    </footer>
  )
}

export default Footer
