import React from 'react';
import GlobalStyle from './globalStyles';
import Index from './Pages';
import Footer from './components/Footer/Footer';
import Crop from './Pages/crop'
import MarketStat from './Pages/marketStat';
import Fertilizer from './Pages/Fertilizer'
import Pest from './Pages/Pest'
import KrishiGreh from './Pages/KrishiGreh'

import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom";

const App = () => {
   return (
      <>
         <Router>
            <GlobalStyle />
            
            <Routes>
               <Route exact path='/' element={<Index />} />
               <Route exact path='/crop' element={<Crop />} />
               <Route exact path='/fertilizer' element={<Fertilizer />} />
               <Route exact path='/market' element={<MarketStat />} />
               <Route exact path='/kisan' element={<KrishiGreh />} />
               <Route exact path='/pest' element={<Pest />} />
            </Routes>
            {/* <Footer /> */}
         </Router>

      </>

   );
};

export default App;

   // <Router>
   //    <div className="App">
   //    <GlobalStyle />
   //    <Header />
   //    <main>
   //       <Hero slides={sliderData} />
   //       <Info />
   //       <About />
   //       <Features />
   //    </main>
   //    <Footer />
   // </div>
   // </Router>
   // <div className="App">
   //    <GlobalStyle />
   //    <Header />
   //    <main>
   //       <Hero slides={sliderData} />
   //       <Info />
   //       <About />
   //       <Features />
   //    </main>
   //    <Footer />
   // </div>