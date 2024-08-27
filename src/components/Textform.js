import React,{useState}from 'react'
// https://react.dev/learn/state-a-components-memory

// whenever we use local variable to update its value, it doest store the components memory because When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables. thats y hook state is used

// hook state gives some react features to the components - it uses useState to store the memory of the component const [stateVariable,updateFunc] = useState("0"); 

//whenever you try to change the state of a component updateFunc("hey use me") should be used

export default function Textform(props) {
  const [text,setText] = useState("");
  


  const handleUser = (event) =>{
    setText(event.target.value);
    
  }


  const handleUpClick = () =>{
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase","success");
   
  }

  const handleCapitalize = () =>{
    const arr = text.split(" ");
    let msg = "";
    for(let i in arr){
      arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1)+" ";
      msg+=arr[i];
    }
    setText(msg.trim());
    props.showAlert("word is capitalized","success");
  }

  const handleClear = () =>{
    let blank = "";
    setText(blank);
    props.showAlert("Text cleared","success");
  }
  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase","success");
  }

  const handleSpeak =()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Laptop speaking","success");
  }

  const handleDownload = (event) =>{
   const filename = 'my-custom-file.pdf';
   const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
   const url = URL.createObjectURL(blob);
   const link = document.createElement("a");
   link.href = url;
   link.download = filename;
   event.target.after(link);
   link.click();
   event.target.nextSibling.remove(link);
   props.showAlert("Downloaded","success");
  }
  
  return (
     
    <div className= {props.mode} >
      <div className={"box min-h-screen flex justify-center  dark:bg-black"} >
            <div className={`w-[90%]  my-3 ${props.pinkMode.background2} rounded-xl shadow-md p-11  space-y-8  dark:bg-slate-900`} >
              <h1 className={`font-bold text-2xl ${props.pinkMode.textColor2} dark:text-white`}>{props.heading}</h1>

              <textarea className='outline-none  w-full border border-gray-400 p-2 rounded-md dark:text-black' value ={text} onChange={handleUser} placeholder='Enter your text' rows="7"></textarea>

              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2 rounded-md text-white`} onClick={handleUpClick}>UpperCase</button>
              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2 ml-20 rounded-md text-white`} onClick={handleCapitalize}>Capitalize</button>
              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2  ml-20 rounded-md text-white`} onClick={handleLowerCase}>lowerCase</button>
              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2  ml-20 rounded-md text-white`} onClick={handleClear}>Clear Text</button>
              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2  ml-20 rounded-md text-white`} onClick={handleSpeak}>Speak</button>
              <button disabled = {text.length === 0} className={`${props.pinkMode.background2 ==="bg-[#AE044E]"?"bg-[#440075]":"bg-blue-700"} dark:bg-blue-700 px-8  py-2  ml-20 rounded-md text-white`} onClick={handleDownload}>Download PDF</button>

              {/* summary */}
              <div className={`space-y-3 ${props.pinkMode.textColor2} dark:text-white`}>
                <h1 className='font-bold text-2xl'>Your Text Summary</h1>
                <p className='mx-10' > {text.split(/[\n ]+/).filter((element)=>{return element.length!==0}).length} words and {text.trim().length} characters</p>
                <p className='mx-10' >{0.008*(text.split(/[\n ]+/).filter((element)=>{return element.length!==0}).length)} minutes to read a word</p>
                <h2 className ='font-bold text-2xl'>Preview</h2>
                <p >{text.length>0?text:"Nothing to preview"}</p>
                
              </div>

            </div>
      </div>
    </div>
    
    
  )
}
