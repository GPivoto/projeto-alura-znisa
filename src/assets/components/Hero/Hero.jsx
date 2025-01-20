import detalhes from '../../../../public/Detalhes.svg'
import PropTypes from 'prop-types';
import BotaoSimples from '../BotaoSimples/BotaoSimples';

const Hero = (props) =>{
    return(
        <div className='ml-[175px] text-white-100 h-[567px]'>

                <img src={detalhes} className='z-0 ' />

                <div className='flex flex-col items-center w-[850px] ml-32 gap-3 px-[175px] -mt-[440px]'>
                <h2 className='text-4xl whitespace-nowrap'>{props.title}</h2>
                <p className='w-[468px]'>{props.text}</p>
                <BotaoSimples text='Hire me'/>
                </div>


        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
  };

export default Hero