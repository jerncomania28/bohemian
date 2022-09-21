import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const offset = useScrollPosition();

  const navStyles = {
    navParagraph: "bg-black text-center text-white py-2 px-4 uppercase text-[12px] tracking-wide",
    navLink: "text-[12px] uppercase font-bold group-hover:text-gray-600 group-hover:border-b-[1px] group-hover:border-black group-hover:before:absolute group-hover:before:border-[5px] group-hover:before:border-t-black group-hover:before:border-r-transparent group-hover:before:border-b-transparent group-hover:before:border-l-transparent group-hover:before:bottom-0 group-hover:before:left-[40%]",
    navSubLinkParent: "absolute top-[2.5rem] w-[250px] left-0 z-10 bg-white shadow-xl px-4 rounded hidden group-hover:block",
    navSubLink: "text-[12px] uppercase font-bold hover:border-b-[2px] hover:border-black ",
    navBar: "shadow-sm bg-white relative py-2",
    menuBtn: "relative w-[40px] h-[40px] mx-4 flex justify-center items-center md:hidden",
    menuBtnBurger: "block w-[23px] h-[1px] relative rounded before:absolute before:-top-[8px] before:w-[23px] before:h-[1px] before:bg-black before:rounded after:absolute after:top-[8px] after:w-[23px] after:h-[1px] after:bg-black after:rounded transition duration-1000 ease-in-out md:hidden",
    desktopMenu: "hidden justify-center items-center flex-wrap md:w-[30%] md:flex ",
    mobileNavLink: "text-[12px] uppercase font-bold pointer-events-none ",
  }

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


  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <div className="w-full relative">
        <p className={`${offset > 0 ? "hidden" : "block"} ${navStyles.navParagraph}`}>free shipping for all domestic australian orders over $200 </p>
        <nav className={`${navStyles.navBar} ${offset > 0 ? "fixed" : "block"}`}>

          <div>
            <div className={navStyles.desktopMenu}>
              {
                navLinks.map((navLink, _idx) => {
                  return (
                    <div key={_idx} className="mx-[5px] relative group">
                      <div className="py-2 ">
                        <Link to={`${navLink.route}`} className={navStyles.navLink}>{navLink.name}</Link>
                      </div>
                      <ul className={navStyles.navSubLinkParent}>
                        {
                          navLinksSub[_idx]?.map((subLink, _idx) => (
                            <li key={_idx} className="my-2">
                              <Link to={`${navLink.route}/${subLink.route}`} className={navStyles.navSubLink}>{subLink.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </div>

            <div className={navStyles.menuBtn} onClick={handleMobileMenu}>
              <span className={`${mobileMenu ? "transparent transform rotate-[360deg] before:origin-top-left before:transform before:-translate-y-[5px] before:rotate-[45deg] before:transition before:duration-1000 before:ease-in-out after:origin-top-left after:transform after:-rotate-[45deg] after:-translate-y-[4px] after:-translate-x-[3px] after:transition after:duration-1000 after:ease-in-out" : "bg-black"} ${navStyles.menuBtnBurger}`}></span>
            </div>

            {
              mobileMenu && (
                <div className="absolute top-[3.5rem]  w-full">
                  {
                    navLinks.map((navLink, _idx) => {
                      return (
                        <div key={_idx} className="w-full py-3 relative group">
                          <div className="w-[80%] mx-auto flex justify-between items-center pointer-events-none ">
                            <p className={navStyles.mobileNavLink}>{navLink.name}</p>
                            <FontAwesomeIcon icon="fa-plus" className="w-[10px] pointer-events-none" />
                          </div>
                          <ul className="w-full grid grid-cols-2 hidden">
                            {
                              navLinksSub[_idx]?.map((subLink, _idx) => (
                                <li key={_idx} className="my-2 text-center ">
                                  <Link to={`${navLink.route}/${subLink.route}`} className={`${navStyles.navSubLink}`}>{subLink.name}</Link>
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

          </div>


        </nav>
      </div>
      <Outlet />
    </>
  )
}


export default Navigation;