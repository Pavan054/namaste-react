import ResCard, { withFastDeliveryLabel } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

// Creating body
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    // we can say its a copy of listOfRestaurants. While applying filters we will apply on listOfRestaurants
    // but while displaying them we will display filteredListOfRestaurants
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const FastDeliveryResCard = withFastDeliveryLabel(ResCard);

    const { loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
            'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
            );
        
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            // Try to parse the response as JSON
            const json = await response.json();
            // restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(restaurants);
        
            // Assuming setListOfRestaurants is a state setter function
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you are offilne. Please check your internet connection.</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter p-4 flex justify-between">
                <div className="nickname flex m-2 p-2">
                    <label className="p-2 ml-2">Can we call with your nick name?</label>
                    <input className="p-2 border border-black rounded-lg" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="search flex m-2 p-2">
                    <input type="text" className="search-text border border-black rounded-lg" data-testid="searchInput" value={searchText} onChange={(text) => {
                        setSearchText(text.target.value);
                    }}></input>
                    <button className="px-4 bg-green-200 hover:bg-blue-200 ml-2 rounded-lg" onClick={() => {
                        const filteredListOfRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredListOfRestaurants);
                    }}>Search</button>
                </div>
                <div className="search flex m-2 p-2">
                    <button type="filter" className="filter-btn p-2 bg-green-200 hover:bg-blue-200 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                        );
                        setFilteredListOfRestaurants(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            
            </div>
            <div className="res-container flex flex-wrap justify-evenly shadow-lg">
                {filteredListOfRestaurants.map(res => 
                <Link key={res.info.id} to={"/resmenu/" + res.info.id}>
                    {res?.info?.sla?.deliveryTime < 25 ? (<FastDeliveryResCard resData={res}/>) : (<ResCard resData={res}/>) }
                </Link>
                )}
            </div>
        </div>
    );
};

export default Body;
