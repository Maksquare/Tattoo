import React from 'react';
import { Link } from 'react-router-dom';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = ({ setnavmobile, navmobile }) => {

  
  // destructure nav data
  const { items } = navData;
  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link className='text-2xl font-primary uppercase' to={item.href} onClick = {()=>  setnavmobile(!navmobile) }>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='text-2xl'>
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
