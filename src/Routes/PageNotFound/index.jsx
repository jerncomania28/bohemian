import { useNavigate } from "react-router-dom";

//assets
import ErrorPage from "../../assets/error-page.jpg";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full relative">
            <img src={ErrorPage} alt="error-page" className="w-full h-full object-cover" />

            <button
                className="capitalize outline-none border-none py-2 px-2 bg-black text-white text-[10px] font-bold tracking-wide absolute bottom-[1rem] right-[1rem] md:bottom-[3rem] md:right-[3rem] md:py-4 md:px-4 md:text-[15px]"
                onClick={() => navigate("/")}
            >
                &larr;
                back to Home
            </button>
        </div>
    )
}


export default PageNotFound;