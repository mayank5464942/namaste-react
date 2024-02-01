import { useState,useEffect } from "react";
import { SWIGGY_MENU_URL } from "./constants";
const useRestaurantMenu=({resId})=>{
    const [resInfo,setResInfo]=useState(null);
    const  fetchData=async()=>{
        const data=await fetch(SWIGGY_MENU_URL+resId);
        const json=await data.json();
        setResInfo(json);
      }
    useEffect(()=>{
       fetchData()},[]);    
    return resInfo;
};

export default useRestaurantMenu;