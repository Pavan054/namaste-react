import { CDN_URL } from "../utils/constants";

// creating Restaurant Cards
const ResCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return (
        <div data-testid="resCard" className="res-card m-4 p-4 w-[200px] h-[500px] bg-gray-200 rounded-lg hover:bg-gray-300 shadow-md">
            <img 
            className="res-logo w-[250px] h-[150px] rounded-lg"
            alt="food"
            src={CDN_URL + cloudinaryImageId}/>
            <h3 className="py-4 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export const withFastDeliveryLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-500 text-white m-2 ml-6 p-2 rounded-lg">Fast Delivery</label>
                <ResCard {...props}/>
            </div>
        );
    };
};

export default ResCard;
