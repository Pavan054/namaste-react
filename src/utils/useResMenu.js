import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResMenu();
    },[])

    const fetchResMenu = async () => {
        try {
            const resMenu = await fetch(MENU_API + resId);

            // Check if the response status is OK (status code 200-299)
            if (!resMenu.ok) {
                throw new Error(`HTTP error! status: ${resMenu.status}`);
            }

            const resMenuData = await resMenu.json();

            setResInfo(resMenuData.data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    return resInfo;
}

export default useResMenu;
