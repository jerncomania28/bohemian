
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// assets
import Facebook from "../../assets/icons8-facebook.svg";
import Instagram from "../../assets/icons8-instagram.svg";
import Tiktok from "../../assets/icons8-tiktok.svg";
import Twitter from "../../assets/icons8-twitter.svg";




const Footer = () => {

    const [selected, setSelected] = useState(null);
    const [subscribeEmail, setSubscribeEmail] = useState("");

    const FooterLinks = {
        0: {
            link: "Info",
            subLink: ["About us", "Contact Us", "Work With Us", "Privacy Policy"],
        },
        1: {
            link: "customer care",
            subLink: ["shipping", "returns", "inclusive sizing", "payment methods", "gift cards", "outlet"]
        }
    }


    const handleSelectedLink = (_idx) => {
        if (selected === _idx) {
            return setSelected(null);
        }
        setSelected(_idx);
    }

    const handleRouteCreation = (route) => route.split(' ').join("-").toLowerCase();

    const handleChange = (e) => {
        setSubscribeEmail(e.target.value);
    }

    const handleSubmit = () => {

        console.log("submitted!");

        setSubscribeEmail("");
    }

    return (
        <div className="w-full bg-black py-4 px-3">

            <div className="md:flex md:justify-between md:items-start md:mb-3 md:mx-3 ">

                <div>
                    <h3 className="uppercase text-white tracking-wide text-[22px] font-thin my-2">
                        Bohemian traders
                    </h3>
                    <div className="flex items-center">
                        <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                            <img src={Instagram} alt="instagram" className="w-[35px] text-white" />
                        </Link>
                        <Link to={{ pathname: "https://web.facebook.com/?_rdc=1&_rdr" }} target="_blank">
                            <img src={Facebook} alt="facebook" className="w-[35px]" />
                        </Link>
                        <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
                            <img src={Twitter} alt="twitter" className="w-[35px]" />
                        </Link>
                        <Link to={{ pathname: "https://www.tiktok.com/en/" }} target="_blank" >
                            <img src={Tiktok} alt="tiktok" className="w-[35px]" />
                        </Link>
                    </div>

                </div>

                {
                    Object.keys(FooterLinks).map((_idx) => {
                        return (
                            <div key={_idx} className="text-white">
                                <div className="flex justify-between items-center border-b-[1px] border-dotted border-white py-2 my-3 md:border-none" onClick={() => handleSelectedLink(_idx)}>
                                    <p className="uppercase font-bold text-[13px] ml-2 ">{FooterLinks[_idx].link}</p>
                                    <FontAwesomeIcon icon={`${selected === _idx ? " fa-caret-up" : "fa-caret-down"}`} className="text-white md:hidden" />
                                </div>

                                <ul className={` ${selected === _idx ? "block" : "hidden"} md:block `}>
                                    {
                                        FooterLinks[_idx].subLink.map((link, _idx) => {
                                            return <li key={_idx}>
                                                <Link to={handleRouteCreation(link)} className="uppercase font-bold text-[13px] ml-2 hover:underline">
                                                    {link}
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }

                <div>

                    <h4 className="text-[14px] my-4 font-bold uppercase text-white">Subscribe to Receive Update and  Special Offers!</h4>

                    <div className="border-2 border-white my-4 pr-2 w-full relative  md:w-auto md:my-auto">
                        <input
                            type="email"
                            value={subscribeEmail}
                            name="Email"
                            placeholder="YOUR EMAIL ADDRESS"
                            className="bg-transparent p-2 border-r-2 border-white text-white outline-none w-[70%] placeholder:text-white placeholder:text-[15px]"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="uppercase text-[14px] text-white font-bold outline-none border-none py-2 pl-1 text-center w-[30%] overflow-hidden"
                            onClick={handleSubmit}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>


            <p className="text-white font-bold text-[10px] uppercase w-full text-center">
                <span className="mx-1">Customerservice@Bohemiantraders.com </span> |
                <span className="mx-1">+234 8163921605</span> |
                <span className="mx-1">MON - FRI</span> |
                <span className="mx-1">9AM - 5PM GMT+1</span>
            </p>
        </div>
    )
}


export default Footer;