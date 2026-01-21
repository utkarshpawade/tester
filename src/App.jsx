import { useEffect, useState} from "react";
import { useFetch } from "./useFetch";

const App=()=>{
    const {finalData}=useFetch("https://jsonplaceholder.typicode.com/posts/2");
    return (
    <div>
        {finalData.title}
    </div>
    )
}



export default App