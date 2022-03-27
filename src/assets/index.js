import ImageOne from '../assets/img/Ai.png';
import ImageTwo from '../assets/img/Ai2.jpg';
import ImageThree from '../assets/img/farmer5.jpg';
import ImageNine from '../assets/img/farmer4.jpg';

import ImageSix from '../assets/img/ImageSix.jfif';
import ImageSeven from '../assets/img/ImageSeven.jfif';
import ImageEight from '../assets/img/ImageEight.jfif';

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
      link: '/Weather',
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
      title: 'Crop Prediction',
      price: 'Project made for an art museum near Toronto, Canada. Project Paramour is a statement of bold, modern architecture.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageOne,
      alt: 'Building',
   },
   {
      title: 'Weather Prediction',
      price: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageTwo,
      alt: 'Building',
   },
   {
      title: 'Market Stats',
      price: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageThree,
      alt: 'Building',
   },

   {
      title: 'Pest',
      price: 'D-Arch challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageNine,
      alt: 'Building',
   },
];

const featuresData = [
   {
      title: 'Project Del Sol',
      label: 'View All Projects',
      image: ImageSix,
   },
   {
      title: '228B Tower',
      label: 'View All Projects',
      image: ImageSeven,
   },
   {
      title: 'Le Prototype',
      label: 'View All Projects',
      image: ImageEight,
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
