import { useState } from "react";
const App=()=>{
    return <div>
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
    {Bulbon ? "bulb chalu": "bulbband"}
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