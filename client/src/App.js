// import './App.css';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import MainPage from './components/MainPage.js'
import Admin from './components/Admin.js'


function App() {

  const currentPath = window.location.pathname;

  return (
    <Router>
      <div>
        {currentPath === '/' && <MainPage />}
        {currentPath === '/admin' && <Admin />}
      </div>
    </Router>
  );
}


export default App;
