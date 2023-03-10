import React from 'react';
import { Link } from 'react-router-dom';
// import nav data
import { navData } from '../data';

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className='flex gap-x-[58px]'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href} className='link hover:border-b-2 hover:border-dark transition duration-300'>

                {item.name}
              </Link>

            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
