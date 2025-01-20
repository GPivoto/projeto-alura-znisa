import PropTypes from "prop-types";
import {UserIcon} from "@heroicons/react/24/outline"

const Button = (props) =>{
    return(
        <div className="flex items-center">
            <button className="bg-custom-gradient border-2 border-white-100 py-3 px-5 rounded-full font-medium text-black-200">{props.text}</button>
            <div className="bg-custom-gradient w-12 h-12 rounded-full flex items-center justify-center border-2 border-white-100"><UserIcon className="size-6 cursor-pointer"/></div>
        </div>
        
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired, 
  };


export default Button 