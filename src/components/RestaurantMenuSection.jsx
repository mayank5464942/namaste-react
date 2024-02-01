const RestaurantMenuSection=(props)=>{
    const {menuInfo}=props;
    return (<div>
    {menuInfo.map(a=>{
        if(a?.card?.card?.itemCards){
            const {title,itemCards}=a?.card?.card;
            return (<div className="menu-section">
                <h2>{title}</h2>
                <ul>
                    {itemCards.map(item=>(<li key={item?.card?.info?.id} >{item?.card?.info?.name}</li>))}
                </ul>
            </div>);
    }})}
    </div>);
}

export default RestaurantMenuSection;
