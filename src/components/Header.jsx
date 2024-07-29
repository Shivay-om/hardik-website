import React, { useState }from 'react'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 shadow-md z-50 bg-[#0E1630]">
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className='w-12' src={logo} alt="Logo" />
            <p className='text-[2rem] text-white px-2'>
              <span className='text-[#01d293]'>H</span>ardik <span className='text-[#01d293]'>W</span>orks
            </p>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:flex sm:space-x-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              >
                Home
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              >
                Services
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="sm:hidden flex items-center">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                {isOpen ? <XIcon className="h-6 w-6 text-[#01d293]" /> : <MenuIcon className="h-6 w-6 text-[#01d293]" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-250}
              className="block cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-250}
              className="block cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-260}
              className="block cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:text-[#01d293] px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>

  ) 
}

export default Header
