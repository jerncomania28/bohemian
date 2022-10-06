import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../states/slices/productSlice";
import Hero from "../../assets/shop-atlethics.webp";


//components  
import CartItem from "../../components/CartItem";




const Section = ({ route, handleNavigate, background, text }) => {
    return (
        <div className={`relative w-full h-[450px] my-2 ${background} bg-cover bg-top transition duration-1000 hover:transform hover:scale-95 ease-in-out hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black hover:before:opacity-25 hover:before:top-0 hover:before:left-0 md:flex-auto  md:w-[300px]`} onClick={() => handleNavigate(route)}>
            <p className="text-white uppercase text-[15px] font-bold absolute bottom-[1rem] left-[1rem]">{text}</p>
        </div>
    )
}


const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.products);

    const handleNavigate = (route) => {
        navigate(route);
    }

    useEffect(() => {
        dispatch(getAllProducts());

    }, [dispatch])


    const sectionImages = {
        0: {
            route: "/whats-new/new-arrivals",
            background: "bg-shop-whats-new",
            text: "Shop What's New"
        },
        1: {
            route: "/women/separates",
            background: "bg-shop-loungewear",
            text: "Shop Separates"
        },
        2: {
            route: "/women/prints",
            background: "bg-shop-prints",
            text: "Shop Prints"

        },
        3: {
            route: "/menu/dresses",
            background: "bg-shop-dresses",
            text: "Shop Dresses"
        }


    }


    const exploreImages = {
        0: {
            route: "/women/separates",
            background: "bg-shop-loungewear",
            text: "Shop Separates"
        },
        1: {
            route: "/women/jackets-knits",
            background: "bg-shop-jacket-knits",
            text: "Shop OutWear"
        },
        2: {
            route: "/athletic",
            background: "bg-shop-active-wears",
            text: "Shop ActiveWear"
        }
    }

    return (

        <div className="w-full relative ">

            <div className=" relative p-3">

                <div className=" w-full relative h-[100vh] ">
                    <img src={Hero} alt="hero" className="w-full h-full object-cover object-top" />
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] translate-y-[80%] md:-translate-y-[50%] flex justify-center items-center flex-col mb-[4rem] ">
                        <h1 className="text-white font-bold uppercase my-4 text-[30px] tracking-widest md:text-[60px] whitespace-nowrap">New Arrivals</h1>
                        <button className="p-3 border-[1px] border-white text-white uppercase outline-none cursor-pointer" onClick={() => handleNavigate("/whats-new/new-arrivals")}>
                            Shop Now
                        </button>
                    </div>
                </div>


                <div className="flex justify-center items-center flex-wrap mt-4">

                    {
                        Object.keys(sectionImages).map(_idx => (<Section
                            route={sectionImages[_idx].route}
                            handleNavigate={handleNavigate}
                            background={sectionImages[_idx].background}
                            text={sectionImages[_idx].text}
                            key={_idx}
                        />))
                    }

                </div>

                <div className=" w-full my-3 inline-flex overflow-x-scroll no-scrollbar">

                    {
                        isLoading && <p>Loading ...</p>
                    }
                    {
                        products.slice(0, 4).map((cartItem, _idx) => <CartItem product={cartItem} key={_idx} />)
                    }

                </div>
            </div>

            <div className="w-full h-[80vh] my-3 bg-shop-event-wears bg-cover bg-center relative">

                <button className="p-3 px-5 font-bold border-[1px] border-white text-white uppercase text-[13px] outline-none cursor-pointer relative top-[50%] left-[10%] transition duration-500 ease-in hover:bg-white hover:text-black" onClick={() => handleNavigate("/women/event-wears")}>
                    Shop Event Wear
                </button>

            </div>


            <div className="w-full relative ">

                <h1 className="w-full text-center uppercase text-[23px] font-thin py-3">Explore </h1>

                <div className="flex justify-center items-center flex-wrap mt-4">
                    {
                        Object.keys(exploreImages).map(_idx => (<Section
                            route={exploreImages[_idx].route}
                            handleNavigate={handleNavigate}
                            background={exploreImages[_idx].background}
                            text={exploreImages[_idx].text}
                            key={_idx}
                        />))
                    }
                </div>

            </div>

            <div className="w-[95%] md:w-[90%] rounded mx-auto flex flex-col justify-center items-start my-[3rem] px-4 md:px-6 py-4 bg-orange-50 md:flex-row">

                <h1 className="text-[30px] font-thin p-2 w-full md:w-1/2">
                    MADE FOR THE MODERN BOHEMIAN
                </h1>
                <div className="flex flex-col justify-center items-center md:ml-[1rem] p-2 w-full md:w-1/2 ">
                    <p className="leading-7 text-[18px]">
                        We blend classic, fashion forward pieces including elevated basics with bohemian detailing.
                        Since our inception, our aim has been to provide size inclusive fashion basics for the modern bohemian.
                        We seek to be an environmentally and socially responsible company;
                        as such we work closely with our suppliers to ensure ethical conditions for workers.
                        We are continually working towards providing the best clothing and accessories,
                        with the least environmental and social harm possible.
                    </p>
                    <button className="p-3 mt-4 px-10 font-bold border-[1px] border-black text-black uppercase text-[13px] outline-none cursor-pointer self-start" onClick={() => handleNavigate("/about-us")}>
                        About Us
                    </button>


                </div>

            </div>

        </div>


    )
}



export default Home;