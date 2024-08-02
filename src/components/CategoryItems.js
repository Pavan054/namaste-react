import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({items}) => {
    // console.log(items);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">

                    <div className="w-9/12">
                        <div className="text-left p-2">
                            <p>{item.card.info.name}</p>
                            <p>Rs. {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                        </div>
                        <div className="p-2">
                            <p className="text-xs text-left mt-2">{item.card.info.description}</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="absolute">
                            <button className="px-2 mx-14 rounded-lg mt-28 bg-white border-green-500 border-2 text-green-500" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-36 h-36 rounded-lg ml-4" />
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CategoryItems;
