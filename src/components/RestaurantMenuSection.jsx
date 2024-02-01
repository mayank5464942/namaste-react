import { ITEM_IMG_CDN_URL } from "../utils/constants.js";
const RestaurantMenuSection=(props)=>{
    const {menuInfo}=props;
    return (<div>
    {menuInfo.map(a=>{
        if(a?.card?.card?.itemCards){
            const {title,itemCards}=a?.card?.card;
            return (<div className="border border-solid border-black shadow-md bg-gray-100">
                <h2 className="font-bold ">{title}</h2>
                <ul>
                    {itemCards.map(item=>(<div className="px-15 flex justify-between border border-gray-600 border-solid hover:bg-gray-300 items-center"  key={item?.card?.info?.id} >
                        <div className="m-2 px-10 text-center ">
                        <li>{item?.card?.info?.name}</li> 
                        <li>{item?.card?.info?.price}</li>
                        </div>
                        <div className="m-2 px-100"><img src={ITEM_IMG_CDN_URL+item?.card?.info?.imageId}></img></div>
                        </div>))}
                </ul>
            </div>);
    }})}
    </div>);
}

export default RestaurantMenuSection;
