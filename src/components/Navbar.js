import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-orange-50 sticky top-0 drop-shadow-2xl'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl uppercase'>Anqatech</h1>
          <ul className='hidden md:flex'>
            <li className='cursor-pointer'><Link to="home" smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li className='cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='cursor-pointer'><Link to="pricing" smooth={true} offset={-80} duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='w-5' /> : <AiOutlineClose className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-orange-50 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="home" smooth={true} offset={-100} duration={500}>
            <a href="!#" className='cursor-pointer'>Home</a>
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
            <a href="!#" className='cursor-pointer'>About</a>
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="pricing" smooth={true} offset={-80} duration={500}>
            <a href="!#" className='cursor-pointer'>Pricing</a>
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
