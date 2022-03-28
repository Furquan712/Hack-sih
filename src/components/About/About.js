import React from 'react';
import { AboutSection, AboutContainer, AboutContent } from './AboutStyle';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow-right.svg';
import { Button } from '../Button';


const About = () => {
   return (
      <AboutSection>
         <AboutContainer>
            <AboutContent>
               <h3>wearher prediction</h3>
               <Button primary="true">
               <a target="_blank" href="https://kissanmoasam.netlify.app/"> Weather <ArrowRight /> </a>
               </Button>
            </AboutContent>
         </AboutContainer>
      </AboutSection>
   );
};

export default About;
