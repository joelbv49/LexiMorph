import React, { useState } from 'react'

export default function About() {

    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });
    
    const [btnText,setBtnText] = useState("Enable Dark Mode");

  const handleCollapse = (event)=>{
    let collapse = event.target.getAttribute("aria-expanded");
    const col1 = event.target.nextSibling;
    if(collapse === "true"){
        col1.classList.add("-translate-y-10");
        col1.classList.add("h-0");
        col1.classList.remove("p-3");
        col1.firstChild.classList.add("hidden");
        event.target.setAttribute("aria-expanded","false");
    }
    else{
        col1.classList.remove("-translate-y-10");
        col1.classList.remove("h-0");
        col1.classList.add("p-3");
        col1.firstChild.classList.remove("hidden");
        event.target.setAttribute("aria-expanded","true");
    }
  }

  const handleDarkMode = ()=>{
    if(myStyle.backgroundColor === "white"){
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        });
        setBtnText("Enable Light Mode");
    }
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        });
        setBtnText("Enable Dark Mode");
    }
  }

  return (
    <div className='bg-white flex flex-col justify-center items-center py-4 space-y-3' style={myStyle}>
        <h2 className='font-bold text-xl'>About Me</h2>
        
        <div className="border border-gray-500 rounded-md flex flex-col">
            <button className='border border-gray-400 w-[30rem] py-2 text-start px-3 z-20'onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse1' >MyNetflix</button>
            <div className=" collapse1 w-[30rem]  transition ease-in-out duration-500 -translate-y-10 h-0">
                <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur facilis quas, optio quibusdam, adipisci commodi corporis similique nobis debitis nostrum minus! Reiciendis voluptatem accusamus recusandae optio sit alias ullam.</p>
            </div>

            <button className='border border-gray-400 w-[30rem] py-2 text-start px-3' onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse2' >why Netflix</button>
            <div className=" collapse1 w-[30rem]  transition ease-in-out duration-500 -translate-y-10 h-0">
                <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur facilis quas, optio quibusdam, adipisci commodi corporis similique nobis debitis nostrum minus! Reiciendis voluptatem accusamus recusandae optio sit alias ullam.</p>
            </div>

            <button className='border border-gray-400 w-[30rem] py-2 text-start px-3' onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse3' >about Netflix</button>
            <div className=" collapse1 w-[30rem]  transition ease-in-out duration-500 -translate-y-10 h-0">
                <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur facilis quas, optio quibusdam, adipisci commodi corporis similique nobis debitis nostrum minus! Reiciendis voluptatem accusamus recusandae optio sit alias ullam.</p>
            </div>

            <button className='border border-gray-400 w-[30rem] py-2 text-start px-3' onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse4' >for more queries</button>
            <div className=" collapse1 w-[30rem]  transition ease-in-out duration-500 -translate-y-10 h-0">
                <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur facilis quas, optio quibusdam, adipisci commodi corporis similique nobis debitis nostrum minus! Reiciendis voluptatem accusamus recusandae optio sit alias ullam.</p>
            </div>
        </div>

        <button className='bg-blue-600 px-3 py-1 text-white rounded-md hover:bg-blue-400' onClick={handleDarkMode} type='submit' >{btnText}</button>
    </div>
  )
}
