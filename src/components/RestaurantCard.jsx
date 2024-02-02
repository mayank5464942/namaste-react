import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } = resData?.info;
    return (
      <div className="bg-gray-100 w-48 m-2 p-2 rounded-lg hover:bg-gray-200">
        <img
          alt="res-logo"
          className="rounded-lg"
          src={
           CDN_URL +
            cloudinaryImageId
          }
        />
        <h4 className="my-2 font-bold text-center">{name}</h4>
        <h4 className="text-wrap text-center" >{cuisines.join(", ")}</h4>
        <h4 className="text-center">{avgRating} stars</h4>
        <h4 className="text-center">{deliveryTime} minutes</h4>
      </div>
    );
  };


  //promoted restaturant card

export  const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (<div>
            <label className="absolute bg-black text-white px-2 rounded-sm opacity-80">Promoted</label>
            <RestaurantCard resData={props.resData} />
        </div>
        );
    }
  }

  export default RestaurantCard;