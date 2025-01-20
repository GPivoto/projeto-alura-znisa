import portal from '../../../../public/Portal.svg'
import PropTypes from 'prop-types';
import estrela from '../../../../public/estrela.svg'
import Step from '../Step/Step';

const About = (props) =>{
    return(
        <div className='-mt-4'>

            <div className='flex gap-24 justify-center text-white-100 text-xl mb-20 border-t-2 border-b-2 py-5 px-3 border-white-100/25'>

                 <span>Framer</span>
                 <img src={estrela} alt="estrela" />
                 <span>Webflow</span>
                 <img src={estrela} alt="estrela" />
                 <span>Figma</span>
                 <img src={estrela} alt="estrela" />
                 <span>Notion</span>
                 <img src={estrela} alt="estrela" />
                 
            
            </div>


            <div className='flex gap-7 ml-[197px]'> 
                <h3 className='text-4xl text-white-100 '>
                {props.title}
                </h3>
                <img src={portal} alt="portal" className='size-9' />
            </div>

            <div className='ml-[171px] mb-28 w-[735px]'>
                <Step />
                
            </div>
           
        </div>
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired, 
  };


export default About