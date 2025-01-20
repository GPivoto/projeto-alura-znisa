import portal from '../../../../public/Portal.svg'
import PropTypes from 'prop-types';
import Testimonial from '../Testimonial/Testimonial';


const Clients = (props) =>{
    return(
        <div className='ml-[197px] mb-60'>
            <div className='flex gap-7 mb-28'>
                <h6 className='text-white-100 text-4xl'>{props.title}</h6>
                <img src={portal} alt="Portal" />
            </div>

            <div className='grid grid-cols-2 gap-12 w-[850px]'>
                <Testimonial />
                <div className='ml-10'><Testimonial /></div>
                
                <Testimonial />
                <Testimonial />
            </div>
            


        </div>
        
    )
}

Clients.propTypes = {
    title: PropTypes.string.isRequired, 
  };

export default Clients