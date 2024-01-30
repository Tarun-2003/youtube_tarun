
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
    
    <Route path="/" element={
      <div>
      
    
    <div className='App-page'>
    
    
    <Sidebar/>
    <RecommendedVideos/>
   
   
  </div>

  </div>}>
      </Route>
    
    
      <Route path="/search/:searchTerm" element={
        <div className='App-page'>
    
    
    <Sidebar/>
   <SearchPage/>
   
   
  </div>
      
      
      
      
      
      
      
      
      }>
        </Route>
      
      





    </Routes>
    
    
    
    </Router>
    
    
    
    
    


    
    
    
    

 
</div>
  );
}

export default App;
