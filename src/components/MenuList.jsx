import { ITEM_IMG_CDN_URL } from "../utils/constants";

const MenuList = ({ menuList }) => {
  return (
    <div>
      {menuList.map((m) => {
        console.log(m);
        const itemDetails = m?.card?.info;
        const { id, name, imageId, description, price, defaultPrice } =
          itemDetails;
        return (
          <div key={id} className="p-2 m-2 border-b-4 flex justify-between">
            <div className="w-9/12 m-2 p-2">
              <div className="">
                <span>{name}</span>
                <span> - ₹ {(price ? price : defaultPrice) / 100}</span>
              </div>
              <p className="text-sm">{description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button className="bg-black text-white rounded-md shadow-md mx-16 p-2">Add+</button>
              </div>
              <img src={ITEM_IMG_CDN_URL + imageId} className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
