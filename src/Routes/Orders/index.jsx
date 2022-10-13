import { signOutUser } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";


const Orders = () => {

    const navigate = useNavigate();

    const handleOrders = () => {
        signOutUser();
        navigate("/");
    }

    return (
        <div>
            Orders Page
            <button onClick={handleOrders}>sign out</button>

        </div>
    )
}


export default Orders;