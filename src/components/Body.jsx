import Shimmer from "./Shimmer.jsx";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [resList,setResList]=useState([]);
  const [filteredList,setFilteredList]=useState([]);
  const [searchText,setSearchText]=useState("");

  useEffect(()=>{
    fetchData();
  } ,[]); 

  const fetchData=async()=>{
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json=await data.json();
    setResList(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus=useOnlineStatus();
  if(!onlineStatus) return (<h1>You are offline</h1>)

  if(resList.length===0){
    return <div><Shimmer /></div>;
  }

 
  
  return (
    <div className="body">
      <div className="search">
        <h1>Search</h1>
      </div>
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
            <button className="search-btn" onClick={()=>{
                const filteredList=resList.filter((res)=>{ return res.info.name.toLowerCase()?.includes(searchText)});
                setFilteredList(filteredList);
            }}>Search</button>
        </div>
        <button type="button" className="filter-btn" onClick={()=>{
            const filteredList=resList.filter(res=>res.info.avgRating>4);
            setFilteredList(filteredList);
        }
        }>
            Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        
        {filteredList?.map((restaurant) => (
         <Link key={restaurant?.info?.id} to={"restaurants/"+restaurant?.info?.id}>
         <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
