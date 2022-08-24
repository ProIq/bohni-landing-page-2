import './App.css';
import Body from './components/Body';
import Cards from './components/Cards';
import Header from './components/Header';
import Nav from './components/Nav';
import Whatboni from './components/Whatboni';
import WhyBoni from './components/WhyBoni';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body />
      <Whatboni />
      <WhyBoni />
      <Cards />
    </div>
  );
}

export default App;
