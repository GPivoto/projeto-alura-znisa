import image from '../../../../public/Frame.svg'
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';

const Header = (props) =>{

    const links = [
        'About',
        'Projects',
        'Contact me'
    ]

    return(
        <div className='flex items-center justify-center gap-[200px] mt-12 mb-20 ml-10'>
            <header className='flex items-center text-white-100  gap-3'>
                <img src={image} alt="" />
                <h1 className='text-2xl pt-2'>{props.title}</h1>
            </header>
            
            <NavBar pages={links} />
            <Button text='Hire me'/>

        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
  };

  
export default Header