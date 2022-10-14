import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductAdvertise from "../../components/ProductsAdvertise";
import {
    addProductsToCart,
    increaseProductQuantity,
    removeProductsFromCart,
} from "../../states/slices/cartSlice";


const ProductDescription = () => {


    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [itemInCart, setItemInCart] = useState(false);
    const { id } = useParams();
    const { products } = useSelector(state => state.products);


    const dispatch = useDispatch();

    const { items } = useSelector(state => state.cart);



    useEffect(() => {
        if (!products) return
        const _product = products.find(product => product.id === Number(id));
        setProduct(_product);
    }, [id, products])


    useEffect(() => {
        const obj = items.find(cartItem => cartItem.id === product.id);

        if (obj) {
            const { quantity } = obj;
            setItemInCart(true);
            setQuantity(quantity);
        } else {
            setItemInCart(false);
            setQuantity(0);
        }

    }, [items, product]);


    const handleRemoveProduct = () => {
        dispatch(removeProductsFromCart(product))
    }

    const handleAddProduct = () => {
        dispatch(addProductsToCart(product))
    }

    const handleInceaseProduct = () => {
        dispatch(increaseProductQuantity(product))
    }

    return (

        product && (
            <>
                <div className="w-full relative flex flex-col items-center justify-center my-4 mb-10 snap-y snap-mandatory snap-start md:flex-row">
                    <div className="w-full px-4 pt-2 mt-[1rem] md:w-[50%] h-[400px] relative">
                        <img src={product.image} alt="view" className="w-[80% mx-auto h-full object-fit" />
                    </div>

                    <div className="flex flex-col justify-start items-center w-full mx-auto px-4 pt-2 mt-[1rem] md:w-[45%] relative">
                        <div className="flex self-start flex-col">
                            <h1 className="font-thin self-start">{product.title}</h1>
                            <p className="uppercase font-thin text-gray-400 self-start my-2">Bohemian Traders</p>
                            <p className="text-[25px] my-1 self-start">{`$${product.price}`}</p>
                        </div>

                        <div className="flex self-start my-3">
                            {
                                [0, 1, 2, 3, 4].map(_idx => (
                                    <FontAwesomeIcon icon="fa-star" key={_idx} />
                                ))
                            }
                            <p className="text-[12px] font-thin ml-1">(NO REVIEWS YET)</p>
                        </div>

                        {/* FIGURE OUT A WAY TO MAKE SIZES OPTIONAL */}
                        {/* 
                        <div className="w-full flex flex-col justify-center items-center my-2">
                            <p className="font-thin self-start my-1">SIZE:</p>
                            <div className="flex self-start mb-2 flex-wrap">
                                {

                                    (product.category.includes("women")) &&
                                    SIZES.map((size, _idx) => (
                                        <p className="p-2 border-[1px] border-gray-300 px-2 text-center text-[13px] cursor-pointer h-[30px] text-center mr-1 my-1 hover:border-gray-500" key={_idx}>
                                            {size}
                                        </p>
                                    ))
                                }
                            </div>
                        </div> */}

                        <button className="w-full text-center bg-black text-white uppercase py-2 text-[20px] outline-none border-none" onClick={handleAddProduct}>
                            {
                                itemInCart ? "In Cart" : "Add To Cart"
                            }
                        </button>
                        <div className="w-full flex justify-center items-center my-3">
                            <button className="flex-none py-3 border-black border-[1px] px-3 outline-none" onClick={handleRemoveProduct}>
                                <FontAwesomeIcon icon="fa-minus" />
                            </button>
                            <span className="flex-grow mx-1 text-center py-3 border-black border-[1px] ">
                                {quantity}
                            </span>
                            <button className="flex-none py-3 px-3 border-black border-[1px] outline-none" onClick={handleInceaseProduct}>
                                <FontAwesomeIcon icon="fa-plus" />
                            </button>
                        </div>

                        <div className="flex justify-between items-center w-full my-3 py-3">
                            <div className="inline-flex mr-4" >
                                <FontAwesomeIcon icon="fa-credit-card" className="self-center" />
                                <p className="text-[9px] ml-2">
                                    SHOP NOW, PAY LATER WITH AFTERPAY & ZIP
                                </p>
                            </div>
                            <div className="inline-flex">
                                <FontAwesomeIcon icon="fa-truck" className="self-center" />
                                <p className="text-[9px] ml-2">
                                    FREE SHIPPING ON AU ORDERS OVER $200
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <ProductAdvertise />
            </>
        )
    )

}


export default ProductDescription;