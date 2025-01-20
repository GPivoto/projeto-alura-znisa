import { HomeIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NavBar = (props) =>{


    return(
        <div className="flex items-center gap-10 justify-center text-white-100 border-2 border-white-100 rounded-full py-[6px] pr-8 pl-[6px] ">
           
                <div className="bg-gray-100 rounded-full px-4 py-2"> <HomeIcon className="size-6 cursor-pointer"/>
                </div>
               
            {props.pages.map(page => <li className="cursor-pointer list-none " key={page}>{page}</li>)}
        </div>
    )
}

NavBar.propTypes = {
    pages: PropTypes.string.isRequired, 
  };

export default NavBar