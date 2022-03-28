import React, { useState, useEffect } from 'react';
import {
   InfoSection,
   InfoContainer,
   InfoContent,
   InfoImage,
   InfoImage1,
   InfoImage3
} from './InfoStyle';
import { breakpoints } from '../../helper';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const Info = () => {
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
   });

   return (
      <InfoSection>
         <InfoContainer>
            <InfoContent>
               <h2>Crop Prediction</h2>
               <p>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <Button primary="true">
               <Link to='/crop'>Crop Prediction</Link>
               </Button>
            </InfoContent>
            {width >= breakpoints && <InfoImage />}
         </InfoContainer>
         <InfoContainer>
         {width >= breakpoints && <InfoImage1 />}
            <InfoContent>
               <h2>Fertilizer Prediction</h2>
               <p>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <Button primary="true">
               <Link to='/fertilizer'>Fertilizer Prediction</Link>
               </Button>
            </InfoContent>
            
         </InfoContainer>
         <InfoContainer>
            <InfoContent>
               <h2>Pest Prediction</h2>
               <p>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <Button primary="true">
               <Link to='/pest'>Pest</Link>
               </Button>
            </InfoContent>
            {width >= breakpoints && <InfoImage3 />}
         </InfoContainer>
      </InfoSection>
   );
};

export default Info;
