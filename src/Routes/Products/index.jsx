import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLightBoxCurrentProduct, setQuickView } from "../../states/slices/CoreSlice";
import LightBox from "../../components/LightBox";
import { useIsQuickViewOpen } from "../../Hooks/useQuickView";

import CartItem from "../../components/CartItem";


const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState('');


    const dispatch = useDispatch();

    const isQuickViewOpen = useIsQuickViewOpen();
    const lightBoxCurrentProduct = useSelector(state => state.core.lightBoxCurrentProduct);


    const handleSelectedCategory = (category) => {
        if (category === "all") {
            setSelectedCategory("");
        } else {
            setSelectedCategory(category);
        }
    }

    const categories = ["all", "men", "women", "jewelery", "electronics"];

    const { products, isLoading } = useSelector(state => state.products);



    const lightboxHandler = (product) => {
        dispatch(setLightBoxCurrentProduct(product));
        dispatch(setQuickView(true));
    }

    console.log(selectedCategory);

    return (
        <div className="w-full relative">
            <div className="flex justify-start items-center overflow-x-scroll no-scrollbar my-[2rem] md:w-[90%] md:mx-auto md:justify-center">
                {
                    categories.map((category, _idx) => {
                        return <button
                            key={_idx}
                            className="bg-[#16171d] text-[16px] capitalize py-2 px-[4rem] text-center mx-[1px] text-white font-bold cursor-pointer outline-none border-none"
                            onClick={() => handleSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    })
                }
            </div>

            <div className="flex justify-center items-center flex-wrap gap-3 my-4">
                {
                    isLoading ? (
                        <div>
                            Loading...
                        </div>
                    )
                        :

                        products
                            .filter(product => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
                            .map((cartItem, _idx) => (<CartItem product={cartItem} key={_idx} lightboxHandler={lightboxHandler} />))
                }

            </div>


            {
                isQuickViewOpen && <LightBox product={lightBoxCurrentProduct} />
            }


        </div>
    )


}



export default Products;