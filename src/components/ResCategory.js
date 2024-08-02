import { useState } from "react";
import CategoryItems from "./CategoryItems";

const ResCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
                    <span className="font-bold text-lg">⌄</span>
                </div>
                <div>
                    {showItems && <CategoryItems items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default ResCategory;
