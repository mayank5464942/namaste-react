import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuSection from "./MenuSection";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const resId = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer></Shimmer>;

  const resData = resInfo?.data?.cards?.[0]?.card?.card?.info;
  const { name, costForTwo, avgRating, cuisines } = resData;
  const resCardInfo =
    resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const menuInfo = resCardInfo.filter(
    (menuItem) =>
      menuItem?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
  return (
    <div className="w-6/12 m-auto">
      <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <h2>{"CostForTwo: " + costForTwo}</h2>
        <h2>{"AvgRating: " + avgRating}</h2>
        <h2>{"cuisines: " + cuisines.join(",")}</h2>
      </div>
      <h2 className="font-bold text-lg">Menu</h2>
      {menuInfo.map((a) => {
        return <RestaurantMenuSection key={a?.card?.card?.title} menuSection={a} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
