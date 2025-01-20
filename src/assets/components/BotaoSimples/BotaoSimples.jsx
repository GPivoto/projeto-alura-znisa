import PropTypes from "prop-types";


const BotaoSimples = (props) =>{
    return(
        <div className="flex items-center">
            <button className="bg-custom-gradient border-2 border-white-100 py-2 px-7 rounded-full font-medium text-black-200">{props.text}</button>
        </div>
        
    )
}

BotaoSimples.propTypes = {
    text: PropTypes.string.isRequired, 
  };


export default BotaoSimples