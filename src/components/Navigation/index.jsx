import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = ()=>{

  const navLinks = ["What's new" , "women", "Dresses", "atlethic", "curve", "classics" , "campaign"];

  const  navLinksSub ={
    0:["New Arrivals" , "view all"],
    1:["View All", "Dresses", "Separates","Tops","Co-ord", "Best sellers", " Back in Stock", "Bottoms", "Denim", "Jacket & Knits", "Loungewear", "Prints", "colour-Block", "BeachWear", "Event Wear" , "Denim sets", "accessories"],
    2:["view All", "Maxi","Midi","Mini","Printed"],
    4:["view all", "dresses","best sellers","back in stock","separetes","tops","bottoms","denim","Jacket & Knits","Loungewear","prints","beachwear","event wear", "accessories"],
    6:["Ligurian skies", "tonal activewear","helen mccullagh X Bohemian Traders","Al lago"]
  }

    return(
        <nav>

         {/* mobile & desktop menu --start*/}
         <div className="menu">
          <div className="menu-desktop">

          {
            navLinks.map((navLink)=>{
                return  (
                    <div>
                        <Link to={`${navLink}`}>{navLink}</Link>
                        <FontAwesomeIcon icon="fa-plus" />
                    </div>
                )
            })
          }
             

          </div>

          <span className="menu-burger"></span>

         </div>

         {/* mobile & desktop menu --end */}

        </nav>
    )
}


export default Navigation;