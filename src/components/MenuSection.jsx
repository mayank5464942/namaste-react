import MenuList from "./MenuList.jsx";
import {useState} from "react";
const RestaurantMenuSection = ({ menuSection,showItem,setShowItem }) => {
  const { title } = menuSection?.card?.card;
  const [toggle,showToggle]=useState(false);
  
  const handleClick=()=>{
    setShowItem(toggle);
  };
  return (
    <div className="">
      <div className="mx-auto my-4 shadow-md py-2 bg-gray-100">
        <div className="flex justify-between px-2 cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {title} ({menuSection?.card?.card.itemCards?.length})
          </span>
          <span className="bold-font text-small">V</span>
        </div>
      {showItem && <MenuList menuList={menuSection?.card?.card?.itemCards} />}
      </div>
     </div>
  );
};

export default RestaurantMenuSection;
