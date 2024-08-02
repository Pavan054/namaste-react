import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";
import { MdDelete, MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-4">
        <div className="w-6/12 m-auto justify-center">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl p-2 m-2">Cart</h1>
                <div className="p-2 m-2 cursor-pointer">
                    <MdDelete size="30px" data-testid="clearCart" onClick={handleClearCart} />
                </div>
                {/* <button className="bg-green-200 p-2 m-2 rounded-lg"  onClick={handleClearCart}>Clear Cart</button>
                <MdDelete /> */}
            </div>
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-4">
            {cartItems.length == 0 && <div className="flex"><MdRemoveShoppingCart size="100px" /><h1 className="p-4 m-4">Your cart is empty. Please add the items.</h1></div>}
            <CategoryItems items={cartItems} />
        </div>
    </div>
}

export default Cart;
