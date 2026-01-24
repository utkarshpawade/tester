import { useEffect, useState} from "react";
import { useFetch } from "./useFetch";
import { send } from "vite";

function useDebounce(ogfun){
    const currentClock=useRef();
    const fn=()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout()
    }
}

const App=()=>{
    function sendDatatoBackend(){
        fetch("");
    }
    const debouncedfn=useDebounce(sendDatatoBackend);
    return (
    <div>
        <input type="text" onChange={debouncedfn}></input>
    </div>
    )
}



export default App