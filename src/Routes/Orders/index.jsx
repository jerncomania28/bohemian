import { signOutUser} from "../../utils/firebase";



const Orders = () => {

    return (
        <div>
            Orders Page
            <button onClick={signOutUser}>sign out</button>

        </div>
    )
}


export default Orders;