
import { useSelector, useDispatch } from "react-redux";
import { setQuickView, setLightBoxCurrentProduct } from "../../states/slices/CoreSlice";
import CartItem from "../CartItem";
import LightBox from "../LightBox";
import { useIsQuickViewOpen } from "../../Hooks/useQuickView";




const ProductAdvertise = () => {

    const { products, isLoading } = useSelector(state => state.products);

    const isQuickViewOpen = useIsQuickViewOpen();
    const lightBoxCurrentProduct = useSelector(state => state.core.lightBoxCurrentProduct);


    const dispatch = useDispatch();

    const lightboxHandler = (product) => {
        dispatch(setLightBoxCurrentProduct(product));
        dispatch(setQuickView(true));
    }

    return (
        <>
            {isQuickViewOpen && <LightBox product={lightBoxCurrentProduct} />}


            <div className="flex justify-start items-center w-full overflow-x-scroll no-scrollbar md:justify-center">
                {
                    isLoading ? <p>Loading ...</p>
                        :
                        products ?
                            products.slice(0, 4).map((cartItem, _idx) => <CartItem product={cartItem} key={_idx} lightboxHandler={lightboxHandler} />)
                            :
                            <p>Couldn't fetch data , sorry !</p>
                }


            </div>
        </>
    )
}

export default ProductAdvertise;