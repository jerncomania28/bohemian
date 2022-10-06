import { useDispatch, useSelector } from "react-redux";
import { selectIsQuickView, setQuickView } from "../../states/slices/CoreSlice";

//components
import LightBox from "../LightBox";


const CartItem = ({ product }) => {


    const dispatch = useDispatch();

    const isQuickViewOpen = useSelector(selectIsQuickView);

    const handleShowQuickView = () => {
        dispatch(setQuickView(!isQuickViewOpen));
    }

    return (
        <div className="min-w-[250px] h-[400px] shadow-sm relative mx-3 my-2">
            <div className="w-full h-[75%] relative group hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black hover:before:opacity-25 hover:before:top-0 hover:before:left-0 ">
                <img src={product.image} alt="product" className=" w-full h-full object-cover object-top" />
                <button
                    className="hidden outline-none border-none px-4 py-2 bg-white text-black absolute top-1/2 left-1/2 transfrom -translate-x-[50%] opacity-70 md:group-hover:inline-flex uppercase whitespace-nowrap text-[15px]"
                    onClick={handleShowQuickView}
                >
                    Quick View
                </button>
            </div>
            <div className="flex justify-center items-center flex-col px-3 py-2">
                <h3 className="uppercase font-thin text-[12px] self-start">{product.title}</h3>
                <p className="uppercase font-thin text-gray-400 text-[12px] self-start">Bohemian Traders</p>
                <p className="text-[13px] self-start my-1">{`$${product.price}`}</p>
            </div>


            {isQuickViewOpen && <LightBox product={product} />}


        </div>
    )

}



export default CartItem;