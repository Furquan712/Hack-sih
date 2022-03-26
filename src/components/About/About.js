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
                  Weather <ArrowRight />
               </Button>
            </AboutContent>
         </AboutContainer>
      </AboutSection>
   );
};

export default About;
