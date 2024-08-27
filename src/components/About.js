import React from 'react'

export default function About(props) {

   

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

//   BorderStyle
let borderStyle = {
    borderColor: (props.pinkMode.background2 === 'bg-[#AE044E]')?' border-2  border-white':'border-gray-400',
}

  
  return (
    <div className={`box1 flex flex-col justify-center items-center min-h-screen ${props.mode} dark:bg-black `}>
        <div className={`space-y-10 py-20 ${props.pinkMode.background2} ${props.pinkMode.textColor2} dark:bg-slate-900 dark:text-white px-10 w-3/5 rounded-lg shadow-lg`}>
            <h2 className='font-bold text-3xl text-center'>About LexiMorph</h2>
            
            <div className={`border ${borderStyle.borderColor} rounded-md dark:border-black   flex flex-col`}>
                <button className= {`border  ${borderStyle.borderColor} rounded-t-sm  dark:border-white py-2 text-start px-3 z-20`} onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse1' >Text Transformation Magic</button>
                <div className=" collapse1   transition ease-in-out duration-500 -translate-y-10 h-0">
                    <p className='hidden'>Convert text to uppercase, lowercase, or capitalize it effortlessly. Whether you’re crafting a tweet, writing an essay, or composing an email, LexiMorph has your back.</p>
                </div>

                <button className= {`border ${borderStyle.borderColor} dark:border-white py-2 text-start px-3`} onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse2' >Sentence Sculpting</button>
                <div className=" collapse1   transition ease-in-out duration-500 -translate-y-10 h-0">
                    <p className='hidden'>Split paragraphs into sentences or merge sentences into poetic prose. LexiMorph dances with punctuation to create symphonies of meaning.</p>
                </div>

                <button className= {`border ${borderStyle.borderColor} dark:border-white py-2 text-start px-3`} onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse3' >Word Counts and Beyond</button>
                <div className=" collapse1   transition ease-in-out duration-500 -translate-y-10 h-0">
                    <p className='hidden'>Ever wondered how long it takes to read your text? LexiMorph estimates reading time, helping you tailor your content for busy readers.</p>
                </div>

                <button className= {`border ${borderStyle.borderColor}  dark:border-white py-2 text-start px-3`} onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse4' >Readability Insights</button>
                <div className=" collapse1   transition ease-in-out duration-500 -translate-y-10 h-0">
                    <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur facilis quas, optio quibusdam, adipisci commodi corporis similique nobis debitis nostrum minus! Reiciendis voluptatem accusamus recusandae optio sit alias ullam.</p>
                </div>

                <button className= {`border ${borderStyle.borderColor} rounded-b-sm  dark:border-white py-2 text-start px-3`} onClick={handleCollapse} type="button" aria-expanded = "false" aria-controls='collapse4' >Preview Your Creations</button>
                <div className=" collapse1   transition ease-in-out duration-500 -translate-y-10 h-0">
                    <p className='hidden'>Before hitting that “publish” button, take LexiMorph for a spin. Preview your transformed text and ensure it sparkles like stardust.</p>
                </div>
                
            </div>
            <div>
                <p className='italic'>LexiMorph isn’t just a tool; it’s a companion for writers, poets, and anyone who revels in the magic of language. Join us on this enchanting journey!</p>
                <p className='italic'>Feel free to customize this description further, adding personal touches or emphasizing specific features that resonate with you. And remember, every word you write here is a spell cast into the digital realm!</p>
            </div>
        </div>
    
    </div>
  )
}
