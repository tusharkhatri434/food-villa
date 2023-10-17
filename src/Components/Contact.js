import React, { useState } from 'react'

const Para =({title,isVisible,setIsVisble})=>{

  return (
    <>
      <div className="border-4 border-black w-[60vw] m-auto">
        {!isVisible ? (
          <button
            className="border-4 border-black m-2 hover:bg-slate-600"
            onClick={() => {setIsVisble(title);}}>
            Show
          </button>
        ) : (
          <button
            className="border-4 border-black m-2 hover:bg-slate-600"
            onClick={() => {
              setIsVisble("");}}>
            Hide
          </button>
        )}
        <h3 className="font-bold">{title}</h3>
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at
            doloribus magni illum aspernatur nostrum vero necessitatibus.
            Sapiente rerum libero aut, consequuntur natus dolore iste tempore
            vitae sed, architecto doloribus. Alias eligendi debitis iusto!
            Lorem, ipsum dolor
          </p>
        )}
      </div>
    </>
  );
}


const Contact = () => {

  const [isVisible, setIsVisble] = useState("");
  const[showall,setShow] = useState(false);
   
     function showaing (){
      setShow(!showall);
     }
     
  return (
    <div>
      <button onClick={showaing}>Show all</button>
      <h1>Contact page</h1>
      <Para  title={"about"} isVisible={showall || isVisible==='about'} setIsVisble={(itemName)=>{
        setIsVisble(itemName)
      }}/>
      <Para title={"teams"} isVisible={showall ||  isVisible==='teams'} setIsVisble={(itemName)=>{
        setIsVisble(itemName);
      }}/>
      <Para title={"abs"} isVisible={showall || isVisible==='abs'} setIsVisble={(itemName)=>{
        setIsVisble(itemName);
      }}/>
    </div>
  );
};

export default Contact;
