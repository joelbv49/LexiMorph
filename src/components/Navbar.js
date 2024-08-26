// always write the first name of the file capital
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// The information you pass down like this is called props.
// components let you split the ui independently ex Navbar is a component (pieces of codes)
// props are (like arguments  in the functions ) the information that can be passed to a component
// propTypes - a dataType of a props, To run typechecking on the props for a component, you can assign the special propTypes property 
export default function Navbar({title = "Set your text here",aboutText,mode,toggleMode,modeText,Color,handleColor,handleBackColor1,backColor,handleGreenMode,greenText}) { 

  
  return (

    <div className= {mode}>
      {/* navbar */}
      <nav className="bg-slate-900 h-14 flex items-center justify-between px-8 dark:bg-black text-white  dark:border-b dark:border-white green:bg-green-500" style = {{color:Color.textColor}}>

        <div className=" flex">

          <a className="font-bold" href='#'>{title}</a>
          <ul className='ml-20 flex space-x-10'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>Contact</li>
            <li>
              <a href='#'>{aboutText}</a>
            </li>
          </ul>

        </div>
        
        {/* color pallete */}
        <label className="flex space-x-2">
          <input className='sr-only  peer' type="checkbox" name="" id="" />
          
          
          <div className="space-x-5 hidden peer-checked:block">
            <label className='space-x-2'>
              <input className='colorSet w-4 h-4' type="color" value = {Color.textColor} onChange={handleColor} />
              <span className='text-xs'>customize text color1</span>
            </label>

            <label className='space-x-2'>
              <input className='colorSet w-4 h-4' type="color" value = {backColor.back1} onChange={handleBackColor1} />
              <span className='text-xs'>customize backgroundcolor1</span>
            </label>

            
          </div>
          <div className="text-xs border border-gray-500 px-2 py-1 rounded-full font-bold">customize color</div>
        </label>
        
        {/* GreenMode */}
        <label className='inline-flex  items-center space-x-2 ' >
          <input className='peer sr-only' type="checkbox" />
          <div className="relative w-8 h-4 rounded-full bg-gray-500 after:content-[''] after:absolute after:w-4 after:h-4 after:rounded-full after:bg-white  peer-checked:after:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:bg-green-600 " onClick={handleGreenMode}> 
          </div>
          <p>{greenText}</p>
        </label>

        {/* DarkMode */}
        <label className='inline-flex items-center space-x-2'>
          {/* whenever you use the input wrap it with the label and rtl:right to left mode ltr: left to right  */}
          {/* peer allows to add styles to the element according to the state of the sibling */}
          {/* sr-only: makes the content invisible in screen but will be present in screen */}
          <input className='peer sr-only' type="checkbox" name="" id="" />
          <div className="relative w-8 h-4 bg-gray-400 rounded-full after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:bg-blue-500" onClick={toggleMode}></div>
          <p>{modeText}</p>
        </label>

        
      </nav>
    </div>
    
  )
}

//you can set the datatypes of the props
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText : PropTypes.string
};

//we can also set the defaultprops - value that is set to the component if the value is not set from the parent component
// Navbar.defaultProps = {
//   title : "set your text here"
// }
//if i didnt mention the value in the parent component then this text will be displayed
