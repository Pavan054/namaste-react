import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useResMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, costForTwo, cloudinaryImageId, avgRating, sla } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-xl my-6">{name}</h1>
            <p className="font-bold">{cuisines} | {costForTwoMessage}</p>
            <p className="font-bold">{avgRating} | {sla.deliveryTime} mins</p>
            {categories.map((category, index) => <ResCategory key={category.card?.card.title} data={category.card?.card} showItems={index == showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>)}
        </div>
    );
};

export default ResMenu;
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10576
// https://corsproxy.io/?
