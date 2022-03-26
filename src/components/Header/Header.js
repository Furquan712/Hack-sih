import React from 'react';
import {
   HeaderMain,
   HeaderContainer,
   Logo,
   HeaderBtn,
} from './HeaderNavStyles';
import HeaderNav from './HeaderNav';
import { Button } from '../Button';

const Header = () => {
   return (
      <HeaderMain>
         <HeaderContainer>
            <Logo>Kissan Seva</Logo>
            <HeaderNav />
            <HeaderBtn>
               <Button primary="true">Weather</Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMain>
   );
};

export default Header;
