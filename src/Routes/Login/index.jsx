import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {selectErrorIsVisible, setErrorMessage, setErrorIsVisible } from "../../states/slices/CoreSlice";
import { signInViaEmailAndPassword} from "../../utils/firebase";


//components 
import ErrorMessage from "../../components/ErrorMessage";

const FormData = {
    Email: "",
    Password: ""
}

const LogIn = () => {

    const [formData, setFormData] = useState(FormData);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorIsVisible = useSelector(selectErrorIsVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { Email, Password } = formData;

        if (!Email || !Password) {
            dispatch(setErrorMessage("Email or Password Not Filled"));
            dispatch(setErrorIsVisible(!errorIsVisible));
            return;
        } else {
            try {
                await signInViaEmailAndPassword(Email, Password);
                navigate("/orders");
            } catch (err) {

                if (err.code === "auth/wrong-password") {
                    dispatch(setErrorMessage("Wrong Password , Check Password !"));
                    dispatch(setErrorIsVisible(!errorIsVisible));
                } else if (err.code === "auth/user-not-found") {
                    dispatch(setErrorMessage("User Not Found  , Email Not Valid !"));
                    dispatch(setErrorIsVisible(!errorIsVisible));
                }



                console.log(err);

            }
        }


    }



    return (
        <>
            <div className="w-full mb-[6rem] relative p-4 md:px-8">

                <div className="my-6">
                    <span><Link to="/" className="uppercase text-yellow-600 text-[13px] font-bold ">Home</Link> / <span className="uppercase text-[13px]">Log In</span> </span>
                </div>
                <div className="flex justify-start items-start flex-col w-full md:justify-space md:flex-row ">

                    <div className="flex justify-start items-center flex-col w-full relative md:w-[50%] ">
                        <h1 className="text-[23px] font-bold uppercase my-[0.5rem] tracking-wide self-start">Sign In</h1>

                        <form className="flex justify-start items-center flex-col w-full relative " method="POST">

                            <div className="flex justify-center items-start flex-col w-full relative my-3">
                                <label htmlFor={`#email`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Email Address:</label>
                                <input
                                    type="email"
                                    name="Email"
                                    id="email"
                                    className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex justify-center items-start flex-col w-full relative my-3">
                                <label htmlFor={`#password`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Password:</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="password"
                                    className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600"
                                    onChange={handleChange}
                                    title="must be at least 8 characters , an uppercase , a lowercase and a special character"
                                    pattern={"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center w-full my-3">
                                <button className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4" onClick={handleSubmit}> sign In</button>
                                <Link to="/forgot-password" className="uppercase tracking-wide text-[16px] text-yellow-600 font-bold">Forgot password ?</Link>
                            </div>
                        </form>

                    </div>

                    <div className="flex justify-center items-center w-full mx-auto relative mt-8 md:w-[50%] md:mt-auto ">
                        <div className="flex justify-center items-start flex-col bg-[#eee] mx-auto w-full py-6 px-6 md:w-[80%]">
                            <h1 className="text-[23px] mt-2 mb-6 tracking-wide uppercase">New Customer ?</h1>
                            <p className="text-[18px] ">Create an account with us and you'll be able to:</p>
                            <ul className="list-disc list-inside ml-4 mt-2 mb-6 font-bold">
                                <li>
                                    Check out faster
                                </li>
                                <li>
                                    Save multiple shipping addresses
                                </li>
                                <li>
                                    Access your order history
                                </li>
                                <li>
                                    Track new orders
                                </li>
                                <li>
                                    Save items to your wish list
                                </li>
                            </ul>
                            <Link to="/create-account"><button className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4 ">create account</button></Link>

                        </div>

                    </div>



                </div>

            </div>

            {
                errorIsVisible && <ErrorMessage />
            }

        </>
    )
}


export default LogIn;