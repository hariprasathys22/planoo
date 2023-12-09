import './App.css';
import Navbar from './components/Navbar';
import TextContainer from './components/TextContainer'
import ImgContainer from './components/ImgContainer'
import ListStyle from './components/ListStyle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <TextContainer />
        <ImgContainer />
      </div>
      <ListStyle />
    </div>
  );
}

export default App;
