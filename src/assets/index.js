import ImageOne from '../assets/img/Ai.png';
import ImageTwo from '../assets/img/Ai2.jpg';
import ImageThree from '../assets/img/farmer5.jpg';
import ImageNine from '../assets/img/farmer4.jpg';
import Crop from '../assets/img/crop.jpg'
import fertilizer from './img/fertilizer.jpg'
import pest from './img/pest.jpg'
import imgtwo from './img/2.jpg'
import imgthree from './img/3.jpg'
import imgfour from './img/4.jpg'
import imgfive from './img/5.jpg'

const menuData = [
   {
      title: 'Crop',
      link: '/crop',
   },
   {
      title: 'Fertilizer',
      link: '/fertilizer',
   },
   {
      title: 'weather',
      link: '/weather',
   },
   {
      title: 'Pest',
      link: '/pest',
   },
   {
      title: 'Market Stats',
      link: '/market',
   },
   {
      title: 'Kisan Greh',
      link: '/kisan',
   },
];

const sliderData = [
   {
      title: 'Weather Prediction',
      price: 'weather forecasting, the prediction of the weather through application of the principles of physics, supplemented by a variety of statistical and empirical techniques.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: imgtwo,
      alt: 'Building',
   },
   {
      title: 'Crop Prediction',
      price: 'Accurate predictions of suitable Grains for cultivation improve production levels. Crop prediction attributes are defined by multiple factors such as genotype, climate and the interactions between the two.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: imgfour,
      alt: 'Building',
   },
   {
      title: 'Market Stats',
      price: 'The analysis of performance of a farm business is usually done in two alternative ways: enterprise analysis and whole farm business analysis. Enterprise analysis deals with determination of profitability of individual farm enterprises by applying detailed cost accounting.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: imgfive,
      alt: 'Building',
   },

   {
      title: 'Pest',
      price: 'Pest Prediction aims to produce cutting edge research to provide pest and disease monitoring and forecast information to support decision making in the sustainable management of insect pests and diseases.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: imgthree,
      alt: 'Building',
   },
];

const featuresData = [
   {
      title: 'Crop Prediction',
      label: 'Accurate predictions of suitable Grains for cultivation improve production levels. Crop prediction attributes are defined by multiple factors for best reults.',
      image: Crop,
      link: "https://www.sciencedirect.com/science/article/pii/S0168169920302301/pdfft?isDTMRedir=true&download=true"
   },
   {
      title: 'Fertilizer Prediction',
      label: 'System is designed to be used by farmers for suggestion of fertilizers to be used based on a set of soil features e.g. soil moisture, Ca, Potassium, soil pH etc. ',
      image: fertilizer,
      link: 'https://www.ijeast.com/papers/371-376,Tesma405,IJEAST.pdf'
   },
   {
      title: 'Pest Prediction',
      label: 'Aims to provide pest and disease monitoring and forecast information to support decision making in the sustainable management of insect pests and diseases.',
      image: pest,
      link: 'https://www.sciencedirect.com/science/article/pii/S2212667814000100/pdfft?isDTMRedir=true&download=true'
   },
];

const footerNav = [
   {
      title: 'Crop Prediction',
   },
   {
      title: 'Pest',
   },
   {
      title: 'Market Stats',
   },
   {
      title: 'Weather',
   },
];

export { menuData, sliderData, featuresData, footerNav };
