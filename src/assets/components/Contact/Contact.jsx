
import PropTypes from "prop-types";
import portal from '../../../../public/Portal.svg'
import BotaoSimples from "../BotaoSimples/BotaoSimples";
import decoracao from '../../../../public/Decoracao.svg'


const Contact = (props) =>{
    return(
        <div className="flex gap-12 mb-28">
            <div>
                <div className="flex gap-7">
                    <h6 className="text-white-100 text-4xl ml-[197px]">{props.title}</h6>
                    <img src={portal} alt="Portal" />
                </div>
                
                <div className="flex flex-col gap-9 ml-[205px] w-[468px] mt-10">
                    <p className="text-white-100">Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
                    <BotaoSimples text="Send us a message" />
                    
                </div>
            </div>

            <div>
                <img src={decoracao} alt="" />
            </div>

           
            
        </div>
    )
}

Contact.propTypes = {
    title: PropTypes.string.isRequired, 
  };

export default Contact