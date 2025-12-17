import {useState, useEffect} from "react";
function App() {
  let countervisi=true;

return <div>
  hi
{countervisi && <Counter></Counter>}
hello
</div>
}
function Counter(){
const [count, setCount]= useState(0);
useEffect(function (){
  setInterval(function (){
    setCount(count=> count+1);
},1000);
}, [])
function increaseCount(){
  setCount(count+1);
}



  return <div>
    <h1 id="cnt">{count}</h1>
    <button onClick={increaseCount}>increase count</button>
  </div>
}

export default App
