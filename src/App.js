import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';


let name="Sanjay";
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null); 
  const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled", "Success");
  } 
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been enabled", "Success"); 
  }
}
  
  return (
   <>
  <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading = "Enter text here" mode={mode}/>
  {/* <About/> */}
   </div>
  </>
  );
}
export default App;
