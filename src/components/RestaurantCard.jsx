import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } = resData?.info;
    return (
      <div className="res-card">
        <img
          alt="res-logo"
          className="res-logo"
          src={
           CDN_URL +
            cloudinaryImageId
          }
        />
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;