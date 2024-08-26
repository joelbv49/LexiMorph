
import './index.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  // setting DarkMode
  const [mode,setMode] = useState("light");
  const [modeText,setModeText] = useState("Enable Dark Mode");
  const toggleMode = ()=>{
    if(mode === "dark"){
      
      setModeText("Enable Dark mode");
      showAlert("Enabled light Mode","success");
      setMode("light");
      document.title = "LexiMorph -LightMode";

      // not a good practice
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // },2000);

      // setInterval(() => {
      //   document.title = "install textUtils";
      // },1500);
    }
    else if(mode === "light"){ 
      setModeText("Enable light mode");
      showAlert("Enabled Dark Mode","success");
      document.title = "LexiMorph -DarkMode";
      setMode("dark");
      
    }
  }

  // setting alert
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  // setting colorPallete
  const [Color,setColor] = useState({
    textColor:"#FFFFFF"
  });

  const [backColor,setBackColor] = useState({
    back1:"#D1D5DB"
  })

  
  const handleColor = (event)=>{
    const val = event.target.value;
    setColor({
      textColor:val
    });
  };

  const handleBackColor1 = (event)=>{
    const val = event.target.value;
    setBackColor({
      back1:val
    });
  };

  // green mode
  
  const [greenMode,setGreenMode] = useState({
    background2:'bg-white',
    textColor2:'text-black',
  });
  const [greenModeText,setGreenModeText] = useState("Enable Green Mode");

  const handleGreenMode = ()=>{
    if(greenMode.background2 === "bg-white"){
      setGreenMode({
        background2:'bg-green-600',
        textColor2:'text-white',
      })
      setGreenModeText("Enable Light Mode");
      showAlert("Green Mode Enabled","Success");
    }
    else if(greenMode.background2 === "bg-green-600"){
      setGreenMode({
        background2:'bg-white',
        textColor2:'text-black',
      })
      setGreenModeText("Enable Green Mode");
      showAlert("Light Mode Enabled","Success");
    }
  }
  return (
    // <></> - is a jsx fragment ,jsx is a combination of html and js 
    // you can jump into js by using {} and you can return only one tag 
    // jsx is stricter so the html tag has to be closed
    // react is a single page application where without reloaded the components will be updated

    <>
      {/* <Router> */}
        <div className="con h-screen bg-gray-300" style={{backgroundColor:backColor.back1}}>

          {/* nav bar */}
          <Navbar title = "LexiMorph" aboutText = "about" mode = {mode} toggleMode = {toggleMode} modeText = {modeText} Color = {Color} handleColor = {handleColor} handleBackColor1 = {handleBackColor1} backColor = {backColor} greenText = {greenModeText} handleGreenMode = {handleGreenMode}/>

          {/* main */}
          <Alert alert = {alert}/>

          <Textform heading = "Enter your text to analyze below" mode = {mode} showAlert = {showAlert} Color = {Color} backColor = {backColor} greenMode = {greenMode} />
          
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL.
            react does a partial matching of 
            the path so you need to use exact path */}
          {/* <Routes>
            <Route
              exact path='/'
              element = 
              {}
            />
            <Route 
              exact path='/about'
              element = {<About/>}
            />
          </Routes> */}
          
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
