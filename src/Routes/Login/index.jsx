import { Link } from "react-router-dom";




const FormInput = ({ type, label, id, name }) => {
    return (
        <div className="flex justify-center items-start flex-col w-full relative my-3">
            <label for={`#${id}`} className="my-2 text-[16px] text-gray-600 tracking-wide uppercase font-bold">{label}</label>
            <input type={type} name={name} id={id} className="border-[1px] border-black p-[1rem] w-full outline-none placeholder:text-[18px]" />
        </div>
    )
}


const LogIn = () => {

    return (
        <div className="w-full mb-[6rem] relative p-4 md:px-8">

            <div className="my-6">
                <span><Link to="/" className="uppercase text-yellow-600 text-[13px] font-bold ">Home</Link> / <span className="uppercase text-[13px]">Log In</span> </span>
            </div>
            <div className="flex justify-start items-start flex-col w-full md:justify-space md:flex-row ">

                <div className="flex justify-start items-center flex-col w-full relative md:w-[50%] ">
                    <h1 className="text-[23px] font-bold uppercase my-[0.5rem] tracking-wide self-start">Sign In</h1>

                    <form className="flex justify-start items-center flex-col w-full relative ">
                        <FormInput type="email" label="email address:" id="email" name="Email" />
                        <FormInput type="password" label="Password:" id="password" name="Password" />
                        <div className="flex justify-between items-center w-full my-3">
                            <button className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4"> sign In</button>
                            <p className="uppercase tracking-wide text-[16px] text-yellow-600 font-bold">Forgot password ?</p>
                        </div>
                    </form>

                </div>

                <div className="flex justify-center items-center w-full mx-auto relative mt-8 md:w-[50%] md:mt-auto ">
                    <div className="flex justify-center items-start flex-col bg-[#eee] mx-auto w-full py-6 px-6 md:w-[80%]">
                        <h1 className="text-[23px] mt-2 mb-6 tracking-wide uppercase">New Customer ?</h1>
                        <p className="text-[18px] font-bold">Create an account with us and you'll be able to:</p>
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
                        <button className="py-3 px-6 uppercase text-[18px] text-white font-bold bg-black outline-none border-none my-4 ">create account</button>

                    </div>

                </div>



            </div>

        </div>
    )
}


export default LogIn;