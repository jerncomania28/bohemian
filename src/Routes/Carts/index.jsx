import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotal, cartCount, deleteProductFromCart } from "../../states/slices/cartSlice";


const CartItem = ({ product }) => {

    const { price, quantity, name, image } = product;

    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(deleteProductFromCart(product))
    }
    return (
        <div className=" w-[95%] md:w-[80%] mx-auto relative flex justify-between items-center border-black border-y-[1px] px-4 py-2 md:px-8">

            <div className="w-[100px] h-[100px] relative md:w-[150px] md:h-[150px]">
                <img src={image} alt="cart-item.img" className="w-full h-full" />
            </div>
            <div className="text-[20px] md:text-[30px]">
                <h3>{name}</h3>
                <p>{`$${price} X ${quantity}`}</p>
            </div>
            <div className="cart-item__delete-btn"  >
                <FontAwesomeIcon icon="fa-trash-can" alt="delete-item.img" onClick={handleDeleteProduct} className={"text-[25px]"} />
            </div>

        </div>
    )
}

const Carts = () => {

    const dispatch = useDispatch();

    const { items, count, total } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(cartTotal());
        dispatch(cartCount());

    }, [items, dispatch])


    return (
        <div className="w-full relative px-4 py-5 md:px-6">

            <div className="mb-10">
                <span><Link to="/" className="uppercase text-yellow-600 text-[13px] font-bold ">Home</Link> / <span className="uppercase text-[13px]">your cart</span> </span>
            </div>

            <h1 className="uppercase text-[30px] font-thin my-4 ">{`Your Cart (${count} Items)`}</h1>

            {
                items.length ? (
                    items.map((product, _idx) => <CartItem product={product} key={_idx} />)
                )
                    :
                    (<p className="text-[23px] my-4 font-bold text-gray-600">
                        your cart is empty!
                    </p>)
            }


            <p className=" w-[95%] md:w-[80%] mx-auto text-right text-[20px] md:text-[30px] my-6 font-bold">{`Total : ${total}`}</p>



        </div>
    )
}


export default Carts;