import {useEffect, useState} from "react";
export function useFetch(url ){
 const [finalData, setFinalData]=useState({});
 async function getDetails(){

 }
 useEffect(()=>{
    getDetails();
 }, [])
}