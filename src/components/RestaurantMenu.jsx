import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuSection from "./RestaurantMenuSection";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{
   const resId=useParams();
   const resInfo=useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer></Shimmer>;

    const resData=resInfo?.data?.cards?.[0]?.card?.card?.info;
    const {name,costForTwo,avgRating,cuisines}=resData;
    const menuInfo=resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{"CostForTwo: "+costForTwo}</h2>
            <h2>{"AvgRating: "+avgRating}</h2>
            <h2>{"cuisines: "+cuisines.join(',')}</h2>
            <h2>Menu</h2>
            <RestaurantMenuSection menuInfo={menuInfo}/>
        </div>
    );
}

export default RestaurantMenu;