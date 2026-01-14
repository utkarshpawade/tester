import { useState, createContext } from "react";
const Bulbcontext=createContext();
const App=()=>{
    return <div>
      <Bulbcontext>
        <Lightbulb/>
      </Bulbcontext>
      <Lightbulb/>
    </div>
}
const Lightbulb=()=>{
  const[Bulbon, Setbulb]=useState(true);
  return <div>
    <Bulbstate Bulbon={Bulbon}/>
    <Togglebulbstate Bulbon={Bulbon} Setbulb={Setbulb}/>
  </div>
}
const Bulbstate=({Bulbon})=>{
  return <div>
    {Bulbon ? <img src='https://www.w3schools.com/js/pic_bulboff.gif'></img>: <img src="https://www.w3schools.com/js/pic_bulbon.gif"></img>}
  </div>
}
const Togglebulbstate=({Bulbon,  Setbulb})=>{
  const toggle=()=>{
    Setbulb(currst=>!currst)
  }
  return <div>
    <button onClick={toggle}>toggle it</button>
  </div>
}
export default App