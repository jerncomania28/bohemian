import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//assets

import Logo from "../../assets/logo.webp";

//components 


const useScrollPosition = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return offset;
}


const NavigationIcons = ({ handleShowDropDown, currency, currencyChoosen, showCurrencyDropDown, handleSetCurrency }) => {

  return (
    <div className="flex justify-end items-center md:justify-center mr-8 ">

      {/* ---- change currency ---- */}

      <div className="hidden relative md:flex">
        {/* ---currency display --- */}
        <button className="px-3 py-1 mr-3 " onClick={handleShowDropDown} >
          <span>$</span>
          <span className="mx-1">{currency[currencyChoosen]}</span>
          <FontAwesomeIcon icon={showCurrencyDropDown ? "fa-caret-up" : "fa-caret-down"} />
        </button>

        {/* ---- currency options ---- */}
        {
          showCurrencyDropDown && (
            <ul className="absolute top-[2rem] bg-white shadow-md left-3">
              {
                Object.keys(currency).map((_idx) => (
                  <li key={_idx} onClick={() => handleSetCurrency(_idx)} className="py-2 p-4 hover:bg-gray-100" >{currency[_idx]}</li>
                ))
              }
            </ul>
          )
        }

      </div>

      <FontAwesomeIcon icon="fa-magnifying-glass" className="mr-3  text-[20px]" />
      <FontAwesomeIcon icon="fa-circle-user" className="mr-3 text-[20px] " />
      <FontAwesomeIcon icon="fa-bag-shopping" className=" text-[20px]" />

    </div>

  )
}



const DesktopMenu = ({ navLinks, navLinksSub }) => {
  return (
    <div className={`hidden justify-center items-center flex-wrap md:flex`}>
      {
        navLinks.map((navLink, _idx) => {
          return (
            <div key={_idx} className="mx-[5px] relative group">
              {/* ----- main link ---- */}
              <div className="py-2 ">
                <Link
                  to={`${navLink.route}`}
                  className={
                    `text-[12px] uppercase font-bold group-hover:text-gray-600 group-hover:border-b-[1px] group-hover:border-black group-hover:before:absolute group-hover:before:border-[5px] group-hover:before:border-t-black group-hover:before:border-r-transparent group-hover:before:border-b-transparent group-hover:before:border-l-transparent group-hover:before:bottom-0 group-hover:before:left-[40%]`
                  }
                >
                  {navLink.name}
                </Link>
              </div>

              {/* ---- subLinks ------ */}
              <ul className={`absolute top-[2.5rem] w-[250px] left-0 z-10 bg-white shadow-xl px-4 rounded hidden group-hover:block`}>
                {
                  navLinksSub[_idx]?.map((subLink, _idx) => (
                    <li key={_idx} className="my-2">
                      <Link to={`${navLink.route}/${subLink.route}`} className={`text-[12px] uppercase font-bold hover:border-b-[2px] hover:border-black`}>{subLink.name}</Link>
                    </li>
                  ))
                }
              </ul>

            </div>
          )
        })
      }
    </div>

  )
}


