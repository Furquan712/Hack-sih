import React from 'react';
import {
   HeaderMainPage,
   HeaderContainer,
   Logo,
   HeaderBtn,
   Button
} from './HeaderNavStyles';
import HeaderNav from './HeaderNav';
import { Link } from 'react-router-dom';

// import { Button } from '../Button';

const HeaderPage = () => {
   return (
      <HeaderMainPage>
         <HeaderContainer>
            <Logo> 
            <Link to='/'>Kisan Seva</Link>
            </Logo>
            <HeaderNav />
            <HeaderBtn>
               <Button primary="true">
                  <a href="#">User</a>
               </Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMainPage>
   );
};

export default HeaderPage;
