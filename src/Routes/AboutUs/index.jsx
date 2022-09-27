import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="w-full relative py-4 px-4 md:px-6">
            <div className="mb-10">
                <span><Link to="/" className="uppercase text-yellow-600 text-[13px] font-bold ">Home</Link> / <span className="uppercase text-[13px]">About Us</span> </span>
            </div>

            <div>
                <h1 className="uppercase my-2">About Us</h1>

                <h4 className="uppercase my-2">Classic European Cuts , For The Modern Bohemian</h4>
                <p className="my-2">We’re known for “Classic European cuts, for the modern bohemian”.
                    We blend classic, fashion forward pieces including elevated basics with bohemian detailing.
                    Since our inception, our aim has been to provide size inclusive fashion basics for the modern bohemian.
                </p>
                <p className="my-2">
                    <span className="uppercas">BOHEMIAN TRADERS </span>
                    commenced operations in 2014 and is based on the Central Coast of NSW Australia, shipping domestically and internationally.
                </p>
                <p className="my-2">
                    We seek to be an environmentally and socially responsible company; as such we work closely with our suppliers to ensure ethical conditions for workers.
                    We are continually working towards providing the best clothing and accessories, with the least environmental and social harm possible.
                </p>

                <p className="my-2">You can find <span className="uppercase"> BOHEMIAN TRADERS</span> on the following social media:</p>

                <div className="my-4">
                    <p className="uppercase text-[15px]">Instagram:</p>
                    <Link to={{ pathname: "instagram.com/bohemian.traders" }} target="_blank" className="text-yellow-600 font-bold" >instagram.com/bohemian.traders</Link>
                </div>

                <div className="my-4">
                    <p className="uppercase text-[15px]">Facebook:</p>
                    <Link to={{ pathname: "facebook.com/bohemiantraders" }} target="_blank" className="text-yellow-600 font-bold" >facebook.com/bohemiantraders</Link>
                </div>

                <div className="my-4">
                    <p className="uppercase text-[15px]">Pinterest:</p>
                    <Link to={{ pathname: "pinterest.com/bohemiantraders" }} target="_blank" className="text-yellow-600 font-bold" >pinterest.com/bohemiantraders</Link>
                </div>

                <div className="my-4">
                    <p className="uppercase text-[15px]">PR & Media::</p>
                    <Link to={{ pathname: "mailto:pr@bohemiantraders.com," }} target="_blank" className="text-yellow-600 font-bold" >pr@bohemiantraders.com,<br /> +61 2 4327 8640</Link>
                </div>


                <p className="my-4">
                    The BOHEMIAN TRADERS brand and trademark is wholly owned and operated by BOHEMIAN HOLDINGS Pty Ltd.
                </p>

                <p className="my-4">
                    BOHEMIAN HOLDINGS Pty Ltd, <br />
                    ABN 83 617 372 488
                </p>

                <p className="my-4">
                    3 / 13 Bonnal Rd <br />
                    Erina, NSW 2260
                </p>
            </div>




        </div >
    )
}



export default AboutUs;