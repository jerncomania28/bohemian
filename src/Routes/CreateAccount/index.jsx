import { Link } from "react-router-dom";


const CreateAccount = () => {
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
                            />
                        </div>
                    </div>

                    <div className="flex justify-start items-start flex-col w-full relative my-3 md:w-[83%] mx-auto md:mx-4">
                        <button className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4 ">Create Account</button>
                    </div>


                </form>

            </div>
        </div>
    )
}



export default CreateAccount;