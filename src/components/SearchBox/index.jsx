import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchQueryFn } from "../../states/slices/CoreSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = ({ handleSearchBox }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(searchQueryFn(searchQuery));
        setSearchQuery("");
        handleSearchBox();
    }

    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-75">

            <div className="relative w-full h-full">
                <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[90%] mx-auto border-2 border-white bg-white flex justify-center items-center  ">
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search"
                        onChange={handleChange}
                        className="w-[80%] py-3 outline-none border-none indent-[15px] placeholder:uppercase placeholder:font-bold md:w-full"
                    />
                    <div className="w-[20%] md:w-[100px]  flex justify-around items-center ">
                        <FontAwesomeIcon icon="fa-magnifying-glass" className="text-[20px]" onClick={handleSubmit} />
                        <FontAwesomeIcon icon="fa-xmark" className="text-[25px]" onClick={handleSearchBox} />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default SearchBox;