import { useSelector, useDispatch } from "react-redux";
import { selectErrorMessage, handleCancelError } from "../../states/slices/CoreSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ErrorMessage = () => {

    const dispatch = useDispatch();
    const errorMessage = useSelector(selectErrorMessage);

    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-90">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[350px] mx-auto bg-white flex flex-col justify-center items-center px-4 py-3 rounded ">
                <FontAwesomeIcon icon="fa-xmark" onClick={() => dispatch(handleCancelError())} className="self-end text-[20px]" />
                <div className="flex justify-center items-center flex-col">
                    <FontAwesomeIcon icon="fa-triangle-exclamation" className="text-red-700 text-[50px]" />
                    <p className="my-3">{errorMessage}</p>
                </div>

            </div>
        </div>
    )

}



export default ErrorMessage;