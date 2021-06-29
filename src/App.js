import './App.css';
import Row from './Row.js';
import requests from './Requests';
import Banner from './Banner';
import Navabar from './Navabar';

function App() {
  return (
    <div className="App">
      <Navabar />
      <Banner />
      <Row isLargeRow = {true} title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title = "TRENDING" fetchUrl = {requests.fetchTrending} />
      
    </div>
  );
}

export default App;

