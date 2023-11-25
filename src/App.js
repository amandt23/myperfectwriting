import './App.css';
import MyTeam from './components/CardCrousel/MyTeam';
import Faqs from './components/FAQS/Faqs';
import Footer from './components/Footer/Footer';
import MyWriting from './components/MyPerfectWritting/MyWriting';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Price from './components/Price/Price';
import Review from './components/Reviews/Review';
import Social from './components/Social/Social';

function App() {
  return (
    <>
      <MyTeam />
      <PlaceOrder />
      <Price />
      <Faqs />
      <Social />
      <Review />
      <MyWriting />
      <Footer />
    </>
  );
}

export default App;
