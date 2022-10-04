import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    handleCurrentDisplayName,
    selectErrorIsVisible,
    setErrorMessage,
    setErrorIsVisible,
} from "../../states/slices/CoreSlice";
//components
import ErrorMessage from "../../components/ErrorMessage";

import { createUserViaEmailAndPassword, createUserDoc } from "../../utils/firebase";



const FormData = {
    Email: "",
    Password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    companyName: "",
    Phone: "",
    addressLine: "",
}


const CreateAccount = () => {

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

        const { Email, Password, confirmPassword, ...otherProps } = formData;

        if (Password !== confirmPassword) {
            dispatch(setErrorMessage("Password Does Not Match"));
            dispatch(setErrorIsVisible(!errorIsVisible));
        } else if (Object.values(formData).every(Boolean) !== true) {
            dispatch(setErrorMessage("Fields Not Completely Filled"));
            dispatch(setErrorIsVisible(!errorIsVisible));
        } else {

            try {
                const response = await createUserViaEmailAndPassword(Email, Password);
                createUserDoc(response.user, { displayName: `${otherProps.firstName} ${otherProps.lastName}`, phone: otherProps.Phone, address: otherProps.addressLine, "company name": otherProps.companyName, });
                dispatch(handleCurrentDisplayName(otherProps.firstName));
                navigate("/orders");
            } catch (err) {
                if (err.code === "auth/email-already-exists") {
                    dispatch(setErrorMessage("Email Already Exists"));
                    dispatch(setErrorIsVisible(!errorIsVisible));
                } else if (err.code === "auth/email-already-in-use") {
                    dispatch(setErrorMessage("Email Already In Use"));
                    dispatch(setErrorIsVisible(!errorIsVisible));
                } else if (err.code === "auth/weak-password") {
                    dispatch(setErrorMessage("Password should be at least 6 characters"));
                    dispatch(setErrorIsVisible(!errorIsVisible));
                }
                console.log(err);
            }
        }
    }



    return (
        <div className="w-full relative p-4 md:px-8">

            <div className="my-6">
                <span><Link to="/" className="uppercase text-yellow-600 text-[13px] font-bold ">Home</Link> / <span className="uppercase text-[13px]">Create Account</span> </span>
            </div>

            <div className="flex justify-center items-center flex-col">
                <h1 className="text-[23px] font-bold uppercase my-[0.5rem] tracking-wide self-start">New Account</h1>

                <form className="flex justify-center items-center flex-col w-full relative " method="POST" >


                    <div className="flex justify-center items-center flex-col w-full relative md:flex-row">
                        {/* email  */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#email`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Email Address:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="email"
                                name="Email"
                                id="email"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                                required
                                onChange={handleChange}
                            />
                        </div>
                        {/* password  */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#password`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Password:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="password"
                                name="Password"
                                id="password"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600"
                                title="must be at least 8 characters , an uppercase , a lowercase and a special character"
                                pattern={"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col w-full relative md:flex-row">
                        {/* confirm password  */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#confirm-password`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Confirm Password:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirm-password"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600"
                                title="must be at least 8 characters , an uppercase , a lowercase and a special character"
                                pattern={"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}
                                required
                                onChange={handleChange}

                            />
                        </div>

                        {/* first name */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#first-name`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">First Name:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                                required
                                onChange={handleChange}

                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col w-full relative md:flex-row">
                        {/* last name */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#last-name`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Last Name:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                                required
                                onChange={handleChange}

                            />
                        </div>

                        {/* company name */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <label htmlFor={`#company-name`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Company Name:</label>
                            <input
                                type="text"
                                name="companyName"
                                id="company-name"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px]"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col w-full relative md:flex-row">
                        {/* Phone Number  */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#phone`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Phone:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="number"
                                name="Phone"
                                id="phone"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Addtess */}
                        <div className="flex justify-center items-start flex-col w-full relative my-3 md:w-[40%] md:mx-4">
                            <div className="flex justify-between items-center w-full">
                                <label htmlFor={`#address-line`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">Address Line:</label>
                                <span className="text-[12px] uppercase font-thin">Required</span>
                            </div>
                            <input
                                type="text"
                                name="addressLine"
                                id="address-line"
                                className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px] focus:invalid:border-pink-500 focus:invalid:text-pink-600 focus:valid:border-green-300 focus:valid:text-green-600 "
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-start items-start flex-col w-full relative my-3 md:w-[83%] mx-auto md:mx-4">
                        <button
                            className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4 "
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                    </div>


                </form>

            </div>

            {
                errorIsVisible && <ErrorMessage />
            }

        </div>
    )
}



export default CreateAccount;