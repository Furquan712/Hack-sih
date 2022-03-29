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
                  Accurate predictions of suitable Grains for cultivation improve production levels. Crop prediction attributes are defined by multiple factors such as genotype, climate and the interactions between the two
               </p>
               <p>
                  Accurate crop prediction needs a fundamental understanding of the functional relationship between cultivation and interactive factors like the genotype and climate
               </p>
               <p>
                  Further, it requires both detailed datasets and efficient algorithms to examine these relationships. Justified by these facts, machine learning techniques are used in this study to predict the most suitable crop for a specific stretch of land, and this technique is ideal for considering factors like the soil and environmental conditions.
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
                  What are the different techniques used in fertilizers crop recommendation system?
               </p>
               <p>
                  Collaborative filtering algorithms help people make choices based on the opinions of other people. User-based and item-based collaborative filtering algorithms predict new ratings by using ratings of similar users or items. Similarity calculation is the key step in the algorithms.
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
               Pest Prediction aims to produce cutting edge research to provide pest and disease monitoring and forecast information to support decision making in the sustainable management of insect pests and diseases. It integrates multiple sources of data, Earth observation (EO), meteorological and vertical looking radar, to generate predictive models on wheat rust severity, locust development and biopesticide suitability. These models help governments to decide i) where to send resources for locust control and ii) if biopesticides can be effective in controlling the locusts in those current climatic conditions. Modelling helps the government to decide when it is suitable to spray and hence have better informed pesticide application.
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
