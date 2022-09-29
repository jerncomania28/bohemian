import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"
import { selectSearchQuery } from "../../states/slices/CoreSlice";
// import { selectSearchQuery } from "../../states/slices/CoreSlice";
import Hero from "../../assets/hero.jpg";



const Section = ({ route, handleNavigate, background, text }) => {
    return (
        <div className={`relative w-full h-[450px] my-2 ${background} bg-cover bg-top transition duration-1000 hover:transform hover:scale-95 ease-in-out hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black hover:before:opacity-25 hover:before:top-0 hover:before:left-0 md:flex-auto  md:w-[300px]`} onClick={() => handleNavigate(route)}>
            <p className="text-white uppercase text-[15px] font-bold absolute bottom-[1rem] left-[1rem]">{text}</p>
        </div>
    )
}


const Home = () => {

    const navigate = useNavigate();

    const searchSelect = useSelector(selectSearchQuery);

    const handleNavigate = (route) => {
        navigate(route);
    }


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



    return (
        <div className="w-full relative p-3">

            <div className=" w-full relative h-[100vh] ">
                <img src={Hero} alt="hero" className="w-full h-full object-cover" />
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

            <p>
                {searchSelect}
            </p>




        </div>
    )
}



export default Home;