import { useState, createContext, useContext } from "react";
const Bulbcontext=createContext();

const App=()=>{
    const[Bulbon, Setbulb]=useState(true);
    return <div>
      <Bulbcontext.Provider value={{
        Bulbon: Bulbon,
        Setbulb: Setbulb
      }}>
        <Lightbulb/>
      </Bulbcontext.Provider>
      
    </div>
}

const Lightbulb=()=>{

  return <div>
    <Bulbstate/>
    <Togglebulbstate />
  </div>
}

const Bulbstate=()=>{
  const {Bulbon}=useContext(Bulbcontext);
  return <div>
    {Bulbon ? <img src='https://www.w3schools.com/js/pic_bulboff.gif'></img>: <img src="https://www.w3schools.com/js/pic_bulbon.gif"></img>}
  </div>
}

const Togglebulbstate=()=>{
  const {Bulbon, Setbulb}=useContext(Bulbcontext);
  const toggle=()=>{
    Setbulb(currst=>!currst)
  }
  return <div>
    <button onClick={toggle}>toggle it</button>
  </div>
}

export default App