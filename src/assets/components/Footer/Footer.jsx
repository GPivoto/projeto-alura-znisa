import logo from '../../../../public/Frame.svg'
import PropTypes from 'prop-types'
import NavFooter from '../NavFooter/NavFooter';
import Button from '../Button/Button';



const Footer = (props) =>{
    return(
        <div className='h-[109px]'>
           <div className="ml-[212px] flex gap-[233px]">
            <div className='flex items-center gap-3'>
              <img src={logo} alt="Logo"/>
              <h1 className='text-white-100 text-2xl pt-2'>{props.text}</h1>
            </div>

            <NavFooter />
            <Button text='Hire me'/> 

        </div>
        </div>
        
    )
}

Footer.propTypes = {
    text: PropTypes.string.isRequired, 
  };


export default Footer 