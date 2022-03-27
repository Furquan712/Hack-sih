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
               <Button primary="true">User</Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMain>
   );
};

export default Header;
