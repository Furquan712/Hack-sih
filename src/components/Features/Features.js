import React from 'react';
import {
   FeaturesSection,
   FeaturesContainer,
   FeaturesContent,
   FeaturesHeading,
   FeaturesItem,
   FeaturesLink,
   FeaturesText,
} from './FeaturesStyle';
import { Button } from '../Button';
import { featuresData } from '../../assets';

const Features = () => {
   return (
      <FeaturesSection>
         <FeaturesContainer>
            <FeaturesHeading>
               <h3>Agriculture Research</h3>
               <Button primary="true">See all</Button>
            </FeaturesHeading>
            <FeaturesContent>
               {featuresData.map((feature, index) => {
                  return (
                     <FeaturesItem key={index}>
                        <FeaturesLink
                           style={{ backgroundImage: `url(${feature.image})` }}
                        >
                           <FeaturesText>
                              <h4>{feature.title}</h4>
                              <a target="_blank" href={feature.link}>{feature.label}</a>
                           </FeaturesText>
                        </FeaturesLink>
                     </FeaturesItem>
                  );
               })}
            </FeaturesContent>
         </FeaturesContainer>
      </FeaturesSection>
   );
};

export default Features;
