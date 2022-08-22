import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Nav from './components/Nav';
import Whatboni from './components/Whatboni';
function App() {
  return (
    <div className="App">
       <Header/>
       <Nav/> 
       <Body/>
       <Whatboni/>
    </div>
  );
}

export default App;
