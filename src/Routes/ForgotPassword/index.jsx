import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forgotPassword } from "../../utils/firebase";



const Success = ({ handleCancelSuccess }) => {
    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-90">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[350px] mx-auto bg-white flex flex-col justify-center items-center px-4 py-3 rounded z-10">
                <FontAwesomeIcon icon="fa-xmark" onClick={handleCancelSuccess} className="self-end text-[20px]" />
                <div className="flex justify-center items-center flex-col">
                    <FontAwesomeIcon icon="fa-check-double" className="text-green-700 text-[50px]" />
                    <p className="my-3 text-center font-bold">Email Succesfully Sent! , check Spam folder if Not In Mails</p>
                </div>

            </div>
        </div>
    )
}




const ForgotPassword = () => {

    const [forgotEmail, setForgotEmail] = useState("");
    const [isSent, setIsSent] = useState(false);


    const handleChange = (e) => {
        setForgotEmail(e.target.value);
    }

    const handleCancelSuccess = () => {
        setIsSent(!isSent);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(forgotEmail);
        setForgotEmail("");
        handleCancelSuccess();
    }

    return (
        <>
            <div className="w-full relative flex justify-center items-center">

                <div className="flex justify-center items-center flex-col relative w-[80%] mx-auto">
                    <p className="mt-7 text-[16px] text-gray-600 tracking-wide uppercase font-bold self-start"> Forgot Your Password ? </p>

                    <div className="flex justify-center items-start flex-col w-full relative my-2">
                        <label htmlFor={`#forgot-email`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Email</label>
                        <input
                            type="email"
                            id="forgot-email"
                            value={forgotEmail}
                            className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="py-3 px-10 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4 self-start" onClick={handleSubmit}> send</button>

                </div>


            </div >

            {
                isSent && <Success handleCancelSuccess={handleCancelSuccess} />
            }
        </>
    )

}


export default ForgotPassword;