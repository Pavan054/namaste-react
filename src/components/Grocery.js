import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {

    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="grocery-app">
            <h1>Hello {loggedInUser}, Welcome to Grocery Store</h1>
            <h1>Our Grocery Online Store is here</h1>
            <h2>Imagine it inlcudes a lot of components</h2>
        </div>
    )
}

export default Grocery;
