import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom'
import {QRCodeCanvas} from 'qrcode.react';

function App() {
  

  
  return (
    <div className="App">
      <div style={{position:"absolute" ,left : "50%", bottom:"50%", transform:"translate(-50%,50%)"}}><QRCodeCanvas value="https://slowdit.netlify.app/" /></div>
      
      
    </div>
  );
}

export default App;
