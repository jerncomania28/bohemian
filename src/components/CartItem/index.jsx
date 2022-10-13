import { useNavigate } from "react-router-dom";


const CartItem = ({ product, lightboxHandler }) => {

    const navigate = useNavigate();

    const handleNavigate = (productId) => {
        navigate(`/products/${productId}`)
    }

    return (
        <div className="min-w-[250px] max-w-[300px] h-[400px] shadow-sm relative mx-3 my-2">
            <div className="w-full h-[300px] relative group hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black hover:before:opacity-25 hover:before:top-0 hover:before:left-0 ">
                <img src={product.image} alt="product" className=" w-full h-full object-fit object-top" />
                <button
                    className="hidden outline-none border-none px-4 py-2 bg-white text-black absolute top-1/2 left-1/2 transfrom -translate-x-[50%] opacity-70 group-hover:inline-flex uppercase whitespace-nowrap text-[15px]"
                    onClick={() => lightboxHandler(product)}
                >
                    Quick View
                </button>
            </div>
            <div className="flex justify-center items-center flex-col px-3 py-2" onClick={() => handleNavigate(product.id)}>
                <h3 className="uppercase font-thin text-[10px] self-start">{product.title}</h3>
                <p className="uppercase font-thin text-gray-400 text-[12px] self-start">Bohemian Traders</p>
                <p className="text-[13px] self-start my-1">{`$${product.price}`}</p>
            </div>

        </div>
    )

}



export default CartItem;