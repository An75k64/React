import './App.css';
import Avenger from './Avenger';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
     <h1 className='title' >Avenger List</h1>
     <div className='container'>
     <Avenger name="Ironman" age="35"/>
     <Avenger name="Thor" age="98"/>
     <Avenger name="Captain America" age="105"/>
     </div>
     <Banner/>
    </div>
  );
}

export default App;
