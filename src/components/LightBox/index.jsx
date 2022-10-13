import { useSelector, useDispatch } from "react-redux";
import { setQuickView, selectIsQuickView } from "../../states/slices/CoreSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LightBox = ({ product }) => {

    const dispatch = useDispatch();
    const isQuickViewOpen = useSelector(selectIsQuickView);

    const handleRemoveQuickView = () => {
        dispatch(setQuickView(!isQuickViewOpen));
    }

    // const SIZES = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-neutral-400 z-20 flex">
            <div className="w-[95%] md:w-[80%] h-[90vh] md:h-[70vh] mx-auto rounded bg-white flex flex-col justify-center overflow-hidden items-center relative top-[50%] transform -translate-y-[50%]">
                <div className="h-[10%] self-end">
                    <FontAwesomeIcon icon="fa-xmark" className="mx-4 pt-2 text-[25px]" onClick={handleRemoveQuickView} />
                </div>

                <div className="flex flex-col justify-center items-center w-full h-[90%] relative md:flex-row">

                    {/* product images */}

                    <div className="w-full my-auto md:w-[50%] h-[50%] md:h-[90%] relative mr-2 flex justify-center items-center ">

                        <img src={product.image} alt="lightbox-product" className="w-[60%] md:w-full h-[100%] object-fit" />

                    </div>


                    {/* product information */}
                    <div className="flex flex-col justify-start items-center w-full px-4 pt-2 mt-[1rem] md:w-[50%] h-[50%] md:h-auto relative overflow-y-scroll md:overflow-none">
                        <div className="flex self-start flex-col">
                            <h1 className="font-thin self-start">{product.title}</h1>
                            <p className="uppercase font-thin text-gray-400 self-start my-2">Bohemian Traders</p>
                            <p className="text-[13px] my-1 self-start">{`$${product.price}`}</p>
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

                        <button className="w-full text-center bg-black text-white uppercase py-2 text-[20px] outline-none border-none">
                            Add To Cart
                        </button>

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
            </div>
        </div>
    )

}


export default LightBox;