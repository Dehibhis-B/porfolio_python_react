// import React from 'react'
// import { Link } from 'react-router-dom'
// import reacr from '../assets/react.svg'


// export default function Navbar() {
//     return (
//         <nav className='bg-col-zinc py-6 relative p-4 ' >
//             <div className=' flex justify-between container mx-auto' >
//                 <div className='flex'>
//                     <img src={reacr} />
//                     <div className='px-4' > 
//                         <h1 className='text-[13px]' >Dehibhis Banner</h1>
//                         <span className='text-col-green font-semibold  text-sm ' >Desarrollador Full Stack</span>
//                     </div>
//                 </div>


//                 <div className='flex gap-2 '>
//                     <Link to="/tasks-create" >
//                         <button className='bg-col-zinc hover:bg-col-green-v text-[12px] px-3 py-1 rounded' >Inicio</button>
//                     </Link>
//                     <Link to="/tasks-create" >
//                         <button className='bg-col-zinc hover:bg-col-green-v text-[12px] px-3 py-1 rounded' >Proyectos</button>
//                     </Link>
//                     <Link to="/tasks-create" >
//                         <button className='bg-col-zinc hover:bg-col-green-v text-[12px]  px-3 py-1 rounded'>Experiencia</button>
//                     </Link>
//                     <Link to="/tasks-create" >
//                         <button className='bg-col-zinc hover:bg-col-green-v text-[12px] px-3 py-1 rounded' >Sobre mi</button>
//                     </Link>

//                     <Link to="/tasks-create" >
//                         <button className='bg-col-zinc hover:bg-col-green-v text-[12px] px-3 py-1 rounded' >Skills</button>
//                     </Link>

//                 </div>
//             </div>
//         </nav>
//     )
// }import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import profileImage from '../assets/react.svg'; // Ensure you have the correct path for the image

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-col-zinc py-4 px-4 md:px-6 relative'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={profileImage} alt="Profile" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
          <div className='px-4'>
            <h1 className='text-sm md:text-base'>Dehibhis Banner</h1>
            <span className='text-col-green font-semibold text-xs md:text-sm'>Desarrollador Full Stack</span>
          </div>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full bg-col-zinc bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-4 ${isOpen ? 'block' : 'hidden'} md:flex md:relative md:bg-transparent md:w-auto md:h-auto md:flex-row md:items-center md:space-y-0 md:space-x-4`}>
          <Link to="/tasks-create">
            <button onClick={toggleMenu} className='bg-col-zinc hover:bg-col-green-v text-xs md:text-sm px-3 py-1 rounded'>Inicio</button>
          </Link>
          <Link to="/tasks-create">
            <button onClick={toggleMenu} className='bg-col-zinc hover:bg-col-green-v text-xs md:text-sm px-3 py-1 rounded'>Proyectos</button>
          </Link>
          <Link to="/tasks-create">
            <button onClick={toggleMenu} className='bg-col-zinc hover:bg-col-green-v text-xs md:text-sm px-3 py-1 rounded'>Experiencia</button>
          </Link>
          <Link to="/tasks-create">
            <button onClick={toggleMenu} className='bg-col-zinc hover:bg-col-green-v text-xs md:text-sm px-3 py-1 rounded'>Sobre mi</button>
          </Link>
          <Link to="/tasks-create">
            <button onClick={toggleMenu} className='bg-col-zinc hover:bg-col-green-v text-xs md:text-sm px-3 py-1 rounded'>Skills</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
