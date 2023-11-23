import './App.css';
import MyTeam from './components/CardCrousel/MyTeam';
import MyWriting from './components/MyPerfectWritting/MyWriting';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Social from './components/Social/Social';

function App() {
  return (
    <>
      <MyTeam />
      <PlaceOrder />
      <Social />
      <MyWriting />
    </>
  );
}

export default App;
