import Shimmer from "./Shimmer.jsx";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { swiggy_api_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const {loggedInUser,setUserName}=useContext(UserContext);
  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setResList(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline</h1>;

  if (resList.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 m-2 px-2 rounded-lg"
            onClick={() => {
              const filteredList = resList.filter((res) => {
                return res.info.name.toLowerCase()?.includes(searchText);
              });
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center m-2 p-2">
          <button
            type="button"
            className="bg-green-100 rounded-lg px-2"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
            <label className="p-2 m-2" >UserContext</label>
            <input type="text" className="p-2 m-2 border border-black border-solid" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex m-2 flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted === "false" ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardPromoted resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
