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

const Header = () => {
   return (
      <HeaderMain>
         <HeaderContainer>
            <Logo>Kissan Seva</Logo>
            <HeaderNav />
            <HeaderBtn>
               <Button primary="true">
                  <a href="#">User</a>
               </Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMain>
   );
};

export default Header;
