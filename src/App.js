import logo from './logo.svg';
import './App.css';
import HeaderHeroPart from './component/Header-Hero-part';
import Social from './component/Social part';
import Achievement from './component/Achievement';
import Community from './component/Community';
import Team from './component/Team';
import Application from './component/Application';
import News from './component/News';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <HeaderHeroPart/>
      <Social/>
      <Achievement/>
      <Community/>
      <Team/>
      <Application/>
      <News/> 
      <Footer/>
    </div>
  );
}

export default App;
