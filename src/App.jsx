import { useEffect, useState} from "react";
import { useFetch } from "./useFetch";

const App=()=>{
    const {finalData, loading}=useFetch("https://jsonplaceholder.typicode.com/posts/2");
    if(loading){
        return <div>
            loading...
        </div>
    }
    return (
    <div>
        {finalData.title}
    </div>
    )
}



export default App