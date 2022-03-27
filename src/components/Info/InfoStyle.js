import styled from 'styled-components';
import ImageFour from '../../img/far1.png';
import ImageFive from '../../img/fert3.png';
import Imagepest from '../../img/pest2.png';
const InfoSection = styled.section`
   padding: 124px 40px 140px;


   @media screen and (max-width: 768px) {
      padding: 100px 28px;
   }
`;

const InfoContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   max-width: 1600px; 
   margin: 0 3rem;
   @media screen and (max-width: 757px) {
      margin: 80px 0;
   }
`;

const InfoContent = styled.div`
   text-align: left;
   ${'' /* margin: 43px; */}
   flex: 1 0 55%;
   width: 55vw;
   @media screen and (max-width: 757px) {
      margin-right: 0;
   }

   h2 {
      font-size: 42px;
      margin-bottom: 12px;
   }

   p {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 14px;
      max-width: 556px;
      color: #60636c;
   }
`;

const InfoImage = styled.div`
   position: relative;
   background-image: url(${ImageFour});
   background-size: 40vh;
   background-repeat: no-repeat;
   background-position: center;
   width: 100%;
   height: 80vw;
   max-width: 600px;
   max-height: 526px;
   ${'' /* margin: 0 auto; */}
`;
const InfoImage1 = styled.div`
   position: relative;
   background-image: url(${ImageFive});
   background-size: 40vh;
   background-repeat: no-repeat;
   background-position: center;
   width: 100%;
   height: 80vw;
   max-width: 600px;
   max-height: 526px;
   margin-right: 12rem;
   ${'' /* margin: 0 auto; */}
`;
const InfoImage3 = styled.div`
   position: relative;
   background-image: url(${Imagepest});
   background-size: 40vh;
   background-repeat: no-repeat;
   background-position: center;
   width: 100%;
   height: 80vw;
   max-width: 600px;
   max-height: 526px;
   ${'' /* margin: 0 auto; */}
`;


export { InfoSection, InfoContainer, InfoContent, InfoImage, InfoImage1, InfoImage3 };
