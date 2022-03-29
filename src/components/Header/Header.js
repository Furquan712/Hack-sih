import React from 'react';
import {
   HeaderMain,
   HeaderContainer,
   Logo,
   HeaderBtn,
   Button
} from './HeaderNavStyles';
import HeaderNav from './HeaderNav';
// import { Button } from '../Button';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <HeaderMain>
         <HeaderContainer>
            <Logo>
               <Link to='/'>Kisan Seva</Link>
            </Logo>
            <HeaderNav />
            <HeaderBtn>
               <Button primary="true">
                  {/* <a href="https://abhay-jyot7.github.io/Aadhar_Verification/" >User</a> */}
                  <a href="https://abhay-jyot7.github.io/Aadhar_Verification/">User</a>
               </Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMain>
   );
};

export default Header;
