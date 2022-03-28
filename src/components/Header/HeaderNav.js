import React, { useEffect, useState } from 'react';
import { menuData } from '../../assets';
import {
   Nav,
   HeaderMenu,
   HeaderList,
   HeaderItem,
   ButtonToggle,
   ButtonBars,
} from './HeaderNavStyles';
import { Button } from '../Button';
import { breakpoints } from '../../helper';
import { Link } from 'react-router-dom';
const HeaderNav = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
   });

   const mobileMenu = () => setIsOpen(!isOpen);

   return (
      <Nav>
         <ButtonToggle
            onClick={mobileMenu}
            aria-label="menu-toggle"
            aria-expanded={isOpen ? true : false}
         >
            <ButtonBars />
            <ButtonBars />
            <ButtonBars />
         </ButtonToggle>
         <HeaderMenu isOpen={isOpen}>
            <HeaderList>

               <HeaderItem>
                  <Link to='/crop'>Crop</Link>
               </HeaderItem>
               <HeaderItem>
                  <Link to='/fertilizer'>Fertilizer</Link>
               </HeaderItem>
               <HeaderItem>
                  {/* <Link to='https://kissanmoasam.netlify.app/'>Weather</Link> */}
                  <a href="https://kissanmoasam.netlify.app/">Weather</a>
               </HeaderItem>
               <HeaderItem>
                  <Link to='/pest'>Pest</Link>
               </HeaderItem>
               <HeaderItem>
                  <Link to='/market'>Market Stats</Link>
               </HeaderItem>
               <HeaderItem>
                  <Link to='/kisan'>Kisan greh</Link>
               </HeaderItem>
               
            </HeaderList>
            {width <= breakpoints ? (
               <Button primary="true">Contact Us</Button>
            ) : null}
         </HeaderMenu>
      </Nav>
   );
};

export default HeaderNav;


// {menuData.map((item, index) => {
//    return (
//       <HeaderItem key={index} onClick={mobileMenu}>
//          {/* <a href={`/${item.link}`}>{item.title}</a> */}
//          <Link to={`/${item.link}`}>{item.title}</Link>
         
//       </HeaderItem>
//    );
// })}