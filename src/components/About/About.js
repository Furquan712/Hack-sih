import React from 'react';
import { AboutSection, AboutContainer, AboutContent } from './AboutStyle';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow-right.svg';
import { Button } from '../Button';


const About = () => {
   return (
      <AboutSection>
         <AboutContainer>
            <AboutContent>
               <h3>Let's Predict your week</h3>
               <pre>
                  Weather Prediction is done with satellite navigation to provide you the data so that you can
                  <br />
                  time your Grains and their need accordingly
               </pre>
               <Button primary="true">
                  <a target="_blank" href="https://kissanmoasam.netlify.app/"> Weather</a>
               </Button>
            </AboutContent>
         </AboutContainer>
      </AboutSection>
   );
};

export default About;
