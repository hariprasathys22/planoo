import './App.css';
import Navbar from './components/Navbar';
import TextContainer from './components/TextContainer'
import ImgContainer from './components/ImgContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <TextContainer />
        <ImgContainer />
      </div>
    </div>
  );
}

export default App;