const MobileMenu = ({ mobileMenu, navLinks, navLinksSub, handleSubLinkDisplay, selected }) => {

  if (mobileMenu) {
    return (
      <div className="absolute top-[3.5rem]  w-full">
        {
          navLinks.map((navLink, _idx) => {
            return (
              <div key={_idx} className="w-full py-3 relative group" onClick={() => handleSubLinkDisplay(_idx)}>

                {/* ----- main Link bar ------  */}
                <div className={`w-[80%] mx-auto flex justify-between py-2 items-center pointer-events-none ${selected === _idx ? "text-gray-600" : ""} `}  >
                  <p className={`text-[12px] uppercase font-bold pointer-events-none `}>{navLink.name}</p>
                  {
                    navLinksSub[_idx] ? <FontAwesomeIcon icon={selected === _idx ? "fa-minus" : "fa-plus"} className="w-[10px]" /> : ""

                  }
                </div>

                {/* ---- subLink bar ------ */}
                <ul className={`w-full grid-cols-2 ${selected === _idx ? "grid" : "hidden"}`}>
                  {
                    navLinksSub[_idx]?.map((subLink, _idx) => (
                      <li key={_idx} className="my-2 text-center ">
                        <Link to={`${navLink.route}/${subLink.route}`} className={`text-[12px] uppercase font-bold hover:border-b-[2px] hover:border-black`}>{subLink.name}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
            )

          })
        }

      </div>
    )
  } else {
    return;
  }


}

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currencyChoosen, setCurrencyChoosen] = useState(0);
  const [showCurrencyDropDown, setShowCurrencyDropDown] = useState(false);

  const offset = useScrollPosition();

  const navLinks = [
    { name: "What's new", route: "whats-new" },
    { name: "women", route: "women" },
    { name: "Dresses", route: "dresses" },
    { name: "atlethic", route: "atlethic" },
    { name: "curve", route: "curve" },
    { name: "classics", route: "classics" },
    { name: "campaign", route: "campaign" },
    { name: "sustainable", route: "sustainable" }
  ];

  const navLinksSub = {
    0: [
      { name: "New Arrivals", route: "new-arrivals" },
      { name: "view all", route: "view-all" }
    ],
    1: [
      { name: "View All", route: "view-all" },
      { name: "Dresses", route: "dresses" },
      { name: "Separates", route: "separates" },
      { name: "Tops", route: "tops" },
      { name: "Co-ord", route: "co-ord" },
      { name: "Best sellers", route: "best-sellers" },
      { name: "Back in Stock", route: "back-in-stock" },
      { name: "Bottoms", route: "bottoms" },
      { name: "Denim", route: "denim" },
      { name: "Jacket & Knits", route: "jacket-knits" },
      { name: "Loungewear", route: "loungewear" },
      { name: "Prints", route: "prints" },
      { name: "colour-Block", route: "colour-block" },
      { name: "BeachWear", route: "beach-wear" },
      { name: "Event Wear", route: "event-wear" },
      { name: "Denim sets", route: "denim-sets" },
      { name: "accessories", route: "accessories" }
    ],
    2: [
      { name: "view All", route: "view-all" },
      { name: "Maxi", route: "maxi" },
      { name: "Midi", route: "midi" },
      { name: "Mini", route: "mini" },
      { name: "Printed", route: "printed" }
    ],
    4: [
      { name: "view all", route: "view-all" },
      { name: "dresses", route: "dresses" },
      { name: "best sellers", route: "best-sellers" },
      { name: "back in stock", route: "back-in-stock" },
      { name: "separetes", route: "separates" },
      { name: "tops", route: "tops" },
      { name: "bottoms", route: "bottoms" },
      { name: "denim", route: "denim" },
      { name: "Jacket & Knits", route: "jacket-knits" },
      { name: "Loungewear", route: "loungewear" },
      { name: "prints", route: "prints" },
      { name: "beachwear", route: "beachwear" },
      { name: "event wear", route: "event-wear" },
      { name: "accessories", route: "accessories" }
    ],
    6: [
      { name: "Ligurian skies", route: "ligurian-skies" },
      { name: "tonal activewear", route: "tonal-activewear" },
      { name: "helen mccullagh X Bohemian Traders", route: "helen-mccullagh" },
      { name: "Al lago", route: "al-lago" }
    ]
  }


  const currency = {
    0: 'AUD',
    1: 'EUR',
    2: 'NZD',
    3: 'USD'
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const handleSubLinkDisplay = (_idx) => {
    if (selected === _idx) {
      return setSelected(null);
    }
    setSelected(_idx);
  }

  const handleSetCurrency = (_idx) => {
    setCurrencyChoosen(_idx)
    setShowCurrencyDropDown(!showCurrencyDropDown);
  }

  const handleShowDropDown = () => {
    setShowCurrencyDropDown(!showCurrencyDropDown)
  }

  return (
    <>
      <div className="w-full relative">
        {/* -------top nav paragraph -------- */}
        <p
          className={
            `${offset > 0 ? "hidden" : "block"} 
          bg-black text-center text-white py-2 px-4 uppercase text-[12px] tracking-wide`
          }
        >
          free shipping for all domestic australian orders over $200
        </p>

        {/* ----- navigation proper ----- */}
        <nav
          className={
            `shadow-md bg-white relative py-2 grid grid-cols-[100px_1fr_1fr] grid-rows-1 items-center place-content-center md:grid-cols-[1fr_1fr_300px] 
            ${offset > 0 ? "fixed" : "block"}`
          }
        >

          {/* --------- navigation menu ----------- */}
          <div>
            <DesktopMenu navLinks={navLinks} navLinksSub={navLinksSub} />

            <div className={`relative w-[40px] h-[40px] mx-4 flex justify-center items-center md:hidden`} onClick={handleMobileMenu}>
              <span
                className={
                  `${mobileMenu ? "transparent transform rotate-[360deg] before:origin-top-left before:transform before:-translate-y-[5px] before:rotate-[45deg] before:transition before:duration-1000 before:ease-in-out after:origin-top-left after:transform after:-rotate-[45deg] after:-translate-y-[4px] after:-translate-x-[3px] after:transition after:duration-1000 after:ease-in-out" : "bg-black"}
                block w-[23px] h-[1px] relative rounded before:absolute before:-top-[8px] before:w-[23px] before:h-[1px] before:bg-black before:rounded after:absolute after:top-[8px] after:w-[23px] after:h-[1px] after:bg-black after:rounded transition duration-1000 ease-in-out md:hidden`}></span>
            </div>

            <MobileMenu mobileMenu={mobileMenu} navLinks={navLinks} navLinksSub={navLinksSub} handleSubLinkDisplay={handleSubLinkDisplay} selected={selected} />

          </div>

          {/* --------------- logo --------- */}
          <div className="relative flex justify-center items-center">
            <img src={Logo} alt="bohemian-logo" className="w-full" />
          </div>


          {/* ---------------- navigation icons --------- */}
          <NavigationIcons
            handleShowDropDown={handleShowDropDown}
            currency={currency}
            currencyChoosen={currencyChoosen}
            showCurrencyDropDown={showCurrencyDropDown}
            handleSetCurrency={handleSetCurrency}
          />

        </nav>
      </div >
      <Outlet />
    </>
  )
}


export default Navigation;