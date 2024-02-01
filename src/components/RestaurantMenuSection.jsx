import { ITEM_IMG_CDN_URL } from "../utils/constants.js";
const RestaurantMenuSection=(props)=>{
    const {menuInfo}=props;
    return (<div>
    {menuInfo.map(a=>{
        if(a?.card?.card?.itemCards){
            const {title,itemCards}=a?.card?.card;
            return (<div className="">
                <h2 className="font-bold border border-solid border-gray-200 text-center ">{title}</h2>
                <ul>
                    {itemCards.map(item=>(<div className="px-10 flex justify-between bg-gray-200 hover:bg-gray-300 items-center border border-solid border-gray-400 my-2"  key={item?.card?.info?.id} >
                        <div className="m-2 px-10 text-center " key={item?.card?.info?.id+"1"}>
                        <li>{item?.card?.info?.name}</li> 
                        <li>{"Rs. "+item?.card?.info?.price}</li>
                        </div>
                        <div className="m-2 px-100" key={item?.card?.info?.id+"2"}><img className=" rounded-lg border border-solid border-gray-300" src={ITEM_IMG_CDN_URL+item?.card?.info?.imageId}></img></div>
                        </div>))}
                </ul>
            </div>);
    }})}
    </div>);
}

export default RestaurantMenuSection;
